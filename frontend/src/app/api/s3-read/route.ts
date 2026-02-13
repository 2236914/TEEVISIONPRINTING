import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import type { S3ClientConfig } from '@aws-sdk/client-s3';
import {
  GetObjectCommand,
  ListObjectsV2Command,
  S3Client,
} from '@aws-sdk/client-s3';

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

const getImageFromS3 = async (key: string) => {
  try {
    const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
    const response = await s3Client.send(command);

    // Convert the response body to a buffer
    const streamToBuffer = (stream: any): Promise<Buffer> => {
      return new Promise((resolve, reject) => {
        const chunks: any[] = [];
        stream.on('data', (chunk: any) => chunks.push(chunk));
        stream.on('end', () => resolve(Buffer.concat(chunks)));
        stream.on('error', reject);
      });
    };

    const imageBuffer = await streamToBuffer(response.Body);
    return imageBuffer;
  } catch (error) {
    console.error('Error getting image from S3:', error);
    throw error;
  }
};

const listFilesInDirectory = async (prefix: string) => {
  const command = new ListObjectsV2Command({
    Bucket: bucketName,
    Prefix: prefix,
  });
  const response = await s3Client.send(command);

  const files = response.Contents?.map((item) => item.Key) || [];
  return files;
};

const getFilesWithImages = async (prefix: string) => {
  const files = await listFilesInDirectory(prefix);
  const filesWithImages = await Promise.all(
    files.map(async (file) => {
      const imageBuffer = await getImageFromS3(file as string);
      return imageBuffer;
    })
  );
  return filesWithImages;
};

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const directory = formData.get('directory') as string;
  try {
    const imageBuffers = await getFilesWithImages(directory);
    return NextResponse.json(imageBuffers);
  } catch (error) {
    return NextResponse.json({
      status: 500,
      body: 'Error getting image from S3: ' + error,
    });
  }
}
