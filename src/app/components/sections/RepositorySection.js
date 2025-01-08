'use client';
import Image from 'next/image';

const RepositorySection = () => {
  return (
    <section id="demo" className="px-4 mb-20 max-w-6xl w-full">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between px-6 lg:px-16 py-12 border-2 border-[#4d5559] bg-[#F6F6F6] text-[#4D5357] rounded-lg overflow-hidden">
        <div className="lg:w-2/5 text-center lg:text-left">
          <h1 className="text-[26px] text-gray-800 font-bold">Chemotion Repository</h1>
          <p className="text-base text-gray-700 mt-4 mb-4">
            If you decide to publish one of your datasets for the scientific community, the Chemotion repository offers
            a free option. If both tools are used cooperatively, research data can be transferred directly from the ELN
            to the repository and thus published. The systems can be used interoperably thanks to the same software
            basis. This saves you time.
          </p>
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <a
              href="https://www.chemotion-repository.net/welcome"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-center text-xl text-[#F6F6F6] bg-[#4d5559] rounded-lg font-semibold border-2
              border-[#4d5559] shadow-sm transition-all duration-300 hover:bg-gray-800 hover:border-gray-800
              hover:shadow-lg ">
              Explore
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 px-4 lg:px-2 lg:mt-0 flex justify-center lg:justify-end">
          <Image
            src="/demo.jpg"
            alt="Demo Image"
            width={600}
            height={350}
            className="w-auto h-auto object-contain rounded-lg scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default RepositorySection;
