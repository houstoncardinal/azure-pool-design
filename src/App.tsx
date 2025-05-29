import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import ContentExtractor from "./pages/ContentExtractor";
import GetQuote from "./pages/GetQuote";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from './pages/Portfolio';
import JohnsonFamilyProject from './pages/JohnsonFamilyProject';
import PhillipsFamilyProject from './pages/PhillipsFamilyProject';
import KieselhorstFamilyProject from './pages/KieselhorstFamilyProject';
import BrownFamilyProject from './pages/BrownFamilyProject';
import RobinsonFamilyProject from './pages/RobinsonFamilyProject';
import RuckerFamilyProject from './pages/RuckerFamilyProject';
import JenningsFamilyProject from './pages/JenningsFamilyProject';
import TemsFamilyProject from './pages/TemsFamilyProject';
import MyerFamilyProject from './pages/MyerFamilyProject';
import PortfolioManagement from './pages/PortfolioManagement';

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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/johnson-family-project" element={<JohnsonFamilyProject />} />
          <Route path="/portfolio/phillips-family-project" element={<PhillipsFamilyProject />} />
          <Route path="/portfolio/kieselhorst-family-project" element={<KieselhorstFamilyProject />} />
          <Route path="/portfolio/brown-family-project" element={<BrownFamilyProject />} />
          <Route path="/portfolio/robinson-family-project" element={<RobinsonFamilyProject />} />
          <Route path="/portfolio/rucker-family-project" element={<RuckerFamilyProject />} />
          <Route path="/portfolio/jennings-family-project" element={<JenningsFamilyProject />} />
          <Route path="/portfolio/tems-family-project" element={<TemsFamilyProject />} />
          <Route path="/portfolio/myer-family-project" element={<MyerFamilyProject />} />
          <Route path="/portfolio-management" element={<PortfolioManagement />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
