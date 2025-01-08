'use client';
import Image from 'next/image';

const GenericElementSection = () => {
  return (
    <section id="demo" className="px-4 mb-20 max-w-6xl w-full">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between px-6 lg:px-16 py-12 border-2 border-[#e63946] bg-[#F6F6F6] text-[#4D5357] rounded-lg overflow-hidden">
        <div className="lg:w-[45%] text-center lg:text-left">
          <div className="flex justify-start">
            <Image
              src="/LabIMotion-logo.png"
              alt="LabIMotion Logo"
              width={300}
              height={46}
              className="object-contain w-[300px] h-[46px]"
            />
          </div>
          <p className="text-base text-gray-700 mt-12 mb-12 mr-8">
            LabIMotion ELN systematically extends the Chemotion ELN software in terms of functions and available
            modules. The extension makes it possible to use the ELN software with or without chemistry functionality.
            The most important feature of LabIMotion ELN is the possibility to design new modules that can be customised
            to the needs of the scientists. Modules can be linked together, allowing materials and samples to be clearly
            assigned to processes and workflows. A template hub makes it easy to share and synchronise templates between
            different applications. In addition, LabIMotion ELN supports scientists in accessing Digital Object
            Identifiers (DOIs) and streamlines the process of publishing research online. This support simplifies the
            process of publishing research results and ensures that scientists from different disciplines can
            efficiently share their research results with the world.
          </p>
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <a
              href="https://www.chemotion-repository.net/welcome"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-center text-xl text-[#F6F6F6] bg-[#e63946] rounded-lg font-semibold border-2
              border-[#e63946] shadow-sm transition-all duration-300 hover:bg-gray-800 hover:border-gray-800
              hover:shadow-lg ">
              Explore
            </a>
          </div>
        </div>
        <div className="lg:w-[45%] mt-8 px-4 lg:px-2 lg:mt-0 flex justify-center lg:justify-end">
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

export default GenericElementSection;
