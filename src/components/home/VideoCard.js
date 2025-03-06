'use client';
import React, { useState } from 'react';
import useContent from '@/hooks/useContent';
import { HeroButton } from '@/components/ui/HeroButton';

export default function VideoCard() {
  const [consentGiven, setConsentGiven] = useState(false);

  const { content, isLoading } = useContent({
    apiKey: 'video-section',
    fallbackKey: 'videoSection'
  });

  if (isLoading) return <div>Loading...</div>;

  const getYoutubeEmbedUrl = (url) => {
    try {
      const urlObj = new URL(url);
      const videoId = urlObj.searchParams.get('v');
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
      if (url.includes('youtu.be')) {
        const parts = url.split('/');
        return `https://www.youtube.com/embed/${parts.pop()}`;
      }
    } catch {
      console.error('Invalid URL:', url);
    }
    return url;
  };

  const handleConsent = () => {
    setConsentGiven(true);
  };

  return (
    <section id="videocontent" className="mb-14 w-full max-w-6xl px-4" aria-labelledby="video-heading">
      <div className="flex items-center justify-center rounded-md border-2 border-[#008ab8] p-6 dark:border-darkForeground">
        <div
          className="relative m-2 flex aspect-video w-full items-center justify-center overflow-hidden rounded-md border-2 border-[#008ab8] dark:border-darkForeground"
          aria-hidden="true">
          {content.videoURL ? (
            <>
              <iframe
                src={getYoutubeEmbedUrl(content.videoURL)}
                title={`YouTube video player for ${content.videoTitle}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="size-full object-cover transition-transform duration-300"
              />
              {!consentGiven && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/50 p-6 text-center backdrop-blur-sm">
                  <h3 className="text-md mb-2 font-semibold text-darkForeground sm:mb-20 sm:text-3xl">
                    {content.videoTitle}
                  </h3>
                  <p className="text-md mb-2 text-darkForeground sm:mb-6 sm:text-2xl">{content.warningMessage}</p>
                  <HeroButton
                    onClick={handleConsent}
                    aria-label="Consent to YouTube Warning"
                    className="w-36 border-2 border-[#008ab8] bg-[#008ab8]  py-3 font-semibold dark:border-darkForeground dark:bg-darkBackground">
                    <div className="text-xl text-white">{content.buttonText}</div>
                  </HeroButton>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center bg-gray-200">
              <span className="text-xl font-bold text-gray-600">No Video</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
