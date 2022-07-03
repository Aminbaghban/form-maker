import { useCallback, useEffect, useState } from 'react';

export const useRecaptcha = (
  key: string,
  apiKey: string,
  callback: () => void,
  active: boolean
) => {
  const [greCaptchaInstance, setGreCaptchaInstance] = useState<null | {
    execute: Function;
  }>(null);
  const loadScriptByURL = (id: string, url: string, callback: () => void) => {
    const recaptchaScript = document.getElementById(id);
    if (!recaptchaScript) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.id = id;
      script.onload = function () {
        let grecaptcha = (window as any).grecaptcha;
        grecaptcha.ready(() => {
          setGreCaptchaInstance(grecaptcha);
        });
        //if (callback) callback();
      };
      document.body.appendChild(script);
    } else {
      let grecaptcha = (window as any).grecaptcha;
      setGreCaptchaInstance(grecaptcha);
      //if (callback) callback();
    }
    if (recaptchaScript && callback) callback();
  };
  useEffect(() => {
    if (active) {
      loadScriptByURL(
        'recaptcha-key',
        `https://www.google.com/recaptcha/api.js?render=${apiKey}`,
        function () {}
      );
    }
  }, [key]);
  const getToken = useCallback(async () => {
    if (!greCaptchaInstance || !greCaptchaInstance.execute) {
      throw new Error('Google Recaptcha has not been loaded');
    }
    const result = await greCaptchaInstance.execute(apiKey, {
      action: 'submit',
    });

    return result as string;
  }, [greCaptchaInstance]);

  return [getToken] as const;
};
