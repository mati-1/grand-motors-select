import { WrapHero } from "./wrap/WrapHero";
import { WrapIntro } from "./wrap/WrapIntro";
import { WrapServices } from "./wrap/WrapServices";
import { WrapProcess } from "./wrap/WrapProcess";
import { WrapBeforeAfter } from "./wrap/WrapBeforeAfter";
import { WrapPackages } from "./wrap/WrapPackages";
import { ContactSectionComponent } from "./landing/contact";
import { FooterComponent } from "../../components/footer";

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
