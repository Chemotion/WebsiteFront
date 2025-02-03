export default function AccessibilityPage() {
  return (
    <main className="mx-auto mb-20 mt-8 max-w-4xl p-4" role="main">
      <section className="mb-12">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-900" aria-label="Accessibility Statement">
          Accessibility Statement
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Karlsruhe Institute of Technology (KIT) seeks to make its websites and mobile applications accessible in
          accordance with Article 10, par. 1 of the State Equal Opportunities for People with Disabilities Act (L-BGG).
          The following declaration on accessibility applies to the Chemotion website and associated services.
        </p>
      </section>

      <div className="w-full">
        <section className="space-y-12 text-gray-800" aria-labelledby="compliance-status">
          <div>
            <h2
              id="compliance-status"
              className="mb-4 text-2xl font-bold text-gray-900"
              aria-label="Status of Compliance with the Requirements">
              Status of Compliance with the Requirements
            </h2>
            <p className="mb-6 leading-relaxed text-gray-700">
              This website is partly in compliance with Article 10, par. 1, L-BGG.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900" aria-label="Inaccessible Contents">
              Inaccessible Contents
            </h2>
            <p className="mb-6 leading-relaxed text-gray-700">
              KIT runs an extensive website that is managed by numerous editors. Therefore, the accessibility aspects
              cannot always be guaranteed. However, we constantly strive to improve accessibility and to train and
              sensitize the editors.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              The following contents are inaccessible or partly accessible only:
            </p>
            <ul className="list-disc space-y-4 pl-6 text-gray-700" aria-label="List of inaccessible contents">
              <li>1.</li>
              <li>2.</li>
              <li>3.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900" aria-label="Date of Issue">
              Date of Issue
            </h2>
            <p className="leading-relaxed text-gray-700">
              This declaration was issued on <strong>September 9, 2020</strong>, and last reviewed on{' '}
              <strong>November 14, 2024</strong>.
            </p>
            <p className="leading-relaxed text-gray-700">Method: Self-assessment</p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900" aria-label="Feedback and Contact Data">
              Feedback and Contact Data
            </h2>
            <p className="mb-6 leading-relaxed text-gray-700">
              The contents of our web appearance are intended to be equally accessible for people with disabilities. If
              you encounter inaccessibilities on our websites or mobile applications, please help us improve by
              providing feedback.
            </p>
            <p className="leading-relaxed text-gray-700">
              You can reach us via the contact form or by email
              <br />
              <strong>Email:</strong>{' '}
              <a
                href="mailto:internetredaktion@sts.kit.edu"
                className="text-[#008ab8] hover:underline"
                aria-label="Send an email to internetredaktion@sts.kit.edu">
                internetredaktion@sts.kit.edu
              </a>
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              <strong>Mail:</strong> Karlsruhe Institute of Technology <br />
              Executive Office and Strategy <br />
              Corporate Communications <br />
              Kaiserstraße 12 <br />
              76131 Karlsruhe, Germany
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              <strong>Phone:</strong> +49 (0)721/608-41105
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900" aria-label="Enforcement Procedure">
              Enforcement Procedure
            </h2>
            <p className="leading-relaxed text-gray-700">
              To ensure that the website meets the requirements outlined in Article 10, par. 1, L-BGG, contact us and
              give feedback. The contact details can be found above.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              If you do not receive a reply within four weeks or if our reply is not satisfactory, you can contact the
              Commissioner of the State Government for the Needs of People with Disabilities:
            </p>
            <ul className="mt-4 list-none space-y-4" aria-label="Commissioner of the State Government contact details">
              <li>
                <strong>Phone:</strong> +49 (0)711/279-3360
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:internetredaktion@sts.kit.edu"
                  className="text-[#008ab8] hover:underline"
                  aria-label="Send an email to internetredaktion@sts.kit.edu">
                  internetredaktion@sts.kit.edu
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
