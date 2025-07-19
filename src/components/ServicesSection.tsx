import { Cloud, Database, Server, Brain, Shield, BarChart3, GitBranch, Archive, Zap, Network, Container, Activity, Layers, HardDrive, Settings } from 'lucide-react';
import cloudServicesImage from '@/assets/cloud-services-icons.png';

const ServicesSection = () => {
  const services = [
    { 
      icon: Cloud, 
      name: 'Cloud Migration Services', 
      description: 'Seamless cloud transformation',
      bgImage: '/lovable-uploads/37ed4a76-92b1-4596-a95f-84b5b62aae84.png'
    },
    { 
      icon: Settings, 
      name: 'DevOps Services', 
      description: 'Streamlined development operations',
      bgImage: '/lovable-uploads/4c51e056-8847-49c6-b669-3971f0e13cbb.png'
    },
    { 
      icon: Container, 
      name: 'Kubernetes Consulting & Managed Services', 
      description: 'Expert container orchestration',
      bgImage: null
    },
    { 
      icon: BarChart3, 
      name: 'Cloud Optimization Consulting', 
      description: 'Performance & cost optimization',
      bgImage: '/lovable-uploads/20fc19c8-af55-43a2-970a-a678465a58ee.png'
    },
    { 
      icon: Activity, 
      name: 'SRE (24/7)', 
      description: 'Site reliability engineering',
      bgImage: null
    },
    { 
      icon: Brain, 
      name: 'AI/Gen AI Cloud Services', 
      description: 'Intelligent cloud automation',
      bgImage: '/lovable-uploads/273697eb-35a9-455e-9ac0-c0e30db63656.png'
    },
    { 
      icon: Layers, 
      name: 'Multi-cloud & Hybrid Cloud Management', 
      description: 'Unified cloud orchestration',
      bgImage: '/lovable-uploads/6f8c5bad-f830-4a3a-8075-792eb5e116d8.png'
    },
    { 
      icon: BarChart3, 
      name: 'FinOps & Cloud Cost Optimize', 
      description: 'Financial operations for cloud',
      bgImage: '/lovable-uploads/20fc19c8-af55-43a2-970a-a678465a58ee.png'
    },
    { 
      icon: Zap, 
      name: 'Edge Computing', 
      description: 'Distributed computing solutions',
      bgImage: '/lovable-uploads/10028ffc-e514-43a8-8a79-0286ec10c05f.png'
    },
    { 
      icon: GitBranch, 
      name: 'Low Code and No Code Cloud Solution', 
      description: 'Rapid application development',
      bgImage: '/lovable-uploads/187c0482-934b-4af5-a052-c6ddda4b317b.png'
    },
    { 
      icon: Shield, 
      name: 'Data Security', 
      description: 'Advanced data protection',
      bgImage: '/lovable-uploads/a75e8ec0-6948-4e16-977a-2c622a496439.png'
    },
    { 
      icon: Archive, 
      name: 'Disaster Recovery and Backup', 
      description: 'Business continuity solutions',
      bgImage: null
    },
    { 
      icon: Server, 
      name: 'Serverless Architecture/Computing', 
      description: 'Event-driven cloud functions',
      bgImage: '/lovable-uploads/fa0a405d-90ce-44dd-9155-2f21e8c7a562.png'
    },
    { 
      icon: HardDrive, 
      name: 'Quantum Computing', 
      description: 'Next-generation processing power',
      bgImage: '/lovable-uploads/909319b9-6e92-445d-a213-0dfeb7f5d8cb.png'
    },
    { 
      icon: Network, 
      name: 'Rise of Industry-Specific Cloud Platform', 
      description: 'Tailored industry solutions',
      bgImage: null
    },
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
            <div className="flex space-x-8 animate-scroll-slow">
              {[...services, ...services].map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center space-x-3 px-6 py-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 relative overflow-hidden"
                style={service.bgImage ? {
                  backgroundImage: `url(${service.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                } : {}}
              >
                {service.bgImage && (
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
                )}
                <service.icon className="w-8 h-8 text-primary relative z-10" />
                <div className="relative z-10">
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
              className="cloud-card card-3d group relative overflow-hidden"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                ...(service.bgImage ? {
                  backgroundImage: `url(${service.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                } : {})
              }}
            >
              {service.bgImage && (
                <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
              )}
              <div className="relative z-10">
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