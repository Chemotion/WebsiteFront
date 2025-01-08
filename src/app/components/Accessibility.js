import Link from 'next/link';

export default function AccessibilityPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-4 mt-10 mb-20">
      <section className="mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-normal">Accessibility Statement</h1>

        <p className="text-lg text-gray-600 mt-4">
          Karlsruhe Institute of Technology (KIT) seeks to make its websites and mobile applications accessible in
          accordance with Article 10, par. 1 of the State Equal Opportunities for People with Disabilities Act (L-BGG).
          The following declaration on accessibility applies to the Chemotion website and associated services.
        </p>
      </section>

      <div className="w-full">
        <section className="space-y-12 text-gray-800">
          <div>
            <h2 className="text-2xl mb-4 font-bold text-gray-900">Status of Compliance with the Requirements</h2>
            <p className="leading-relaxed mb-6 text-gray-700">
              This website is partly in compliance with Article 10, par. 1, L-BGG.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4 font-bold text-gray-900">Inaccessible Contents</h2>
            <p className="leading-relaxed mb-6 text-gray-700">
              KIT runs an extensive website that is managed by numerous editors. Therefore, the accessibility aspects
              cannot always be guaranteed. However, we constantly strive to improve accessibility and to train and
              sensitize the editors.
            </p>
            <p className="leading-relaxed text-gray-700">
              The following contents are inaccessible or partly accessible only:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
              <li>Documents embedded in the website are not always available in an accessible format.</li>
              <li>
                Some videos embedded in the website do not have captions. Audio descriptions or full-text alternatives
                are not available.
              </li>
              <li>Text passages in other languages are not always marked.</li>
              <li>Links may be incomprehensible.</li>
              <li>Headings are not always in a hierarchical order.</li>
              <li>Some images do not have a descriptive text alternative.</li>
              <li>Color contrasts are sometimes insufficient.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl mb-4 font-bold text-gray-900">Date of Issue</h2>
            <p className="leading-relaxed text-gray-700">
              This declaration was issued on <strong>September 9, 2020</strong>, and last reviewed on{' '}
              <strong>November 14, 2024</strong>.
            </p>
            <p className="leading-relaxed text-gray-700">Method: Self-assessment</p>
          </div>

          <div>
            <h2 className="text-2xl mb-4 font-bold text-gray-900">Feedback and Contact Data</h2>
            <p className="leading-relaxed mb-6 text-gray-700">
              The contents of our web appearance are intended to be equally accessible for people with disabilities. If
              you encounter inaccessibilities on our websites or mobile applications, please help us improve by
              providing feedback.
            </p>
            <p className="leading-relaxed text-gray-700">
              You can reach us via the contact form or by email:
              <br />
              <strong>Email:</strong>{' '}
              <a href="mailto:internetredaktion@sts.kit.edu" className="text-[#008ab8] hover:underline">
                internetredaktion@sts.kit.edu
              </a>
            </p>
            <p className="leading-relaxed text-gray-700 mt-4">
              <strong>Mail:</strong> Karlsruhe Institute of Technology <br />
              Executive Office and Strategy <br />
              Corporate Communications <br />
              Kaiserstraße 12 <br />
              76131 Karlsruhe, Germany
            </p>
            <p className="leading-relaxed text-gray-700 mt-4">
              <strong>Phone:</strong> +49 (0)721/608-41105
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4 font-bold text-gray-900">Enforcement Procedure</h2>
            <p className="leading-relaxed text-gray-700">
              To ensure that the website meets the requirements outlined in Article 10, par. 1, L-BGG, contact us and
              give feedback. The contact details can be found above.
            </p>
            <p className="leading-relaxed text-gray-700 mt-4">
              If you do not receive a reply within four weeks or if our reply is not satisfactory, you can contact the
              Commissioner of the State Government for the Needs of People with Disabilities:
            </p>
            <ul className="list-none mt-4 space-y-4">
              <li>
                <strong>Phone:</strong> +49 (0)711/279-3360
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:Poststelle@bfbmb.bwl.de" className="text-[#008ab8] hover:underline">
                  Poststelle@bfbmb.bwl.de
                </a>
              </li>
              <li>
                <strong>Address:</strong> Else-Josenhans-Straße 6 <br />
                70173 Stuttgart
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
