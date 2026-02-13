export async function safeFetch<T>(
  url: string, 
  defaultValue: T
): Promise<T> {
  try {
    const response = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch ${url}: ${response.status}`);
      return defaultValue;
    }

    const data = await response.json();
    return data || defaultValue;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return defaultValue;
  }
}