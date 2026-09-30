import { WrapHero } from "../sections/wrap/WrapHero";
import { WrapIntro } from "../sections/wrap/WrapIntro";
import { WrapServices } from "../sections/wrap/WrapServices";
import { WrapProcess } from "../sections/wrap/WrapProcess";
import { WrapBeforeAfter } from "../sections/wrap/WrapBeforeAfter";
import { WrapPackages } from "../sections/wrap/WrapPackages";
import { ContactSectionComponent } from "../sections/landing/contact";
import { FooterComponent } from "../components/footer";

export const WrapPage = () => {
  return (
    <main>
      <WrapHero />
      <WrapIntro />
      <WrapServices />
      <WrapProcess />
      <WrapBeforeAfter />
      <WrapPackages />
      <ContactSectionComponent />
      <FooterComponent />
    </main>
  );
};

export default WrapPage;
