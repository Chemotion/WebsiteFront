import Image from 'next/image';

export default function WhoWeArePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-4 mt-8 mb-20">
      <section className="mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-normal">
          Who We Are —<br />
          ComPlat &amp; Chemotion
        </h1>

        <p className="text-lg text-gray-600 mt-4">
          Discover the mission, infrastructure, and team behind ComPlat & Chemotion.
        </p>
      </section>

      <div className="w-full">
        <section className="space-y-12 text-gray-800">
          <div>
            <h2 className="text-2xl mb-4 font-bold text-gray-900">Aim</h2>
            <p className="leading-relaxed mb-6 text-gray-700">
              The ComPlat (Compound Platform) project is developing freely available infrastructure resources for
              management of research data through the development of two independent, but closely compatible, IT systems
              namely:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
              <li>
                <strong>Chemotion ELN</strong> - an electronic laboratory notebook (ELN)
              </li>
              <li>
                <strong>Chemotion Repository</strong> - a data repository for Chemistry available on the web
              </li>
            </ul>
            <p className="leading-relaxed text-gray-700">
              With the ELN, it is possible to integrate state-of-the-art Research Data Management techniques into the
              routine work of academic researchers, thereby improving the data that is obtained as well as the quality
              of information that is published. The ELN is complemented by the Repository, to which it can be connected
              directly for fast, easy and secure transfer of selected research information for sharing and archiving.
            </p>
            <p className="leading-relaxed text-gray-700 mt-4">
              By providing an&nbsp;
              <a href="#opensource" className="text-[#008ab8]">
                open-sourced
              </a>
              &nbsp;tool - the ELN, alongside a platform - the Repository, this project is making a substantial
              contribution towards increasing research productivity in a cost-effective and simple manner. While these
              were initially targeted at chemists, they are developing rapidly with increased interest from other
              domains, particularly biochemists.
            </p>
            <p className="leading-relaxed text-gray-700 mt-4">
              Free access and free use by academic researchers is one principle of this project allowing and promoting
              collaborative work and scientific exchange among scientists.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4 font-bold text-gray-900">Acknowledgements</h2>
            <p className="leading-relaxed font-bold mb-2 text-gray-700">
              The ComPlat project is part of the work of the Stefan Bräse group at the Karlsruhe Institute of
              Technology.
            </p>

            <p className="leading-relaxed mb-6 text-gray-700">
              While many researchers and various agencies have contributed to the project, we particularly thank the
              following for their support:
            </p>
            <div className="mb-10 mt-4">
              <Image
                src="/DFG.png"
                alt="DFG Logo"
                width={400}
                height={51}
                className="object-contain w-[400px] h-[51px]"
              />
            </div>

            <div className="mb-10">
              <Image src="/NFDI4Chem.svg" alt="NFDI4Chem Logo" width={350} height={70} />
            </div>

            <div className="mb-16">
              <Image src="/KIT.png" alt="KIT Logo" width={150} height={75} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl mb-4 font-bold text-gray-900">Authors and Copyright</h2>
            <ul className="list-none space-y-2 text-gray-700 mb-6">
              <li>
                <strong>
                  <a className="text-[#008ab8] hover:underline" href="mailto:stefan.braese@kit.edu">
                    Prof. Stefan Bräse<sup>1</sup>
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  <a className="text-[#008ab8] hover:underline" href="mailto:nicole.jung@kit.edu">
                    Dr. Nicole Jung<sup>1</sup>
                  </a>
                </strong>
                &nbsp;&nbsp;✆ : +49 721 608 24697
              </li>
              <li>
                <strong>
                  <a className="text-[#008ab8] hover:underline" href="mailto:pierre.tremouilhac@kit.edu">
                    Dr. Pierre Tremouilhac<sup>2</sup>
                  </a>
                </strong>
              </li>
            </ul>
            <div className="leading-relaxed text-gray-700">
              <sup>1</sup> Institute of Organic Chemistry <br />
              <sup>2</sup> Institute of Biological and Chemical Systems – Functional Molecular Systems (IBCS-FMS)
              <div className="mt-6">
                Karlsruhe Institute of Technology <br />
                Hermann-von-Helmholtz-Platz 1 <br />
                76344 Eggenstein-Leopoldshafen, Germany
              </div>
            </div>
            <h3 id="opensource" className="text-lg font-semibold text-gray-800 mt-8 scroll-mt-[90px]">
              Source Code and Licenses
            </h3>
            <div className="mt-4 space-y-4 text-gray-700">
              <div>
                <strong>Chemotion ELN</strong> <br />
                Source Code:&nbsp;
                <a
                  href="https://github.com/ComPlat/chemotion_ELN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#008ab8] font-semibold hover:underline">
                  Github ↗
                </a>
                <br />
                License:&nbsp;
                <a
                  href="https://github.com/ComPlat/chemotion_REPO/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#008ab8] font-semibold hover:underline">
                  GNU Affero General Public License v3
                </a>
                <br />
                Citation:&nbsp;
                <a
                  href="https://github.com/ComPlat/chemotion_ELN/blob/main/CITATION.cff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#008ab8] font-semibold hover:underline">
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
                  className="text-[#008ab8] font-semibold hover:underline">
                  Github ↗
                </a>
                <br />
                License:&nbsp;
                <a
                  href="https://github.com/ComPlat/chemotion_REPO/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#008ab8] font-semibold hover:underline">
                  GNU Affero General Public License v3
                </a>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-8">Content</h3>
            <p className="leading-relaxed text-gray-700 mt-2">
              All texts, pictures and other information published on this website (i.e. documentation) are subject to
              copyright. The logo may not be used without the prior consent of the&nbsp;
              <a href="#imprint" className="text-[#008ab8]">
                working group
              </a>
              . A change of the logo is not permitted.
            </p>
            <p className="leading-relaxed text-gray-700 mt-4">
              The contents of this website are created with the utmost care. Nevertheless, no guarantee for topicality
              and completeness can be taken over. ComPlat does not assume any responsibility for any web content
              connected by a link, as this is not its own content.
            </p>
            <details className="group bg-white border-l-4 border-[#008ab8] shadow-sm rounded-md px-4 py-3 mb-4 mt-4">
              <summary className="cursor-pointer flex items-center justify-between text-gray-800 font-medium leading-relaxed">
                <span>Details</span>
                <svg
                  className="ml-2 h-5 w-5 text-[#008ab8] transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-gray-700 space-y-4">
                <p className="font-semibold">Nota bene</p>
                <p>
                  When submitting to the repository, the submitter of a publication can choose between several CC
                  licenses for the submitted work. As a result, the content of this repository database (including the
                  submitted publication files) can be licensed under any one of the following:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <a
                      href="https://creativecommons.org/public-domain/cc0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#008ab8] hover:underline">
                      CC0
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://creativecommons.org/licenses/by/4.0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#008ab8] hover:underline">
                      CC BY
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://creativecommons.org/licenses/by-sa/4.0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#008ab8] hover:underline">
                      CC BY-SA
                    </a>
                  </li>
                </ul>
                <p className="text-sm text-gray-600">
                  DOI®, DOI.ORG®, and shortDOI® are trademarks of the International DOI Foundation.
                </p>
              </div>
            </details>
          </div>

          <div>
            <h2 id="imprint" className="text-2xl mb-4 font-bold text-gray-900 scroll-mt-[90px]">
              Imprint
            </h2>
            <h3 className="text-lg font-semibold text-gray-800 mt-4">Leader</h3>
            <p className="leading-relaxed text-gray-700 mt-2">
              Leader of the Research Group:&nbsp;
              <a
                href="https://www.ioc.kit.edu/braese/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008ab8] hover:underline font-bold">
                Prof. Stefan Bräse
              </a>
              <br />
              Phone: +49 721 608 42903 <br />
              Fax: +49 721 608 48581
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mt-4">Address: South Campus (KIT)</h3>
            <p className="leading-relaxed text-gray-700 mt-2">
              Institute of Organic Chemistry <br />
              Karlsruhe Institute of Technology <br />
              Fritz-Haber-Weg 6, Geb. 30.42 <br />
              76131 Karlsruhe, Germany
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4">Address: North Campus (KIT)</h3>
            <p className="leading-relaxed text-gray-700 mt-2">
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
