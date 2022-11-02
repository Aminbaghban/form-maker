import { useCallback, useEffect, useState } from 'react';

export const useRecaptcha = (
  key: string,
  apiKey: string,
  callback: () => void,
  disable: boolean = false
) => {
  const [token, setToken] = useState<string>('');
  const [greCaptchaInstance, setGreCaptchaInstance] = useState<null | {
    execute: Function;
  }>(null);
  const loadScriptByURL = (id: string, url: string, callback: () => void) => {
    const oldScript = document.getElementById(id);
    if (!oldScript) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.id = id;
      script.onload = function () {
        const grecaptcha = (window as any).grecaptcha;
        grecaptcha.ready(() => {
          setGreCaptchaInstance(grecaptcha);
        });
        if (callback) callback();
      };
      document.body.appendChild(script);
    } else if (!(window as any).grecaptcha) {
      oldScript.onload = function () {
        const grecaptcha = (window as any).grecaptcha;
        grecaptcha.ready(() => {
          setGreCaptchaInstance(grecaptcha);
        });
        if (callback) callback();
      };
    }
    if (oldScript && callback) callback();
  };
  useEffect(() => {
    if (!disable) {
      if (!!(window as any).grecaptcha) {
        const grecaptcha = (window as any).grecaptcha;
        setGreCaptchaInstance(grecaptcha);
      } else {
        loadScriptByURL(
          'recaptcha-key',
          `https://www.google.com/recaptcha/api.js?render=${apiKey}`,
          function () {}
        );
      }
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

  return { getToken } as const;
};
