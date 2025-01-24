import Link from 'next/link';
import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-4 mt-10 mb-20 text-center" role="main" aria-labelledby="not-found-title">
      <div className="mb-12">
        <Image
          src="/chemotion-lg.png"
          alt="Illustration of Chemotion Logo for Not Found Page"
          width={500}
          height={301}
          className="mx-auto"
          priority
        />
      </div>
      <section className="mb-12">
        <h1
          id="not-found-title"
          className="text-5xl font-extrabold text-gray-900 leading-normal"
          tabIndex="0"
          aria-label="404 - Page Not Found">
          404 - PAGE NOT FOUND
        </h1>
        <p className="text-lg text-gray-600 mt-4" tabIndex="0" aria-label="Explanation that the page is not found">
          Sorry, the page you are looking for does not exist. It might have been moved, renamed, or removed.
        </p>
      </section>
      <Link
        href="/"
        aria-label="Go back to home page"
        className="inline-flex items-center px-10 py-4 text-xl text-center text-gray-700 bg-[#F6F6F6] rounded-md font-semibold border-2
          border-[#008ab8] shadow-sm transition-all duration-300 ease-in-out 
          hover:bg-[#008ab8] hover:text-white">
        Back to home
      </Link>
    </div>
  );
}
