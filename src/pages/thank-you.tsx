// src/pages/thank-you.tsx

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">✅ Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your message has been sent successfully. We'll get back to you soon.
            </p>
            <Link
              to="/"
              className="inline-block bg-[#D4AF37] hover:bg-[#2C2C2C] text-[#2C2C2C] hover:text-[#F8F6F0] font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
