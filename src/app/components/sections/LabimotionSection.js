'use client';
import Image from 'next/image';

const LabimotionSection = () => {
  return (
    <section id="labimotioncontent" className="px-4 mb-16 max-w-6xl w-full">
      <div
        className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between p-6 lg:p-6 border-2 border-[#e63946] bg-[#F6F6F6] rounded-md overflow-hidden"
        role="region"
        aria-labelledby="labimotion-heading">
        <div className="lg:w-[45%] lg:flex flex-col text-center lg:text-left justify-between space-y-6 lg:p-4 lg:ml-4 lg:mr-4">
          <h1 id="labimotion-heading" className="text-[26px] text-gray-800 font-bold">
            <Image
              src="/LabIMotion-logo.png"
              alt="LabIMotion Logo"
              width={300}
              height={46}
              className="object-contain w-[300px] h-[46px] mx-auto lg:mx-0"
            />
          </h1>
          <ul className="list-none text-base text-gray-700 space-y-4">
            <li className="hover:text-gray-900 transition-all duration-200" role="listitem">
              <span className="font-medium text-gray-800">Extended Functionality: </span> LabIMotion enhances Chemotion
              ELN, making it versatile for use beyond chemistry.
            </li>
            <li className="hover:text-gray-900 transition-all duration-200" role="listitem">
              <span className="font-medium text-gray-800">Customizable Modules: </span>
              Scientists can design and link modules, with a hub for sharing templates.
            </li>
            <li className="hover:text-gray-900 transition-all duration-200" role="listitem">
              <span className="font-medium text-gray-800">Streamlined Research Sharing: </span>Supports Digital Object
              Identifiers (DOIs) and streamlines research publishing.
            </li>
          </ul>
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://chemotion.net/docs/labimotion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-center text-xl text-[#F6F6F6] bg-[#e63946] rounded-md font-semibold border-2
              border-[#e63946] shadow-sm transition-all duration-300 hover:bg-gray-800 hover:border-gray-800
              hover:shadow-lg "
              aria-label="Explore LabIMotion">
              Explore
            </a>
          </div>
        </div>
        <div
          className="lg:w-[50%] border-2 border-[#e63946] mt-8 px-2 lg:mr-2 lg:px-0 lg:mt-2 lg:mb-2 lg:mt-0 flex justify-center lg:justify-end relative w-full aspect-[3/2] rounded-md overflow-hidden"
          aria-hidden="true">
          <Image
            src="/demo2.jpg"
            alt="Visual representation of the LabIMotion"
            fill
            className="object-cover transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default LabimotionSection;
