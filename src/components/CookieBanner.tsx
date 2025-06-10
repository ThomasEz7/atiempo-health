'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Prüfen, ob der Benutzer bereits zugestimmt hat
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    // Cookie für 365 Tage setzen
    Cookies.set('cookie-consent', 'true', { expires: 365 });
    setShowBanner(false);
  };

  const declineCookies = () => {
    // Cookie für 30 Tage setzen (damit der Banner nicht zu oft erscheint)
    Cookies.set('cookie-consent', 'false', { expires: 30 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-700">
          <p className="text-sm">
            Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
            Mit der Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Ablehnen
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
} 