import { Button } from '@/components/ui/button';
import { ArrowRight, Cloud, Zap, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center cloud-bg overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background to-primary/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full service-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full service-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-primary-glow/10 rounded-full service-float"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Techiravan - Next-Gen Cloud Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float-up">
            <span className="gradient-text">Cloud Services</span>
            <br />
            <span className="text-foreground">& Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-float-up">
            Transform your business with cutting-edge cloud infrastructure, 
            AI-powered solutions, and enterprise-grade security.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
              <Cloud className="w-5 h-5 mr-2 text-primary" />
              <span className="text-sm">Scalable Infrastructure</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
              <Shield className="w-5 h-5 mr-2 text-primary" />
              <span className="text-sm">Enterprise Security</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
              <Zap className="w-5 h-5 mr-2 text-primary" />
              <span className="text-sm">AI-Powered</span>
            </div>
          </div>



          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-white/80">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-white/80">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-white/80">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;