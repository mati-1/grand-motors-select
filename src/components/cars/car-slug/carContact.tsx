import { ButtonComponent } from "../../button";

export const CarContact = () => {
  return (
    <section className="px-[5vw] py-20 sm:py-28">
      <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
        <div>
          <span className="text-[9px] tracking-[0.3em] text-[#b99a5c]">
            05 / KONTAKT
          </span>

          <h2 className="mt-4 text-[clamp(36px,5vw,58px)] font-normal leading-[1.05] text-[#ddd]">
            ZAINTERESOWANY?
            <br />
            <span className="text-[#d2b878]">POROZMAWIAJMY.</span>
          </h2>

          <p className="mt-6 max-w-110 text-[12px] leading-[1.9] text-[#666]">
            Chcesz poznać samochód bliżej? Skontaktuj się z nami i umów
            prezentację wybranego egzemplarza.
          </p>
        </div>

        <ButtonComponent href="tel:+48514137133" size="big">
          ZADZWOŃ →
        </ButtonComponent>
      </div>
    </section>
  );
};
