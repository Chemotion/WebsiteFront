import Image from 'next/image';

export default function WhoWeArePage() {
  return (
    <main className="mx-auto mb-20 mt-8 max-w-4xl p-4" role="main" aria-labelledby="who-we-are-title">
      <section className="mb-12">
        <h1
          id="who-we-are-title"
          className="text-5xl font-extrabold leading-normal"
          aria-label="Who We Are — ComPlat & Chemotion">
          Who We Are —<br />
          ComPlat &amp; Chemotion
        </h1>
        <p className="mt-4 text-lg opacity-90" aria-label="Introduction to ComPlat and Chemotion mission and team">
          Discover the mission, infrastructure, and team behind ComPlat & Chemotion.
        </p>
      </section>

      <div className="w-full">
        <section className="space-y-12 opacity-95" aria-labelledby="mission-and-team">
          <div>
            <h2 id="mission-and-team" className="mb-4 text-2xl font-bold" aria-label="Aim">
              Aim
            </h2>
            <p className="mb-6 leading-relaxed" aria-label="Details about ComPlat and Chemotion goals">
              The ComPlat (Compound Platform) project is developing freely available infrastructure resources for
              management of research data through the development of two independent, but closely compatible, IT systems
              namely:
            </p>
            <ul className="mb-6 list-disc space-y-4 pl-6" aria-label="IT systems developed by ComPlat">
              <li>
                <strong>Chemotion ELN</strong> - an electronic laboratory notebook (ELN)
              </li>
              <li>
                <strong>Chemotion Repository</strong> - a data repository for Chemistry available on the web
              </li>
            </ul>
            <p className="leading-relaxed">
              With the ELN, it is possible to integrate state-of-the-art Research Data Management techniques into the
              routine work of academic researchers, thereby improving the data that is obtained as well as the quality
              of information that is published. The ELN is complemented by the Repository, to which it can be connected
              directly for fast, easy and secure transfer of selected research information for sharing and archiving.
            </p>
            <p className="mt-4 leading-relaxed">
              By providing an&nbsp;
              <a
                href="#opensource"
                className="text-[#008ab8] hover:underline"
                aria-label="Learn more about open-sourced tools">
                open-sourced
              </a>
              &nbsp;tool - the ELN, alongside a platform - the Repository, this project is making a substantial
              contribution towards increasing research productivity in a cost-effective and simple manner. While these
              were initially targeted at chemists, they are developing rapidly with increased interest from other
              domains, particularly biochemists.
            </p>
            <p className="mt-4 leading-relaxed">
              Free access and free use by academic researchers is one principle of this project allowing and promoting
              collaborative work and scientific exchange among scientists.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold" aria-label="Acknowledgements">
              Acknowledgements
            </h2>
            <p className="mb-2 font-bold leading-relaxed" aria-label="Contributions to the ComPlat project">
              The ComPlat project is part of the work of the Stefan Bräse group at the Karlsruhe Institute of
              Technology.
            </p>
            <p className="mb-6 leading-relaxed" aria-label="Supporters of the ComPlat project">
              While many researchers and various agencies have contributed to the project, we particularly thank the
              following for their support:
            </p>
            <div className="mb-10 mt-4" aria-label="DFG Logo">
              <Image
                src="/images/DFG.png"
                alt="Deutsche Forschungsgemeinschaft Logo"
                width={400}
                height={51}
                className="h-[51px] w-[400px] object-contain dark:brightness-0 dark:invert"
              />
            </div>
            <div className="mb-10" aria-label="NFDI4Chem Logo Image">
              <Image
                src="/images/NFDI4Chem.svg"
                alt="NFDI4Chem Logo"
                width={350}
                height={70}
                className="dark:brightness-0 dark:invert"
              />
            </div>
            <div className="mb-16" aria-label="KIT Logo">
              <Image
                src="/images/KIT.png"
                alt="Karlsruhe Institute of Technology Logo"
                width={150}
                height={75}
                className="dark:brightness-0 dark:invert"
              />
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold" aria-label="Authors and Copyright title">
              Authors and Copyright
            </h2>
            <ul className="mb-6 list-none space-y-2" aria-label="Authors and their contact details">
              <li>
                <strong>
                  <a
                    className="text-[#008ab8] hover:underline"
                    href="mailto:stefan.braese@kit.edu"
                    aria-label="Email Prof. Stefan Bräse">
                    Prof. Stefan Bräse<sup>1</sup>
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  <a
                    className="text-[#008ab8] hover:underline"
                    href="mailto:nicole.jung@kit.edu"
                    aria-label="Email Dr. Nicole Jung">
                    Dr. Nicole Jung<sup>1</sup>
                  </a>
                </strong>
                &nbsp;&nbsp;✆ : +49 721 608 24697
              </li>
              <li>
                <strong>
                  <a
                    className="text-[#008ab8] hover:underline"
                    href="mailto:pierre.tremouilhac@kit.edu"
                    aria-label="Email Dr. Pierre Tremouilhac">
                    Dr. Pierre Tremouilhac
                    <sup>2</sup>
                  </a>
                </strong>
              </li>
            </ul>
            <div className="leading-relaxed" aria-labelledby="institute-details">
              <sup>1</sup> Institute of Organic Chemistry <br />
              <sup>2</sup> Institute of Biological and Chemical Systems – Functional Molecular Systems (IBCS-FMS)
              <div className="mt-6">
                Karlsruhe Institute of Technology <br />
                Hermann-von-Helmholtz-Platz 1 <br />
                76344 Eggenstein-Leopoldshafen, Germany
              </div>
            </div>

            <h3
              id="opensource"
              className="mt-8 scroll-mt-[90px] text-lg font-semibold"
              aria-label="Source Code and Licenses">
              Source Code and Licenses
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <strong>Chemotion ELN</strong> <br />
                Source Code:&nbsp;
                <a
                  href="https://github.com/ComPlat/chemotion_ELN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#008ab8] hover:underline"
                  aria-label="Chemotion ELN GitHub repository">
                  Github ↗
                </a>
                <br />
                License:&nbsp;
                <a
                  href="https://github.com/ComPlat/chemotion_REPO/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#008ab8] hover:underline"
                  aria-label="Chemotion ELN license information">
                  GNU Affero General Public License v3
                </a>
                <br />
                Citation:&nbsp;
                <a
                  href="https://github.com/ComPlat/chemotion_ELN/blob/main/CITATION.cff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#008ab8] hover:underline"
                  aria-label="Chemotion ELN citation file">
                  Citation File
                </a>
              </div>
              <div>
                <strong>Chemotion Repository</strong> <br />
                Source Code:&nbsp;
                <a
                  href="https://github.com/ComPlat/chemotion_REPO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#008ab8] hover:underline"
                  aria-label="Chemotion Repository GitHub repository">
                  Github ↗
                </a>
                <br />
                License:&nbsp;
                <a
                  href="https://github.com/ComPlat/chemotion_REPO/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#008ab8] hover:underline"
                  aria-label="Chemotion Repository license information">
                  GNU Affero General Public License v3
                </a>
              </div>
            </div>
            <h3 className="mt-8 text-lg font-semibold">Content</h3>
            <p className="mt-2 leading-relaxed" aria-label="Website copyright and usage information">
              All texts, pictures, and other information published on this website (i.e. documentation) are subject to
              copyright. The logo may not be used without the prior consent of the&nbsp;
              <a href="#imprint" className="text-[#008ab8] hover:underline" aria-label="More about the working group">
                working group
              </a>
              . A change of the logo is not permitted.
            </p>
            <p className="mt-4 leading-relaxed" aria-label="Website content disclaimer">
              The contents of this website are created with the utmost care. Nevertheless, no guarantee for topicality
              and completeness can be taken over. ComPlat does not assume any responsibility for any web content
              connected by a link, as this is not its own content.
            </p>
            <details
              className="group my-4 rounded-md border-l-4 border-[#008ab8] bg-white px-4 py-3 shadow-sm dark:border-2 dark:border-darkForeground dark:bg-darkBackground"
              aria-labelledby="details-summary">
              <summary
                id="details-summary"
                className="flex cursor-pointer items-center justify-between font-medium leading-relaxed">
                <span>Details</span>
                <svg
                  className="ml-2 size-5 text-[#008ab8] transition-transform duration-200 group-open:rotate-180 dark:text-darkForeground"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 space-y-4">
                <p className="font-semibold">Nota bene</p>
                <p>
                  When submitting to the repository, the submitter of a publication can choose between several CC
                  licenses for the submitted work. As a result, the content of this repository database (including the
                  submitted publication files) can be licensed under any one of the following:
                </p>
                <ul
                  className="list-disc space-y-2 pl-6"
                  aria-label="Creative Commons licenses supported by the repository">
                  <li>
                    <a
                      href="https://creativecommons.org/public-domain/cc0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#008ab8] hover:underline"
                      aria-label="Learn about CC0 license">
                      CC0
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://creativecommons.org/licenses/by/4.0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#008ab8] hover:underline"
                      aria-label="Learn about CC BY license">
                      CC BY
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://creativecommons.org/licenses/by-sa/4.0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#008ab8] hover:underline"
                      aria-label="Learn about CC BY-SA license">
                      CC BY-SA
                    </a>
                  </li>
                </ul>
                <p className="text-sm" aria-label="Trademark information for DOI">
                  DOI®, DOI.ORG®, and shortDOI® are trademarks of the International DOI Foundation.
                </p>
              </div>
            </details>
          </div>

          <div>
            <h2 id="imprint" className="mb-4 scroll-mt-[90px] text-2xl font-bold" aria-label="Imprint">
              Imprint
            </h2>
            <h3 className="mt-4 text-lg font-semibold" aria-label="Leader of the Research Group">
              Leader
            </h3>
            <p className="mt-2 leading-relaxed" aria-label="Leader contact details">
              Leader of the Research Group:&nbsp;
              <a
                href="https://www.ioc.kit.edu/braese/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#008ab8] hover:underline"
                aria-label="Visit Prof. Stefan Bräse's webpage">
                Prof. Stefan Bräse
              </a>
              <br />
              Phone: +49 721 608 42903 <br />
              Fax: +49 721 608 48581
            </p>
            <h3 className="mt-4 text-lg font-semibold" aria-label="Address of South Campus, KIT">
              Address: South Campus (KIT)
            </h3>
            <p className="mt-2 leading-relaxed" aria-label="South Campus address">
              Institute of Organic Chemistry <br />
              Karlsruhe Institute of Technology <br />
              Fritz-Haber-Weg 6, Geb. 30.42 <br />
              76131 Karlsruhe, Germany
            </p>
            <h3 className="mt-4 text-lg font-semibold" aria-label="Address of North Campus, KIT">
              Address: North Campus (KIT)
            </h3>
            <p className="mt-2 leading-relaxed" aria-label="North Campus address">
              Institute of Biological and Chemical Systems – Functional Molecular Systems (IBCS-FMS) <br />
              Karlsruhe Institute of Technology <br />
              Hermann-von-Helmholtz-Platz 1, Geb. 319 <br />
              76344 Eggenstein-Leopoldshafen, Germany
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
