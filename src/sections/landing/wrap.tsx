import { ButtonComponent } from "../../components/button";
import { MainHeadingComponent } from "../../components/headings";
import { LineComponent } from "../../components/line";
import { PageSectionComponent } from "../../components/page-section";

export const WrapSectionComponent = () => {
  return (
    <PageSectionComponent
      id="wrap"
      type="left"
      image="/wrap/wrap.jpg"
      className="scale-x-[-1]"
    >
      <div className="text-[9px] tracking-[0.3em] text-[#999] sm:text-[10px] sm:tracking-[0.4em]">
        PROFESJONALNY <span className="text-[#d2b878]">WRAP</span>
      </div>

      <MainHeadingComponent className="text-[34px]! max-lg:mb-5 sm:text-[50px]!">
        ZMIENIAMY
        <br />
        WYGLĄD
        <br />
        <span className="text-[#d2b878]">NIE CHARAKTER.</span>
      </MainHeadingComponent>

      <LineComponent type="right" className="my-6 hidden lg:block w-[30%]" />

      <p className="mb-6 max-w-117.5 text-[12px] leading-[1.8] text-[#888] sm:text-[13px] sm:leading-[1.9]">
        Oklejanie samochodu pozwala całkowicie odmienić jego wygląd,
        jednocześnie zachowując charakter i wartość auta. Dobieramy wysokiej
        jakości folie do konkretnego samochodu i oczekiwanego efektu.
        <br />
        <br />
        Ty wybierasz kolor. My dbamy o każdy szczegół.
      </p>
      <ButtonComponent href="/wrap" size="small">
        POZNAJ OFERTĘ →
      </ButtonComponent>
    </PageSectionComponent>
  );
};
