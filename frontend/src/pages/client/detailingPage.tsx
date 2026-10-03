import { DetailingHero } from "./detailing/detailingHero";
import { DetailingIntro } from "./detailing/detailingIntro";
import { DetailingProcess } from "./detailing/detailingProcess";
import { DetailingBeforeAfter } from "./detailing/detailingBeforeAfter";
import { DetailingPackages } from "./detailing/detailingPackages";
import { DetailingServices } from "./detailing/detailingServices";
import { DetailingCta } from "./detailing/detailingCta";
import { FooterComponent } from "../../components/footer";

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
