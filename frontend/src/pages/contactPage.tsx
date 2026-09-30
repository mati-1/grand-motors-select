import { FooterComponent } from "../components/footer";
import { ContactHero } from "../sections/contact/ContactHero";
import { ContactMap } from "../sections/contact/ContactMap";

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
