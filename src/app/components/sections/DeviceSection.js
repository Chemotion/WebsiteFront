'use client';
import Image from 'next/image';

const DeviceSection = () => {
  return (
    <section
      id="deviceintegrationcontent"
      className="px-4 mb-14 max-w-6xl w-full"
      role="region"
      aria-labelledby="deviceintegration-heading">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between p-6 lg:p-6 border-2 border-[#008ab8] bg-[#F6F6F6] rounded-md overflow-hidden">
        <div className="lg:w-[45%] lg:flex flex-col text-center lg:text-left justify-between space-y-6 lg:p-4 lg:ml-4 lg:mr-4">
          <h1
            id="deviceintegration-heading"
            className="text-[26px] text-gray-800 font-bold"
            tabIndex="0"
            aria-label="Device Integration Heading">
            Device Integration
          </h1>
          <ul className="list-none text-base text-gray-700 space-y-4" aria-label="Device integration features">
            <li
              className="hover:text-gray-900 transition-all duration-200"
              role="listitem"
              tabIndex="0"
              aria-label="Seamless Data Transfer: Designed to integrate diverse lab data sources with the Chemotion ELN server">
              <span className="font-medium text-gray-800">Seamless Data Transfer:</span> Designed to integrate diverse
              lab data sources with the Chemotion ELN server.
            </li>
            <li
              className="hover:text-gray-900 transition-all duration-200"
              role="listitem"
              tabIndex="0"
              aria-label="Flexible Methods: Supports email, network connections, and manual uploads for non-networked devices">
              <span className="font-medium text-gray-800">Flexible Methods:</span> Supports email, network connections,
              and manual uploads for non-networked devices.
            </li>
            <li
              className="hover:text-gray-900 transition-all duration-200"
              role="listitem"
              tabIndex="0"
              aria-label="Reliable & Versatile: Ensures compatibility with varying lab setups and connectivity">
              <span className="font-medium text-gray-800">Reliable & Versatile:</span> Ensures compatibility with
              varying lab setups and connectivity.
            </li>
          </ul>
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://chemotion.net/docs/eln/devices"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-center text-xl text-white bg-[#008ab8] rounded-md font-semibold border-2
              border-[#008ab8] shadow-sm transition-all duration-300 hover:bg-gray-800 hover:border-gray-800
              hover:shadow-lg"
              aria-label="Visit the Chemotion ELN Device Integration documentation page">
              Explore
            </a>
          </div>
        </div>
        <div
          className="lg:w-[50%] border-2 border-[#008ab8] mt-8 px-2 lg:mr-2 lg:px-0 lg:mt-2 lg:mb-2 lg:mt-0 flex justify-center lg:justify-end relative w-full aspect-[3/2] rounded-md overflow-hidden"
          aria-hidden="true">
          <Image
            src="/demo2.jpg"
            alt="Visual representation of the ELN Device Integration"
            fill
            className="object-cover transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default DeviceSection;
