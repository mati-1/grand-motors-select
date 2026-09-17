import { MainHeadingComponent, SubHeadingComponent } from "../headings";
import { ButtonComponent } from "../button";

export const CarsCta = () => {
  return (
    <section className="border-t border-white/5 px-[5vw] py-20 sm:py-28">
      <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
        <div>
          <SubHeadingComponent>
            NIE ZNALAZŁEŚ <span className="text-[#d2b878]">SWOJEGO?</span>
          </SubHeadingComponent>

          <MainHeadingComponent>POROZMAWIAJMY.</MainHeadingComponent>

          <p className="mt-6 max-w-110 text-[12px] leading-[1.9] text-[#666]">
            Jeśli szukasz konkretnego samochodu, którego nie ma jeszcze w naszej
            ofercie, skontaktuj się z nami.
          </p>
        </div>

        <ButtonComponent href="/kontakt" size="big">
          UMÓW OGLĘDZINY →
        </ButtonComponent>
      </div>
    </section>
  );
};
