import Image from 'next/image';
import Link from 'next/link';
import ModeToggle from '../ui/DarkModeToggle';

const Footer = () => (
  <footer
    className="bg-[#eeeeee] py-8 text-gray-700 dark:border-t dark:border-darkForeground dark:bg-darkBackground dark:text-darkForeground"
    role="contentinfo">
    <div className="flex flex-col items-center justify-center">
      <div className="mb-6 flex flex-col items-start space-y-6">
        <div className="w-full text-center custom-lg:text-left">
          <p className="text-base">Funded by</p>
        </div>
        <div
          className="flex flex-col items-center space-y-8 custom-lg:flex-row custom-lg:space-x-16 custom-lg:space-y-0"
          role="list"
          aria-label="Funding organizations">
          <div role="listitem">
            <Image
              src="/images/DFG.png"
              alt="Deutsche Forschungsgemeinschaft logo"
              width={390}
              height={50}
              className="dark:brightness-0 dark:invert"
            />
          </div>
          <div role="listitem">
            <Image
              src="/images/KIT.png"
              alt="Karlsruher Institut für Technologie logo"
              width={160}
              height={80}
              className="dark:brightness-0 dark:invert"
            />
          </div>
          <div role="listitem">
            <Image
              src="/images/bawue.png"
              alt="Baden-Württemberg logo"
              width={183}
              height={100}
              className="dark:brightness-0 dark:invert"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="relative mt-8">
      <div
        className="flex flex-wrap items-center justify-center gap-4 text-center text-base"
        role="navigation"
        aria-label="Social Media Links">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          <a
            href="https://www.youtube.com/@ChemotionELN"
            aria-label="Visit Chemotion YouTube channel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:underline sm:flex-row">
            <Image src="/images/youtube.png" alt="YouTube icon" width={30} height={30} className="dark:invert" />
            <span className="text-sm md:text-base">YouTube</span>
          </a>
          <a
            href="https://www.instagram.com/nfdi4chem/"
            aria-label="Visit Chemotion Instagram profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:underline sm:flex-row">
            <Image src="/images/instagram.png" alt="Instagram icon" width={30} height={30} className="dark:invert" />
            <span className="text-sm md:text-base">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/company/nfdi4chem/"
            aria-label="Visit Chemotion LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:underline sm:flex-row">
            <Image src="/images/linkedin.png" alt="LinkedIn icon" width={30} height={30} className="dark:invert" />
            <span className="text-sm md:text-base">LinkedIn</span>
          </a>
          <a
            href="https://www.chemotion-repository.net/welcome"
            aria-label="Visit Chemotion Repository website"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:underline sm:flex-row">
            <Image src="/images/flusk.png" alt="Repository icon" width={30} height={30} className="dark:invert" />
            <span className="text-sm md:text-base">Repository</span>
          </a>
          <a
            href="https://github.com/ComPlat/chemotion_ELN"
            aria-label="Visit Chemotion ELN Source Code on GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:underline sm:flex-row">
            <Image src="/images/github.png" alt="GitHub icon" width={30} height={30} className="dark:invert" />
            <span className="text-sm md:text-base">ELN Source Code</span>
          </a>
        </div>
      </div>

      <hr className="my-4 border-gray-300" aria-hidden="true" />
      <div className="flex flex-wrap items-center justify-center gap-4 text-center text-base">
        <p className="m-0">
          © 2025&nbsp;
          <Link
            href="https://www.kit.edu"
            aria-label="Visit KIT website"
            className="hover:underline"
            rel="noopener noreferrer"
            target="_blank">
            KIT
          </Link>
        </p>
        <span aria-hidden="true" className="mx-2">
          |
        </span>
        <Link href="https://chemotion.net/" aria-label="Visit Chemotion Home page" className="hover:underline">
          Home
        </Link>
        <span aria-hidden="true" className="mx-2">
          |
        </span>
        <Link href="/accessibility" aria-label="View Accessibility Statement" className="hover:underline">
          Accessibility
        </Link>
        <span aria-hidden="true" className="mx-2">
          |
        </span>
        <Link href="/privacy" aria-label="View Privacy Policy" className="hover:underline">
          Privacy
        </Link>
        <span aria-hidden="true" className="mx-2">
          |
        </span>
        <Link href="/about#imprint" aria-label="View Imprint section" className="hover:underline">
          Imprint
        </Link>
        <span aria-hidden="true" className="ml-2">
          |
        </span>
        <ModeToggle />
      </div>
    </div>
  </footer>
);

export default Footer;
