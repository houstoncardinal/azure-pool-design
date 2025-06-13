import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import ContentExtractor from "./pages/ContentExtractor";
import GetQuote from "./pages/GetQuote";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from './pages/Portfolio';
import PhillipsFamilyProject from './pages/PhillipsFamilyProject';
import BlountFamilyProject from './pages/BlountFamilyProject';
import BrownFamilyProject from './pages/BrownFamilyProject';
import RobinsonFamilyProject from './pages/RobinsonFamilyProject';
import RuckerFamilyProject from './pages/RuckerFamilyProject';
import JenningsFamilyProject from './pages/JenningsFamilyProject';
import TemsFamilyProject from './pages/TemsFamilyProject';
import MyerFamilyProject from './pages/MyerFamilyProject';
import SereneEscapeProject from './pages/SereneEscapeProject';
import ModernRetreatProject from './pages/ModernRetreatProject';
import CoastalOasisProject from './pages/CoastalOasisProject';
import RodriguezFamilyProject from './pages/RodriguezFamilyProject';
import WhiteFamilyProject from './pages/WhiteFamilyProject';
import PortfolioManagement from './pages/PortfolioManagement';
import CustomPoolsSpas from './pages/CustomPoolsSpas';
import UpgradesRepairs from './pages/UpgradesRepairs';
import PoolServicing from './pages/PoolServicing';
import ModernPoolDesigns from './pages/ModernPoolDesigns';
import HotTubIntegration from './pages/HotTubIntegration';
import ProfessionalInstallation from './pages/ProfessionalInstallation';
import JonesFamilyProject from './pages/JonesFamilyProject';
import MobileToolbar from './components/MobileToolbar';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Finance from './pages/Finance';

const queryClient = new QueryClient();

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

const App = () => (
  <HelmetProvider>
    {/* Updated: June 12, 2025 - Finance page integration */}
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/jones-family-project" element={<JonesFamilyProject />} />
            <Route path="/portfolio/phillips-family-project" element={<PhillipsFamilyProject />} />
            <Route path="/portfolio/blount-family-project" element={<BlountFamilyProject />} />
            <Route path="/portfolio/brown-family-project" element={<BrownFamilyProject />} />
            <Route path="/portfolio/robinson-family-project" element={<RobinsonFamilyProject />} />
            <Route path="/portfolio/rucker-family-project" element={<RuckerFamilyProject />} />
            <Route path="/portfolio/jennings-family-project" element={<JenningsFamilyProject />} />
            <Route path="/portfolio/tems-family-project" element={<TemsFamilyProject />} />
            <Route path="/portfolio/myers-family-project" element={<MyerFamilyProject />} />
            <Route path="/portfolio/serene-escape-project" element={<SereneEscapeProject />} />
            <Route path="/portfolio/modern-retreat-project" element={<ModernRetreatProject />} />
            <Route path="/portfolio/coastal-oasis-project" element={<CoastalOasisProject />} />
            <Route path="/portfolio/rodriguez-family-project" element={<RodriguezFamilyProject />} />
            <Route path="/portfolio/white-family-project" element={<WhiteFamilyProject />} />
            <Route path="/portfolio-management" element={<PortfolioManagement />} />
            {/* Service Pages */}
            <Route path="/custom-pools-spas" element={<CustomPoolsSpas />} />
            <Route path="/upgrades-repairs" element={<UpgradesRepairs />} />
            <Route path="/pool-servicing" element={<PoolServicing />} />
            <Route path="/modern-pool-designs" element={<ModernPoolDesigns />} />
            <Route path="/hot-tub-integration" element={<HotTubIntegration />} />
            <Route path="/professional-installation" element={<ProfessionalInstallation />} />
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
          <MobileToolbar />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
