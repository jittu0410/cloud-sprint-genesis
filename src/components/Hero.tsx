import { Button } from '@/components/ui/button';
import { ArrowRight, Cloud, Zap, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#F8F6F0] overflow-hidden">
      {/* Removed gradient and floating elements for a clean look */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Techiravan - Next-Gen Cloud Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-float-up">
            <span className="gradient-text">Cloud Services</span>
            <br />
            <span className="text-[#333333]">& Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-1.5xl text-[#333333] mb-8 max-w-3xl mx-auto animate-float-up">
            Transform your business with cutting-edge cloud infrastructure, 
            AI-powered solutions, and enterprise-grade security.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
              <Cloud className="w-5 h-5 mr-2 text-primary" />
              <span className="text-sm text-[#333333]">Scalable Infrastructure</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
              <Shield className="w-5 h-5 mr-2 text-primary" />
              <span className="text-sm text-[#333333]">Enterprise Security</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
              <Zap className="w-5 h-5 mr-2 text-primary" />
              <span className="text-sm text-[#333333]">AI-Powered</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl md:text-3xl font-bold text-[#333333] mb-2">99.9%</div>
              <div className="text-[#333333]">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-3xl font-bold text-[#333333] mb-2">1000+</div>
              <div className="text-[#333333]">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-3xl font-bold text-[#333333] mb-2">24/7</div>
              <div className="text-[#333333]">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;