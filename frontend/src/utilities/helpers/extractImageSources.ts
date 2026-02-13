// Extract image sources from HTML content using regex
export function extractImageSources(htmlContent: string): string[] {
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const sources: string[] = [];
  let match;
  
  while ((match = imgRegex.exec(htmlContent)) !== null) {
    sources.push(match[1]);
  }
  
  return sources;
}