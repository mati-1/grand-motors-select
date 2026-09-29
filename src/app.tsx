import {
  SubHeadingComponent,
  MainHeadingComponent,
} from "./components/headings";
import WrapPage from "./pages/WrapPage";
import { CarsComponent } from "./sections/landing/cars";
import { ContactSectionComponent } from "./sections/landing/contact";
import { DetailingSectionComponent } from "./sections/landing/detailing";
import { FooterComponent } from "./components/footer";
import { HeaderComponent } from "./components/header/header";
import { HeroComponentSection } from "./sections/landing/hero";
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
import { Toaster } from "sonner";
import { AdminLoginPage } from "./pages/admin/login/AdminLoginPage";
import { AdminLayout } from "./components/admin/AdminLayout";
import { AdminDashboardPage } from "./pages/admin/dashboard/AdminDashboardPage";
import { AdminCarsPage } from "./pages/admin/cars/AdminCarsPage";
import { AdminFinancesPage } from "./pages/admin/finances/AdminFinancesPage";
import { AdminSalesPage } from "./pages/admin/sales/AdminSalesPage";
import { AdminExpensesPage } from "./pages/admin/expenses/AdminExpensesPage";
import { AdminCustomersPage } from "./pages/admin/customers/AdminCustomersPage";
import { AdminCompanyPage } from "./pages/admin/company/AdminCompanyPage";
import { AdminSettingsPage } from "./pages/admin/settings/AdminSettingsPage";
import { AdminCarFormPage } from "./pages/admin/cars/AdminCarFormPage";
import { AdminExpenseFormPage } from "./pages/admin/expenses/AdminExpenseFormPage";
import { AdminSaleFormPage } from "./pages/admin/sales/AdminSaleFormPage";

const pageVideos: Record<string, string> = {
  "/": "/hero.mp4",
  "/detailing": "/detailing.mp4",
  "/wrap": "/wrap.mp4",
  "/cars": "/cars.mp4",
  "/contact": "/contact.mp4",
};

const App = () => {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");
  const videoSrc = pageVideos[location.pathname];

  return (
    <div className="min-h-screen bg-[#050505] text-[#f4f4f2]">
      <Toaster
        position="bottom-right"
        toastOptions={{
          unstyled: true,
        }}
        duration={2000}
        visibleToasts={1}
      />
      {!isAdminRoute && <HeaderComponent />}

      {!isAdminRoute && <PageLoader videoSrc={videoSrc} />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <main>
                <HeroComponentSection />
                <CarsComponent />
                <TrustComponent />

                <div className="my-8 px-[4vw] min-[1200px]:px-[13vw]! md:my-12">
                  <SubHeadingComponent>
                    To nie tylko sprzedaż
                  </SubHeadingComponent>

                  <MainHeadingComponent className="mt-1! sm:mt-3">
                    Detailing i wrap
                  </MainHeadingComponent>
                </div>

                <DetailingSectionComponent />
                <WrapSectionComponent />
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

        <Route path="/admin/login" element={<AdminLoginPage />} />

        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminDashboardPage />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/cars"
          element={
            <AdminLayout>
              <AdminCarsPage />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/finances"
          element={
            <AdminLayout>
              <AdminFinancesPage />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/sales"
          element={
            <AdminLayout>
              <AdminSalesPage />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/expenses"
          element={
            <AdminLayout>
              <AdminExpensesPage />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/customers"
          element={
            <AdminLayout>
              <AdminCustomersPage />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/company"
          element={
            <AdminLayout>
              <AdminCompanyPage />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/settings"
          element={
            <AdminLayout>
              <AdminSettingsPage />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/cars/new"
          element={
            <AdminLayout>
              <AdminCarFormPage />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/cars/:id/edit"
          element={
            <AdminLayout>
              <AdminCarFormPage />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/expenses/new"
          element={
            <AdminLayout>
              <AdminExpenseFormPage />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/expenses/:id/edit"
          element={
            <AdminLayout>
              <AdminExpenseFormPage />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/sales/new"
          element={
            <AdminLayout>
              <AdminSaleFormPage />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/sales/:id/edit"
          element={
            <AdminLayout>
              <AdminSaleFormPage />
            </AdminLayout>
          }
        />
      </Routes>

      <CookieBanner />
    </div>
  );
};

export default App;
