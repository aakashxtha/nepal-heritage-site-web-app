import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <div className="container-page pt-28 sm:pt-32 pb-16 max-w-3xl">
      <Reveal>
        <p className="eyebrow">Legal</p>
        <h1 className="heading-serif mt-4 text-4xl sm:text-5xl font-semibold">Privacy</h1>
        <div className="mt-8 space-y-5 text-foreground/70 leading-relaxed">
          <p>
            This site does not collect personal data. There are no accounts, no tracking cookies,
            and no advertising.
          </p>
          <p>
            Map tiles are served by OpenStreetMap and images by Unsplash and Wikimedia Commons;
            requests to those services are subject to their respective privacy policies. Analytics,
            if ever enabled, will be anonymized and respect Do Not Track.
          </p>
          <p>Your theme preference (light or dark) is stored locally in your browser only.</p>
        </div>
      </Reveal>
    </div>
  );
}
