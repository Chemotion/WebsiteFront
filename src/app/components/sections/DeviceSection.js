'use client';
import Image from 'next/image';

const DeviceSection = () => {
  return (
    <section className="px-4 mb-16 max-w-6xl w-full">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between px-6 lg:px-16 py-12 border-2 border-[#008ab8] bg-[#F6F6F6] text-gray-800 rounded-lg overflow-hidden">
        <div className="lg:w-2/5 text-center lg:text-left">
          <h1 className="text-[26px] text-gray-800 font-bold">Device Integration</h1>
          <p className="text-base text-gray-700 mt-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr.
          </p>
        </div>
        <div className="lg:w-1/2 mt-8 px-4 lg:px-2 lg:mt-0 flex justify-center lg:justify-end">
          <Image
            src="/demo.jpg"
            alt="Device Image"
            width={600}
            height={350}
            className="w-auto h-auto object-contain rounded-lg scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default DeviceSection;
