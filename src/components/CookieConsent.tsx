import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const CONSENT_KEY = "cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = localStorage.getItem(CONSENT_KEY);
    if (!existing) {
      setVisible(true);
    } else if (existing === "accepted" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl rounded-2xl border border-border/50 bg-background/95 p-6 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm leading-relaxed text-foreground md:text-base">
            Käytämme sivustolla Google Analytics -evästeitä kävijämäärien
            seurantaan. Voit hyväksyä tai hylätä ei-välttämättömät evästeet.
          </p>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button variant="outline" size="sm" onClick={handleReject}>
              Hylkää
            </Button>
            <Button size="sm" onClick={handleAccept}>
              Hyväksy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
