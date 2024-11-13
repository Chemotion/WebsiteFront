import Image from 'next/image';

const Footer = () => (
  <footer className="text-center py-8 bg-[#ecedee] text-gray-600">
    <div className="flex flex-col items-center justify-center space-y-6 mb-6 md:flex-row md:space-y-0 md:space-x-16">
      <p className="text-lg">Funded by:</p>
      <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-16">
        <div>
          <Image src="/DFG.png" alt="Deutsche Forschungsgemeinschaft" width={390} height={70} />
        </div>
        <div>
          <Image src="/KIT.png" alt="Karlsruher Institut für Technologie" width={160} height={80} />
        </div>
        <div>
          <Image src="/bawue.png" alt="Baden-Württemberg" width={183} height={100} />
        </div>
      </div>
    </div>
    <div className="text-base mt-16 md:mt-8">
      <p>© 2024 Chemotion - KIT</p>
    </div>
  </footer>
);

export default Footer;
