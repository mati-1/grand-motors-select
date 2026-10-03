import { ButtonComponent } from "../../../components/button";
import { PageSectionComponent } from "../../../components/page-section";
import {
  MainHeadingComponent,
  SubHeadingComponent,
} from "../../../components/headings";

export const DetailingSectionComponent = () => {
  return (
    <PageSectionComponent
      id="detailing"
      type="right"
      image="https://img.magnific.com/free-photo/man-working-car-detailing-coating-car_1303-30592.jpg?t=st=1789496500~exp=1789500100~hmac=49f8aab811cf826ec04e502215a258d9e1b1129af186054a7ab7ed2b14613e16&w=1480"
    >
      <SubHeadingComponent>Profesjonalny detailing</SubHeadingComponent>

      <MainHeadingComponent className="text-[32px]! mb-5 sm:text-[40px]!">
        DETAL
        <br />
        KTÓRY
        <br />
        <span className="text-[#d2b878]">WIDAĆ.</span>
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
