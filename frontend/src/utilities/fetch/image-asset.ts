import type { ImageAsset } from '@/utilities/types/shared.types';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || '';  // ← FIXED: Use BACKEND_URL

export async function fetchImageAssets(): Promise<ImageAsset[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/image-assets`, {  // ← FIXED syntax
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      console.error(`Failed to fetch image assets: ${response.status} ${response.statusText}`);  // ← FIXED syntax
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching image assets:', error);
    return [];
  }
}

export async function fetchImageAssetById(id: number): Promise<ImageAsset | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/image-assets/${id}`, {  // ← FIXED syntax
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      console.error(`Failed to fetch image asset ${id}: ${response.status} ${response.statusText}`);  // ← FIXED syntax
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching image asset ${id}:`, error);  // ← FIXED syntax
    return null;
  }
}

export async function uploadImageAsset(file: File, directory: string = 'image-assets'): Promise<string | null> {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('directory', directory);

    const response = await fetch('/api/upload-image', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      console.error(`Failed to upload image: ${response.status} ${response.statusText}`);  // ← FIXED syntax
      return null;
    }

    const data = await response.json();
    return data.body;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}