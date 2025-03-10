'use client';

import { useEffect, useRef } from 'react';
import useContent from '@/hooks/useContent';
import RichTextRenderer from '@/components/helpers/RichTextRenderer';

export default function HelpPage() {
  const { content, isLoading } = useContent({
    apiKey: 'helpdesk-page',
    fallbackKey: 'helpdeskPage'
  });
  const feedbackFormRef = useRef(null);

  useEffect(() => {
    if (isLoading) return;
    if (!feedbackFormRef.current) return;

    // load jquery
    const loadScripts = () => {
      if (!window.jQuery) {
        const jQueryScript = document.createElement('script');
        jQueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
        jQueryScript.async = true;
        document.body.appendChild(jQueryScript);
        jQueryScript.onload = loadZammadScript;
      } else {
        loadZammadScript();
      }
    };

    const loadZammadScript = () => {
      // load zammadform
      const script = document.createElement('script');
      script.id = 'zammad_form_script';
      script.src = 'https://helpdesk.nfdi4chem.de/assets/form/form.js';
      script.async = true;
      document.body.appendChild(script);

      // init zammadform
      script.onload = () => {
        if (window.jQuery && feedbackFormRef.current) {
          window.jQuery(feedbackFormRef.current).ZammadForm({
            messageTitle: 'Contact Team Chemotion',
            messageSubmit: 'Submit',
            messageThankYou: "Thank you for your inquiry (#%s)! We'll contact you as soon as possible.",
            noCSS: true
          });

          pollForZammadForm();
        }
      };
    };

    const pollForZammadForm = () => {
      let attempts = 0;
      const maxAttempts = 30;
      const intervalId = setInterval(() => {
        attempts++;
        const $form = window.jQuery('.zammad-form');
        if ($form.length) {
          clearInterval(intervalId);
          styleAndObserveForm($form);
        } else if (attempts >= maxAttempts) {
          clearInterval(intervalId);
          console.warn('Zammad form not found after polling. It may have failed to inject.');
        }
      }, 200);
    };

    const styleAndObserveForm = ($form) => {
      $form.addClass(
        'space-y-8 mt-10 p-6 lg:px-16 py-12 flex flex-col justify-between ' +
          'bg-[#eeeeee] dark:bg-darkBackground border-l-4 dark:border-2 border-[#008ab8] dark:border-darkForeground ' +
          'shadow-md rounded-md'
      );
      $form.find('.form-group').addClass('space-y-2');
      $form.find('label').addClass('block text-sm font-medium');
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
            'bg-[#008ab8] dark:bg-darkBackground rounded-md font-semibold border-2 border-[#008ab8] ' +
            'dark:border-darkForeground shadow-sm transition-all duration-300 ' +
            'hover:bg-gray-800 hover:border-gray-800 hover:shadow-lg ' +
            'text-center w-36 ml-auto'
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

      const thankYouObserver = new MutationObserver(() => {
        const $thankYou = $form.find('.js-thankyou');
        if ($thankYou.length) {
          $thankYou.addClass('bg-green-100 text-green-800 p-3 mb-4 rounded text-sm font-semibold');
          $form.find('#zammad-error-alert').remove();
        }
      });
      thankYouObserver.observe($form[0], {
        childList: true,
        subtree: true
      });
    };

    loadScripts();
  }, [isLoading]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="mx-auto mb-20 mt-8 max-w-4xl p-4">
      <RichTextRenderer content={content} />
      <div id="feedback-form" ref={feedbackFormRef} aria-labelledby="Contact Form"></div>
    </main>
  );
}
