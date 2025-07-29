// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";

import Index from "./pages/Index";
import AllServices from "./pages/AllServices";
import AllBlogs from "./pages/AllBlogs";
import NotFound from "./pages/NotFound";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import ThankYou from './pages/thank-you'; // Your import is correct

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<AllServices />} />
            <Route path="/blogs" element={<AllBlogs />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* THIS IS THE FIX: Add the route for your thank you page */}
            <Route path="/thank-you" element={<ThankYou />} />

            {/* The catch-all route must always be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
