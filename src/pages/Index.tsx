import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import BlogsSection from '@/components/BlogsSection';


import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();
  return (
    <div 
      className="min-h-screen bg-background relative"
      style={{
        backgroundImage: 'url(/assets/cloud-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="relative z-10">
      <Header />
      <Hero />
      <ServicesSection />
      <BlogsSection />
      {/* CTA Section: Speak with a Cloud Expert */}
      <section className="py-20 bg-slate-200/95 backdrop-blur-md border-b border-border/30 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Speak with a Cloud Expert – We’re Just One Click Away!</h2>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-4 rounded-lg shadow-lg transition-all duration-200 mb-4"
            style={{ fontWeight: 'bold', fontSize: '1.25rem' }}
            onClick={() => navigate('/support')}
          >
            SCHEDULE A FREE CALL
          </Button>
        </div>
      </section>
      <Footer />
      </div>
    </div>
  );
};

export default Index;
