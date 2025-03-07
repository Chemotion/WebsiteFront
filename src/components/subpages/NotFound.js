import Link from 'next/link';
import Image from 'next/image';
import { HeroButton } from '@/components/ui/HeroButton';

export default function NotFoundPage() {
  return (
    <div className="mx-auto mb-20 mt-10 max-w-4xl p-4 text-center" role="main" aria-labelledby="not-found-title">
      <div className="mb-12">
        <Image
          src="/images/chemotion-lg.png"
          alt="Illustration of Chemotion Logo for Not Found Page"
          width={500}
          height={301}
          className="mx-auto"
        />
      </div>
      <section className="mb-12">
        <h1 id="not-found-title" className="text-5xl font-extrabold leading-normal" aria-label="404 - Page Not Found">
          404 - PAGE NOT FOUND
        </h1>
        <p className="mt-4 text-lg" aria-label="Explanation that the page is not found">
          Sorry, the page you are looking for does not exist. It might have been moved, renamed, or removed.
        </p>
      </section>
      <HeroButton
        as="a"
        href="/"
        aria-label="Go back to home page"
        className="w-48 border-2 border-[#008ab8] bg-[#008ab8] font-semibold dark:border-darkForeground dark:bg-darkBackground">
        <div className="py-2 text-xl text-white"> Back to home</div>
      </HeroButton>
    </div>
  );
}
