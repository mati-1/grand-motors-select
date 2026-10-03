import { FooterComponent } from "../../components/footer";
import { ContactHero } from "./contact/ContactHero";
import { ContactMap } from "./contact/ContactMap";

export const ContactPage = () => {
  return (
    <main className="min-h-screen bg-[#050505]">
      <ContactHero />
      <ContactMap />
      <FooterComponent />
    </main>
  );
};

export default ContactPage;
