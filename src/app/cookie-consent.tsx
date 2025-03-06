"use client";
import { useEffect } from "react";

const CookieConsent = () => {
  useEffect(() => {
    const cookieBotWrapper = document.getElementById("CookiebotWrapper");
    if (cookieBotWrapper) {
      const script = document.createElement("script");
      script.id = "CookieDeclaration";
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://consent.cookiebot.com/6b273920-5367-485a-8b9a-ff22f451f1b1/cd.js";

      cookieBotWrapper.appendChild(script);
    }
  }, []);

  return (
    <div id="CookiebotWrapper" className="container px-4 mt-28 py-8"></div>
  );
};

export default CookieConsent;
