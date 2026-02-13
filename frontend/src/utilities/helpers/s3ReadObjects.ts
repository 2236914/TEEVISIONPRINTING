import type { S3ClientConfig } from '@aws-sdk/client-s3';
import {
  GetObjectCommand,
  ListObjectsV2Command,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const config: S3ClientConfig = {
  region: process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET_REGION as string,
  credentials: {
    accessKeyId: process.env
      .NEXT_PUBLIC_AWS_USER_FILES_S3_READ_ACCESS_KEY_ID as string,
    secretAccessKey: process.env
      .NEXT_PUBLIC_AWS_USER_FILES_S3_READ_SECRET_ACCESS as string,
  },
};

// if (process.env.NODE_ENV === 'development') {
//   config.endpoint = process.env.AWS_USER_FILES_S3_ENDPOINT as string;
//   config.forcePathStyle = true;
// }

const s3Client = new S3Client(config);
const bucketName = process.env
  .NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET_NAME as string;

const getImageFromS3 = async (key: string) => {
  try {
    const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
    const url = await getSignedUrl(s3Client, command);
    return url;
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

export async function readObjectsFromS3(directory: string) {
  const imageBuffers = await getFilesWithImages(directory);
  return imageBuffers;
}
