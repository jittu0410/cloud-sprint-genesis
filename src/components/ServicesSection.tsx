import { Cloud, Database, Server, Brain, Shield, BarChart3, GitBranch, Archive, Zap, Network, Container, Activity, Layers, HardDrive, Settings } from 'lucide-react';
import cloudServicesImage from '@/assets/cloud-services-icons.png';

const ServicesSection = () => {
  const services = [
    { icon: Cloud, name: 'Cloud Storage', description: 'Scalable storage solutions' },
    { icon: Database, name: 'Database Management', description: 'Managed database services' },
    { icon: Server, name: 'Server Hosting', description: 'Reliable server infrastructure' },
    { icon: Brain, name: 'AI & Machine Learning', description: 'Intelligent automation' },
    { icon: Shield, name: 'Cybersecurity', description: 'Advanced threat protection' },
    { icon: BarChart3, name: 'Analytics', description: 'Data insights & reporting' },
    { icon: GitBranch, name: 'API Management', description: 'Seamless API integration' },
    { icon: Settings, name: 'DevOps Solutions', description: 'Streamlined development' },
    { icon: Archive, name: 'Backup & Recovery', description: 'Data protection services' },
    { icon: Zap, name: 'CDN Services', description: 'Global content delivery' },
    { icon: Network, name: 'Load Balancing', description: 'Traffic distribution' },
    { icon: Container, name: 'Container Orchestration', description: 'Kubernetes management' },
    { icon: Activity, name: 'Monitoring', description: 'Real-time performance tracking' },
    { icon: Layers, name: 'Networking', description: 'Advanced network solutions' },
    { icon: HardDrive, name: 'Data Migration', description: 'Seamless data transfer' },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Cloud Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cloud solutions designed to accelerate your digital transformation 
            and drive business growth.
          </p>
        </div>

        {/* Animated Services Banner */}
        <div className="relative h-32 mb-16 overflow-hidden rounded-2xl bg-gradient-cloud border border-border/30">
          <div className="absolute inset-0 flex items-center">
            <div className="flex space-x-8 animate-scroll">
              {[...services, ...services].map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center space-x-3 px-6 py-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50"
                >
                  <service.icon className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground whitespace-nowrap">{service.name}</div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">{service.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <div
              key={service.name}
              className="cloud-card card-3d group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{service.name}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                Learn More 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <button className="btn-hero">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;