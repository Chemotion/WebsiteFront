'use client';

import { useEffect } from 'react';

export default function HelpPage() {
  useEffect(() => {
    // load jquery
    if (!window.jQuery) {
      const jQueryScript = document.createElement('script');
      jQueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
      jQueryScript.async = true;
      document.body.appendChild(jQueryScript);
      jQueryScript.onload = () => loadZammadScript();
    } else {
      loadZammadScript();
    }

    function loadZammadScript() {
      // load zammadform
      const script = document.createElement('script');
      script.id = 'zammad_form_script';
      script.src = 'https://helpdesk.nfdi4chem.de/assets/form/form.js';
      script.async = true;
      document.body.appendChild(script);

      // init zammadform
      script.onload = () => {
        if (window.jQuery) {
          window.jQuery('#feedback-form').ZammadForm({
            messageTitle: 'Contact Team Chemotion',
            messageSubmit: 'Submit',
            messageThankYou: "Thank you for your inquiry (#%s)! We'll contact you as soon as possible.",
            noCSS: true
          });

          // time to ensure the form is fully injected before styling
          setTimeout(() => {
            const $form = window.jQuery('.zammad-form');

            $form.addClass(
              'space-y-8 mt-10 p-6 lg:px-16 py-12 flex flex-col justify-between ' +
                'bg-[#f2f2f2] border-l-4 border-[#008ab8] shadow-md rounded-md'
            );
            $form.find('.form-group').addClass('space-y-2');
            $form.find('label').addClass('block text-sm font-medium text-gray-800');
            $form
              .find('input, textarea')
              .addClass(
                'w-full px-4 py-2 border border-gray-300 rounded-md ' +
                  'shadow-sm focus:ring-[#008ab8] focus:border-[#008ab8]'
              );
            $form
              .find('button')
              .addClass(
                'inline-block px-8 py-3 text-center text-xl text-white ' +
                  'bg-[#008ab8] rounded-md font-semibold border-2 border-[#008ab8] ' +
                  'shadow-sm transition-all duration-300 hover:bg-gray-800 ' +
                  'hover:border-gray-800 hover:shadow-lg text-center w-36 ml-auto'
              );

            $form.on('submit', function (event) {
              $form.find('#zammad-error-alert').remove();

              const nameVal = $form.find('input[name="name"]').val().trim();
              const emailVal = $form.find('input[name="email"]').val().trim();
              const msgVal = $form.find('textarea[name="body"]').val().trim();

              let hasError = false;

              if (!nameVal) {
                $form.find('input[name="name"]').addClass('border-red-500 focus:border-red-500');
                hasError = true;
              } else {
                $form.find('input[name="name"]').removeClass('border-red-500 focus:border-red-500');
              }
              if (!emailVal) {
                $form.find('input[name="email"]').addClass('border-red-500 focus:border-red-500');
                hasError = true;
              } else {
                $form.find('input[name="email"]').removeClass('border-red-500 focus:border-red-500');
              }
              if (!msgVal) {
                $form.find('textarea[name="body"]').addClass('border-red-500 focus:border-red-500');
                hasError = true;
              } else {
                $form.find('textarea[name="body"]').removeClass('border-red-500 focus:border-red-500');
              }

              if (hasError) {
                event.preventDefault();
                $form.prepend(`
                  <div id="zammad-error-alert" class="bg-red-100 text-red-800 p-3 mb-4 rounded text-sm">
                    Please fill out all 3 fields.
                  </div>
                `);
              }
            });

            const observer = new MutationObserver(() => {
              const $thankYou = $form.find('.js-thankyou');
              if ($thankYou.length) {
                $thankYou.addClass('bg-green-100 text-green-800 p-3 mb-4 rounded text-sm font-semibold');
                $form.find('#zammad-error-alert').remove();
              }
            });
            observer.observe($form[0], {
              childList: true,
              subtree: true
            });
          }, 300);
        }
      };
    }
  }, []);

  return (
    <main className="mx-auto mb-20 mt-8 max-w-4xl p-4">
      <section className="mb-12">
        <h1 className="text-6xl font-extrabold leading-normal text-gray-900" aria-label="Helpdesk">
          Helpdesk
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Comprehensive guidance and support for every step of using Chemotion.
        </p>
      </section>

      <div className="w-full">
        <section className="space-y-8 text-gray-800" aria-labelledby="help-description">
          <div>
            <h2
              id="help-description"
              className="mb-2 text-2xl font-semibold text-gray-900"
              aria-label="How We Can Help">
              How We Can Help
            </h2>
            <p className="mb-2 leading-relaxed text-gray-700">
              Our team is dedicated to providing you with the support you need, whether you are new to Chemotion or
              require advanced assistance.
            </p>
            <ul className="list-disc space-y-4 pl-6 text-gray-700" aria-label="Support Areas">
              <li>
                <strong>Learn About Chemotion ELN</strong>
                <br />
                Explore ELN features, request a demonstration, or try a test installation.
              </li>
              <li>
                <strong>Installation and IT Support</strong>
                <br />
                Get help with installing Chemotion ELN, resolving IT issues, or troubleshooting technical challenges.
              </li>
              <li>
                <strong>Feature Requests and Customization</strong>
                <br />
                Share your ideas for new features or request custom functionalities for your Chemotion ELN instance.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Support for Chemotion Repository</h2>
            <p className="leading-relaxed text-gray-700">
              For assistance with Chemotion Repository, please reach out to our&nbsp;
              <a
                href="mailto:chemotion-repository@lists.kit.edu"
                className="font-semibold text-[#008ab8] hover:underline"
                aria-label="Send email to Chemotion Repository Team">
                Chemotion Repository Team
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
            <p className="leading-relaxed text-gray-700">
              If you have any questions or require further assistance, feel free to contact the helpdesk via&nbsp;
              <a
                href="mailto:helpdesk@nfdi4chem.de"
                className="font-semibold text-[#008ab8] hover:underline"
                aria-label="Send email to Helpdesk">
                E-Mail
              </a>
              &nbsp;or through our contact form:
            </p>

            <div id="feedback-form" aria-labelledby="Contact Form"></div>
          </div>
        </section>
      </div>
    </main>
  );
}
