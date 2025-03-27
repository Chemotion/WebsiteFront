import useSWR from 'swr';
import fallback from '/public/fallback.json';

export default function useContent({ apiKey, fallbackKey }) {
  const fetcher = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${apiKey}?populate=*`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      }
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  };

  const { data, error, isLoading } = useSWR(apiKey, fetcher);

  const fallbackData = fallback[fallbackKey];
  const content = !error && data?.data ? data.data : fallbackData;

  return { content, isLoading };
}
