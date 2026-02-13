import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import type { S3ClientConfig } from '@aws-sdk/client-s3';
import { DeleteObjectCommand, S3Client } from '@aws-sdk/client-s3';

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

const deleteImageFromS3 = async (key: string) => {
  try {
    const command = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: key,
    });
    await s3Client.send(command);
  } catch (error) {
    throw error;
  }
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

  try {
    await deleteImageFromS3(path);
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
