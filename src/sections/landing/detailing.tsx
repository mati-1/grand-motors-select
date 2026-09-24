import { ButtonComponent } from "../../components/button";
import { LineComponent } from "../../components/line";
import { PageSectionComponent } from "../../components/page-section";
import { MainHeadingComponent } from "../../components/headings";

export const DetailingSectionComponent = () => {
  return (
    <PageSectionComponent
      id="detailing"
      type="right"
      image="https://img.magnific.com/free-photo/man-working-car-detailing-coating-car_1303-30592.jpg?t=st=1789496500~exp=1789500100~hmac=49f8aab811cf826ec04e502215a258d9e1b1129af186054a7ab7ed2b14613e16&w=1480"
    >
      <div className="text-[9px] tracking-[0.3em] text-[#999] sm:text-[10px] sm:tracking-[0.4em]">
        PROFESJONALNY <span className="text-[#d2b878]">DETAILING</span>
      </div>

      <MainHeadingComponent className="text-[34px]! max-lg:mb-5 sm:text-[50px]!">
        DETAL
        <br />
        KTÓRY
        <br />
        <span className="text-[#d2b878]">WIDAĆ.</span>
      </MainHeadingComponent>

      <LineComponent type="left" className="my-6 w-[30%] hidden lg:block" />

      <p className="mb-6 max-w-117.5 text-[12px] leading-[1.8] text-[#888] sm:text-[13px] sm:leading-[1.9]">
        Detailing w GRAND MOTORS SELECT to coś więcej niż dokładne umycie
        samochodu.
        <br />
        <br />
        Pracujemy nad każdym detalem — od dokładnego oczyszczenia i pielęgnacji
        lakieru, przez wnętrze, aż po zabezpieczenie powierzchni. Wszystko po
        to, aby samochód odzyskał świeżość, głębię i właściwy wygląd.
      </p>
      <ButtonComponent href="/detailing" size="small">
        POZNAJ ZAKRES USŁUG →
      </ButtonComponent>
    </PageSectionComponent>
  );
};
