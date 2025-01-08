import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
  <footer className="py-8 bg-[#F6F6F6] text-[#4D5357]">
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-start space-y-6 mb-6">
        <div className="w-full text-center custom-lg:text-left">
          <p className="text-base">Funded by</p>
        </div>
        <div className="flex flex-col items-center space-y-8 custom-lg:flex-row custom-lg:space-y-0 custom-lg:space-x-16">
          <div>
            <Image src="/DFG.png" alt="Deutsche Forschungsgemeinschaft" width={390} height={50} />
          </div>
          <div>
            <Image src="/KIT.png" alt="Karlsruher Institut für Technologie" width={160} height={80} />
          </div>
          <div>
            <Image src="/bawue.png" alt="Baden-Württemberg" width={183} height={100} />
          </div>
        </div>
      </div>
    </div>

    <div className="relative mt-8">
      <div className="flex flex-wrap justify-center items-center gap-4 text-center text-base text-[#4D5357]">
        <a
          href="https://github.com/ComPlat/chemotion_ELN"
          aria-label="ELN Source Code"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer">
          ELN Source Code
        </a>
        <span aria-hidden="true">|</span>
        <a
          href="https://github.com/ComPlat/chemotion_REPO"
          aria-label="Repository Source Code"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer">
          Repository Source Code
        </a>
        <span aria-hidden="true">|</span>
        <Link href="/whoweare#imprint" aria-label="Imprint" className="hover:underline">
          Imprint
        </Link>
        <span aria-hidden="true">|</span>
        <Link href="/accessibility" aria-label="Accessibility" className="hover:underline">
          Accessibility
        </Link>
        <span aria-hidden="true">|</span>
        <Link href="/" aria-label="Chemotion" className="hover:underline">
          Chemotion
        </Link>
        <span aria-hidden="true">|</span>
        <p className="m-0">© 2025 KIT</p>
        <div className="flex gap-4 ml-4">
          <a
            href="https://www.youtube.com/@ChemotionELN"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer">
            <Image src="/youtube.png" alt="YouTube" width={25} height={25} />
          </a>
          <a href="https://x.com/chemotionrs" aria-label="X" target="_blank" rel="noopener noreferrer">
            <Image src="/twitter.png" alt="X" width={25} height={25} />
          </a>
          <a
            href="https://www.instagram.com/nfdi4chem/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer">
            <Image src="/instagram.png" alt="Instagram" width={25} height={25} />
          </a>
          <a
            href="https://www.linkedin.com/company/nfdi4chem/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer">
            <Image src="/linkedin.png" alt="LinkedIn" width={25} height={25} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
