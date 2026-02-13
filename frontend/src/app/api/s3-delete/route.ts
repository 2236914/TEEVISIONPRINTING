import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import type { ObjectIdentifier, S3ClientConfig } from '@aws-sdk/client-s3';
import {
  DeleteObjectsCommand,
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

const deleteImagesFromS3 = async (images: ObjectIdentifier[]) => {
  try {
    const command = new DeleteObjectsCommand({
      Bucket: bucketName,
      Delete: {
        Objects: images,
      },
    });
    await s3Client.send(command);
  } catch (error) {
    throw error;
  }
};

const listFilesInDirectory = async (prefix: string) => {
  const command = new ListObjectsV2Command({
    Bucket: bucketName,
    Prefix: prefix,
  });
  const response = await s3Client.send(command);

  const files =
    response.Contents?.map((item) => {
      return { Key: item.Key } as ObjectIdentifier;
    }) || [];
  return files;
};

export async function DELETE(request: NextRequest) {
  const formData = await request.formData();
  const path = formData.get('path') as string;

  if (!path) {
    return NextResponse.json({
      status: 400,
      body: 'Key is required',
    });
  }

  const images = await listFilesInDirectory(path);

  try {
    await deleteImagesFromS3(images);
    return NextResponse.json({
      status: 200,
      body: 'Image deleted successfully',
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      body: 'Error deleting image from S3: ' + error,
    });
  }
}
