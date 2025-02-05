import Link from 'next/link';
import Image from 'next/image';

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
        <h1
          id="not-found-title"
          className="text-5xl font-extrabold leading-normal text-gray-900"
          aria-label="404 - Page Not Found">
          404 - PAGE NOT FOUND
        </h1>
        <p className="mt-4 text-lg text-gray-600" aria-label="Explanation that the page is not found">
          Sorry, the page you are looking for does not exist. It might have been moved, renamed, or removed.
        </p>
      </section>
      <Link
        href="/"
        aria-label="Go back to home page"
        className="inline-flex items-center rounded-md border-2 border-[#008ab8] px-10 py-4 text-center text-xl font-semibold
          text-gray-700 shadow-sm transition-all duration-300 ease-in-out
          hover:bg-[#008ab8] hover:text-white">
        Back to home
      </Link>
    </div>
  );
}
