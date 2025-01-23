'use client';
import Image from 'next/image';

const RepositorySection = () => {
  return (
    <section id="repositorycontent" className="px-4 mb-28 max-w-6xl w-full">
      <div
        className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between p-6 lg:p-6 border-2 border-[#4d5559] bg-[#F6F6F6] rounded-md overflow-hidden"
        role="region"
        aria-labelledby="repository-heading">
        <div className="lg:w-[45%] lg:flex flex-col text-center lg:text-left justify-between space-y-6 lg:p-4 lg:ml-4 lg:mr-4">
          <h1 id="repository-heading" className="text-[26px] text-gray-800 font-bold">
            Chemotion Repository
          </h1>
          <ul className="list-none text-base text-gray-700 space-y-4">
            <li className="hover:text-gray-900 transition-all duration-200" role="listitem">
              <span className="font-medium text-gray-800">Publish:</span> Share your dataset for free with the Chemotion
              repository, supporting the scientific community.
            </li>
            <li className="hover:text-gray-900 transition-all duration-200" role="listitem">
              <span className="font-medium text-gray-800">Transfer:</span> Move research data directly from the ELN to
              the repository for seamless publication.
            </li>
            <li className="hover:text-gray-900 transition-all duration-200" role="listitem">
              <span className="font-medium text-gray-800">Save Time:</span> Use interoperable systems with a shared
              software foundation, improving efficiency.
            </li>
          </ul>
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://www.chemotion-repository.net/welcome"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-center text-xl text-[#F6F6F6] bg-[#4d5559] rounded-md font-semibold border-2
              border-[#4d5559] shadow-sm transition-all duration-300 hover:bg-gray-800 hover:border-gray-800
              hover:shadow-lg"
              aria-label="Explore Chemotion Repository">
              Explore
            </a>
          </div>
        </div>
        <div
          className="lg:w-[50%] border-2 border-[#4d5559] mt-8 px-2 lg:mr-2 lg:px-0 lg:mt-2 lg:mb-2 lg:mt-0 flex justify-center lg:justify-end relative w-full aspect-[3/2] rounded-md overflow-hidden"
          aria-hidden="true">
          <Image
            src="/demo2.jpg"
            alt="Visual representation of the Chemotion Repository"
            fill
            className="object-cover transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default RepositorySection;
