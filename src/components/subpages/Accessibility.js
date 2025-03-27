'use client';

import useContent from '@/hooks/useContent';
import RichTextRenderer from '@/components/helpers/RichTextRenderer';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

export default function AccessibilityPage() {
  const { content, isLoading } = useContent({
    apiKey: 'accessibility-page',
    fallbackKey: 'accessibilityPage'
  });

  if (isLoading) return <LoadingAnimation />;

  return (
    <main className="mx-auto mb-20 mt-8 max-w-4xl p-4 font-geist" role="main">
      <RichTextRenderer content={content} />
    </main>
  );
}
