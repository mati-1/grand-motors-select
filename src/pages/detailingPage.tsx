import { DetailingHero } from "../sections/detailing/detailingHero";
import { DetailingIntro } from "../sections/detailing/detailingIntro";
import { DetailingProcess } from "../sections/detailing/detailingProcess";
import { DetailingBeforeAfter } from "../sections/detailing/detailingBeforeAfter";
import { DetailingPackages } from "../sections/detailing/detailingPackages";
import { DetailingServices } from "../sections/detailing/detailingServices";
import { DetailingCta } from "../sections/detailing/detailingCta";
import { FooterComponent } from "../components/footer";

export const DetailingPage = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f4f4f2]">
      <DetailingHero />

      <DetailingIntro />

      <DetailingServices />

      <DetailingProcess />

      <DetailingBeforeAfter />

      <DetailingPackages />

      <DetailingCta />

      <FooterComponent />
    </main>
  );
};
