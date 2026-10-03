import { ButtonComponent } from "../../../components/button";
import {
  MainHeadingComponent,
  SubHeadingComponent,
} from "../../../components/headings";
import { PageSectionComponent } from "../../../components/page-section";

export const WrapSectionComponent = () => {
  return (
    <PageSectionComponent
      id="wrap"
      type="left"
      image="/wrap/wrap.jpg"
      className="scale-x-[-1]"
    >
      <SubHeadingComponent>Profesjonalny wrap</SubHeadingComponent>

      <MainHeadingComponent className="text-[32px]! mb-5 sm:text-[40px]!">
        ZMIENIAMY
        <br />
        WYGLĄD
        <br />
        <span className="text-[#d2b878]">NIE CHARAKTER.</span>
      </MainHeadingComponent>

      <SubHeadingComponent className="mb-6 max-w-117.5 leading-[1.8] sm:leading-[1.9]">
        Oklejanie samochodu pozwala całkowicie odmienić jego wygląd. Dobieramy
        wysokiej jakości folie do konkretnego samochodu i oczekiwanego efektu.
        <br />
        <br />
        Ty wybierasz kolor. My dbamy o każdy szczegół.
      </SubHeadingComponent>
      <ButtonComponent arrowIcon href="/wrap" size="small">
        Poznaj ofertę
      </ButtonComponent>
    </PageSectionComponent>
  );
};
