import { ContactForm } from "../sections/contact/ContactForm";
import { ContactHero } from "../sections/contact/ContactHero";
import { ContactLocation } from "../sections/contact/ContactLocation";
import { ContactMethods } from "../sections/contact/ContactMethods";
import { ContactSectionComponent } from "../sections/landing/contact";
import { FooterComponent } from "../sections/landing/footer";

export const ContactPage = () => {
  return (
    <main>
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <ContactLocation />
      <ContactSectionComponent />
      <FooterComponent />
    </main>
  );
};

export default ContactPage;
