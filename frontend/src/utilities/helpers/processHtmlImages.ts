interface ImageData {
  alt: string;
  src: string;
  height?: number;
  width?: number;
}

export function extractImagesFromHtml(html: string): ImageData[] {
  const imgRegex = /<img[^>]+>/g;
  const srcRegex = /src="([^"]+)"/;
  const altRegex = /alt="([^"]+)"/;
  const widthRegex = /width="(\d+)"/;
  const heightRegex = /height="(\d+)"/;

  const images: ImageData[] = [];
  const matches = html.match(imgRegex);

  if (matches) {
    matches.forEach((imgTag) => {
      const srcMatch = imgTag.match(srcRegex);
      const altMatch = imgTag.match(altRegex);
      const widthMatch = imgTag.match(widthRegex);
      const heightMatch = imgTag.match(heightRegex);

      if (srcMatch) {
        images.push({
          src: srcMatch[1],
          alt: altMatch ? altMatch[1] : '',
          width: widthMatch ? parseInt(widthMatch[1]) : undefined,
          height: heightMatch ? parseInt(heightMatch[1]) : undefined,
        });
      }
    });
  }

  return images;
}

export function replaceHtmlImages(
  html: string, 
  placeholder: string = '{{IMAGE_PLACEHOLDER}}'
): string {
  return html.replace(/<img[^>]+>/g, placeholder);
}

export function parseHtmlContent(html: string): {
  images: ImageData[];
  textParts: string[];
} {
  const images = extractImagesFromHtml(html);
  const textParts = replaceHtmlImages(html, '|||IMAGE|||').split('|||IMAGE|||');
  
  return { textParts, images };
}

export type { ImageData };