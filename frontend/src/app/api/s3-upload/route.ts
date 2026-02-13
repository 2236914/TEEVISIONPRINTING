import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import type { S3ClientConfig } from '@aws-sdk/client-s3';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const config: S3ClientConfig = {
  region: process.env.AWS_USER_FILES_S3_BUCKET_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_USER_FILES_S3_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_USER_FILES_S3_SECRET_ACCESS_KEY as string,
  },
};

if (process.env.NODE_ENV === 'development') {
  config.endpoint = process.env.AWS_USER_FILES_S3_ENDPOINT as string;
  config.forcePathStyle = true;
}

const s3Client = new S3Client(config);

const bucketName = process.env.AWS_USER_FILES_S3_BUCKET_NAME as string;
let bucketUrl = `https://${bucketName}.s3.${process.env.AWS_USER_FILES_S3_BUCKET_REGION as string}.amazonaws.com`;

if (process.env.NODE_ENV === 'development') {
  bucketUrl = `${process.env.AWS_USER_FILES_S3_ENDPOINT as string}/${bucketName}`;
}

const uploadFileToS3 = async (
  key: string,
  body: Buffer,
  contentType: string
) => {
  try {
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: body,
      ContentType: contentType,
    });
    await s3Client.send(command);
  } catch (error) {
    throw error;
  }
};

// Validate by file extension instead of MIME type
const isValidFileExtension = (fileName: string): boolean => {
  const allowedExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.pdf', '.ai', '.eps', '.psd'];
  const lowerFileName = fileName.toLowerCase();
  return allowedExtensions.some(ext => lowerFileName.endsWith(ext));
};

// Get appropriate content type based on file extension
const getContentType = (fileName: string): string => {
  const ext = fileName.toLowerCase().split('.').pop();
  
  const contentTypes: Record<string, string> = {
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'webp': 'image/webp',
    'svg': 'image/svg+xml',
    'pdf': 'application/pdf',
    'ai': 'application/postscript',
    'eps': 'application/postscript',
    'psd': 'image/vnd.adobe.photoshop',
  };
  
  return contentTypes[ext || ''] || 'application/octet-stream';
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const directory = formData.get('directory');

    // Check if file and directory exist
    if (!file || !directory || !(file instanceof File)) {
      return NextResponse.json(
        {
          status: 400,
          body: 'File and directory are required',
        },
        { status: 400 }
      );
    }

    // Validate file extension (instead of MIME type)
    if (!isValidFileExtension(file.name)) {
      return NextResponse.json(
        {
          status: 400,
          body: `File type not allowed. Supported types: PNG, JPEG, GIF, WebP, SVG, PDF, AI, PSD, EPS. File: ${file.name}`,
        },
        { status: 400 }
      );
    }

    // Validate file size (20MB limit)
    const maxSize = 20 * 1024 * 1024; // 20MB
    if (file.size > maxSize) {
      return NextResponse.json(
        {
          status: 400,
          body: `File size exceeds 20MB limit. File size: ${(file.size / 1024 / 1024).toFixed(2)}MB`,
        },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const fileName = convertToSlug(file.name);
    const key = `${directory}/${fileName}`;
    
    // Use content type based on file extension instead of file.type
    const contentType = getContentType(file.name);
    
    await uploadFileToS3(key, buffer, contentType);
    
    return NextResponse.json(
      {
        status: 200,
        body: `${bucketUrl}/${key}`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: 500,
        body: `Error uploading file to S3: ${error instanceof Error ? error.message : 'Unknown error'}`,
      },
      { status: 500 }
    );
  }
}

const convertToSlug = (str: string) => {
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w.-]+/g, '');
};