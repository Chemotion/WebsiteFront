'use client';
import Image from 'next/image';

const DemoSection = () => {
  return (
    <section id="democontent" className="px-4 mb-14 max-w-6xl w-full" role="region" aria-labelledby="eln-demo-heading">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between p-6 lg:p-6 border-2 border-[#008ab8] bg-[#F6F6F6] rounded-md overflow-hidden">
        <div className="lg:w-[45%] lg:flex flex-col lg:py-10 text-center lg:text-left justify-between space-y-6 lg:p-4 lg:ml-4 lg:mr-4">
          <h1
            id="eln-demo-heading"
            className="text-[26px] text-gray-800 font-bold"
            tabIndex="0"
            aria-label="Chemotion ELN Demo Heading">
            Chemotion ELN Demo
          </h1>
          <div
            className="hover:text-gray-900 list-none text-base text-gray-700 space-y-4 transition-all duration-200"
            tabIndex="0"
            aria-label="Chemotion ELN Demo description">
            <span className="font-medium text-gray-800">Sounds good?</span> Then go a little deeper. Check it out and
            see how it works, what functions it has, and how easy it is to use. Because nothing is as convincing as
            trying it out for yourself.
          </div>
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://demo.chemotion.ibcs.kit.edu/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-center text-xl text-white bg-[#008ab8] rounded-md font-semibold border-2
              border-[#008ab8] shadow-sm transition-all duration-300 hover:bg-gray-800 hover:border-gray-800
              hover:shadow-lg"
              aria-label="Visit the Chemotion ELN demo page">
              Try a Demo
            </a>
          </div>
        </div>
        <div
          className="lg:w-[50%] border-2 border-[#008ab8] mt-8 px-2 lg:mr-2 lg:px-0 lg:mt-2 lg:mb-2 lg:mt-0 flex justify-center lg:justify-end relative w-full aspect-[3/2] rounded-md overflow-hidden"
          aria-hidden="true">
          <Image
            src="/demo2.jpg"
            alt="Visual representation of the Chemotion ELN Demo"
            fill
            className="object-cover transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
