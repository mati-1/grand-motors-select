import {
  SubHeadingComponent,
  MainHeadingComponent,
} from "./components/headings";

import { CarsComponent } from "./sections/landing/cars";
import { ContactSectionComponent } from "./sections/landing/contact";
import { DetailingSectionComponent } from "./sections/landing/detailing";
import { FooterComponent } from "./sections/landing/footer";
import { HeaderComponent } from "./components/header/header";
import { HeroComponentSection } from "./sections/landing/hero";
import { ReviewsComponent } from "./sections/landing/reviews/reviews";
import { TrustComponent } from "./sections/landing/trust";
import { WrapSectionComponent } from "./sections/landing/wrap";

import { Routes, Route } from "react-router-dom";

import { RegulationPage } from "./pages/regulationPage";
import { PrivacyPolicyPage } from "./pages/privacyPolicyPage";
import { DetailingPage } from "./pages/detailingPage";
import CarsPage from "./pages/carsPage";
import CarDetailsPage from "./pages/carDetailsPage";

const App = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f4f4f2]">
      <HeaderComponent />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <main>
                <HeroComponentSection />
                <TrustComponent />
                <CarsComponent />

                <div className="my-4 px-[5vw] md:my-8">
                  <SubHeadingComponent>
                    TO NIE TYLKO{" "}
                    <span className="text-[#d2b878]">SPRZEDAŻ</span>
                  </SubHeadingComponent>

                  <MainHeadingComponent>DETAILING I WRAP</MainHeadingComponent>
                </div>

                <DetailingSectionComponent />
                <WrapSectionComponent />
                <ReviewsComponent />
                <ContactSectionComponent />
              </main>

              <FooterComponent />
            </>
          }
        />

        <Route path="/detailing" element={<DetailingPage />} />

        <Route path="/regulamin" element={<RegulationPage />} />

        <Route path="/polityka-prywatnosci" element={<PrivacyPolicyPage />} />

        <Route path="/cars" element={<CarsPage />} />

        <Route path="/cars/:slug" element={<CarDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
