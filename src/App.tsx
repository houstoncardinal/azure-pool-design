import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ContentExtractor from "./pages/ContentExtractor";
import GetQuote from "./pages/GetQuote";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BrownFamilyProject from "./pages/BrownFamilyProject";
import WhiteFamilyProject from './pages/WhiteFamilyProject';
import RodriguezFamilyProject from './pages/RodriguezFamilyProject';
import CoastalOasisProject from './pages/CoastalOasisProject';
import ModernRetreatProject from './pages/ModernRetreatProject';
import SereneEscapeProject from './pages/SereneEscapeProject';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/portfolio/brown-family-project" element={<BrownFamilyProject />} />
          <Route path="/portfolio/white-family-project" element={<WhiteFamilyProject />} />
          <Route path="/portfolio/rodriguez-family-project" element={<RodriguezFamilyProject />} />
          <Route path="/portfolio/coastal-oasis-project" element={<CoastalOasisProject />} />
          <Route path="/portfolio/modern-retreat-project" element={<ModernRetreatProject />} />
          <Route path="/portfolio/serene-escape-project" element={<SereneEscapeProject />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
