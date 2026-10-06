import { ButtonComponent } from "../../../components/button";
import { PageSectionComponent } from "../../../components/page-section";
import {
  MainHeadingComponent,
  SubHeadingComponent,
} from "../../../components/headings";
import { GradientSpan } from "../../../components/gradientSpan";
import DetailingImg from "../../../../public/detailing-landing.jpg";

export const DetailingSectionComponent = () => {
  return (
    <PageSectionComponent id="detailing" type="right" image={DetailingImg}>
      <SubHeadingComponent>Profesjonalny detailing</SubHeadingComponent>

      <MainHeadingComponent className="text-[32px]! mb-5 sm:text-[40px]!">
        DETAL
        <br />
        KTÓRY
        <br />
        <GradientSpan>WIDAĆ.</GradientSpan>
      </MainHeadingComponent>

      <SubHeadingComponent className="mb-6 max-w-117.5 leading-[1.8] sm:leading-[1.9]">
        Detailing w GRAND MOTORS SELECT to coś więcej niż dokładne umycie
        samochodu.
        <br />
        <br />
        Pracujemy nad każdym detalem — od dokładnego oczyszczenia i pielęgnacji
        lakieru, przez wnętrze, aż po zabezpieczenie powierzchni. Wszystko po
        to, aby samochód odzyskał świeżość, głębię i właściwy wygląd.
      </SubHeadingComponent>
      <ButtonComponent arrowIcon href="/detailing" size="small">
        Poznaj zakres usług
      </ButtonComponent>
    </PageSectionComponent>
  );
};
