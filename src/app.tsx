import {
  SubHeadingComponent,
  MainHeadingComponent,
} from "./components/headings";
import WrapPage from "./pages/WrapPage";
import { CarsComponent } from "./sections/landing/cars";
import { ContactSectionComponent } from "./sections/landing/contact";
import { DetailingSectionComponent } from "./sections/landing/detailing";
import { FooterComponent } from "./sections/landing/footer";
import { HeaderComponent } from "./components/header/header";
import { HeroComponentSection } from "./sections/landing/hero";
import { ReviewsComponent } from "./sections/landing/reviews/reviews";
import { TrustComponent } from "./sections/landing/trust";
import { WrapSectionComponent } from "./sections/landing/wrap";

import { Routes, Route, useLocation } from "react-router-dom";

import { RegulationPage } from "./pages/regulationPage";
import { PrivacyPolicyPage } from "./pages/privacyPolicyPage";
import { DetailingPage } from "./pages/detailingPage";
import CarsPage from "./pages/carsPage";
import CarDetailsPage from "./pages/carDetailsPage";
import ContactPage from "./pages/contactPage";
import { PageLoader } from "./components/page-loader";
import { CookieBanner } from "./components/CookieBanner";

const pageVideos: Record<string, string> = {
  "/": "/hero.mp4",
  "/detailing": "/detailing.mp4",
  "/wrap": "/wrap.mp4",
  "/cars": "/cars.mp4",
};

const App = () => {
  const location = useLocation();

  const videoSrc = pageVideos[location.pathname];

  return (
    <div className="min-h-screen bg-[#050505] text-[#f4f4f2]">
      <HeaderComponent />

      <PageLoader videoSrc={videoSrc} />

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

        <Route path="/wrap" element={<WrapPage />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <CookieBanner />
    </div>
  );
};

export default App;
