export default function HelpPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-4 mt-10 mb-20">
      <section className="mb-12">
        <h1 className="text-6xl font-extrabold text-gray-900">Helpdesk</h1>
        <p className="text-lg text-gray-600 mt-4">
          Comprehensive guidance and support for every step of using Chemotion.
        </p>
      </section>

      <div className=" w-full">
        <section className="space-y-12 text-gray-800">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">How We Can Help</h2>
            <p className="leading-relaxed mb-6 text-gray-700">
              Our team is dedicated to providing you with the support you need, whether you are new to Chemotion or
              require advanced assistance.
            </p>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>
                <strong>Learn About Chemotion ELN</strong> <br />
                Explore ELN features, request a demonstration, or try a test installation.
              </li>
              <li>
                <strong>Installation and IT Support</strong> <br />
                Get help with installing Chemotion ELN, resolving IT issues, or troubleshooting technical challenges.
              </li>
              <li>
                <strong>Feature Requests and Customization</strong> <br />
                Share your ideas for new features or request custom functionalities for your Chemotion ELN instance.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Support for Chemotion Repository</h2>
            <p className="leading-relaxed text-gray-700">
              For assistance with Chemotion Repository, please reach out to our team via email at:
              <br />
              <a
                href="mailto:chemotion-repository@lists.kit.edu"
                className="text-[#008ab8] font-semibold hover:underline">
                chemotion-repository@lists.kit.edu
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
            <p className="leading-relaxed text-gray-700">
              If you have any questions or require further assistance, feel free to contact us:
            </p>
            <p>
              <a href="mailto:helpdesk@nfdi4chem.de" className="text-[#008ab8] font-semibold hover:underline">
                helpdesk@nfdi4chem.de
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
