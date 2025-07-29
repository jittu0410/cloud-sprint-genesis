import { scrollImages } from '@/assets/scroll-images';

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cloud solutions tailored to your business needs
          </p>
        </div>
        {/* Animated Images Banner */}
        <div className="relative h-56 mb-8 overflow-hidden rounded-2xl bg-slate-200/95 backdrop-blur-md border-b border-border/30">
          <div className="absolute inset-0 flex items-center">
            <div className="scroll-track">
              {[...scrollImages, ...scrollImages].map((img, idx, arr) => (
                <div
                  key={idx}
                  className="scroll-image-wrapper"
                  style={{ marginRight: idx === arr.length - 1 ? 0 : '5mm' }}
                >
                  <img src={img} alt="scroll-img" className="scroll-image" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-16">
          <a href="/services">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-200">
              View All Services
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;