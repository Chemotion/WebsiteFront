'use client';
import Image from 'next/image';

const DemoSection = () => {
  return (
    <section id="demo" className="px-4 mb-16 max-w-6xl w-full">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between px-6 lg:px-16 py-12 border-2 border-[#008ab8] bg-[#F6F6F6] text-gray-800 rounded-lg overflow-hidden">
        <div className="lg:w-2/5 text-center lg:text-left">
          <h1 className="text-[26px] text-gray-800 font-bold">Chemotion ELN Demo</h1>
          <p className="text-base text-gray-700 mt-6 lg:mt-12 mb-6 lg:mb-12">
            Sounds good? Then go a little deeper. Check it out and see how it works, what functions it has, and how easy
            it is to use. Because nothing is as convincing as trying it out for yourself.
          </p>
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <a
              href="https://demo.chemotion.ibcs.kit.edu/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-center text-xl text-[#F6F6F6] bg-[#008ab8] rounded-lg font-semibold border-2
              border-[#008ab8] shadow-sm transition-all duration-300 hover:bg-gray-800 hover:border-gray-800
              hover:shadow-lg ">
              Try a Demo
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

export default DemoSection;
