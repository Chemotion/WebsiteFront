'use client';
import useContent from '@/hooks/useContent';
import RichTextRenderer from '@/components/helpers/RichTextRenderer';

export default function PrivacyPage() {
  const { content, isLoading } = useContent({
    apiKey: 'privacy-page',
    fallbackKey: 'privacyPage'
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="mx-auto mb-20 mt-8 max-w-4xl p-4 font-geist" role="main">
      <RichTextRenderer content={content} />
    </main>
  );
}
