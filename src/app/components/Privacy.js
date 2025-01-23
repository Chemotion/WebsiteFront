export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-4 mt-8 mb-20">
      <section className="mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-normal">Privacy Statement</h1>
        <p className="text-lg text-gray-600 mt-4">
          Transparency and user privacy are essential to us. This page outlines our approach.
        </p>
      </section>
      <div className="w-full">
        <section className="space-y-12 text-gray-800">
          <div>
            <h2 className="text-2xl mb-2 font-bold text-gray-900">Our Commitment to Privacy</h2>
            <p className="leading-relaxed mb-6 text-gray-700">
              We do not collect, store, or use cookies on our website. This ensures that your browsing experience
              remains private and free from tracking mechanisms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-2 font-bold text-gray-900">External Links</h2>
            <p className="leading-relaxed mb-4 text-gray-700">
              While we do not use cookies, our website may contain links to third-party websites that may utilize
              cookies or other tracking technologies. We recommend reviewing the privacy policies of these external
              sites to understand their practices.
            </p>
            <p className="leading-relaxed text-gray-700">
              These links are provided for informational purposes, and we are not responsible for the content or privacy
              practices of external platforms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-2 font-bold text-gray-900">Data Security</h2>
            <p className="leading-relaxed mb-6 text-gray-700">
              We take necessary precautions to ensure that your interaction with our website is secure. However, please
              note that no online platform can guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-2 font-bold text-gray-900">Updates</h2>
            <p className="leading-relaxed text-gray-700">
              This privacy statement is subject to periodic updates to reflect changes in our practices or regulations.
              Please revisit this page to stay informed about any updates.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
