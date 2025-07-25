import { Cloud, Database, Server, Brain, Shield, BarChart3, GitBranch, Archive, Zap, Network, Container, Activity, Layers, HardDrive, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AllServices = () => {
  const navigate = useNavigate();
  const services = [
    { 
      icon: Cloud, 
      name: 'Cloud Migration Services', 
      description: 'Seamless cloud transformation and migration strategies',
      bgImage: '/lovable-uploads/37ed4a76-92b1-4596-a95f-84b5b62aae84.png',
      longDescription: 'Comprehensive cloud migration services to help your business transition smoothly to the cloud with minimal downtime and maximum efficiency.'
    },
    { 
      icon: Settings, 
      name: 'DevOps Services', 
      description: 'Streamlined development operations and CI/CD pipelines',
      bgImage: '/lovable-uploads/4c51e056-8847-49c6-b669-3971f0e13cbb.png',
      longDescription: 'End-to-end DevOps solutions including automation, continuous integration, and deployment strategies that accelerate your development lifecycle.'
    },
    { 
      icon: Container, 
      name: 'Kubernetes Consulting & Managed Services', 
      description: 'Expert container orchestration and management',
      bgImage: null,
      longDescription: 'Professional Kubernetes consulting and managed services to help you deploy, scale, and manage containerized applications efficiently.'
    },
    { 
      icon: BarChart3, 
      name: 'Cloud Optimization Consulting', 
      description: 'Performance and cost optimization strategies',
      bgImage: '/lovable-uploads/20fc19c8-af55-43a2-970a-a678465a58ee.png',
      longDescription: 'Data-driven cloud optimization services to reduce costs, improve performance, and maximize your cloud infrastructure ROI.'
    },
    { 
      icon: Activity, 
      name: 'SRE (24/7)', 
      description: 'Site reliability engineering and monitoring',
      bgImage: null,
      longDescription: '24/7 site reliability engineering services ensuring maximum uptime, performance monitoring, and incident response for your critical systems.'
    },
    { 
      icon: Brain, 
      name: 'AI/Gen AI Cloud Services', 
      description: 'Intelligent cloud automation and AI integration',
      bgImage: '/lovable-uploads/273697eb-35a9-455e-9ac0-c0e30db63656.png',
      longDescription: 'Cutting-edge AI and generative AI cloud services to automate processes, enhance decision-making, and drive innovation in your business.'
    },
    { 
      icon: Layers, 
      name: 'Multi-cloud & Hybrid Cloud Management', 
      description: 'Unified cloud orchestration across platforms',
      bgImage: '/lovable-uploads/6f8c5bad-f830-4a3a-8075-792eb5e116d8.png',
      longDescription: 'Comprehensive multi-cloud and hybrid cloud management solutions for seamless integration across different cloud providers.'
    },
    { 
      icon: BarChart3, 
      name: 'FinOps & Cloud Cost Optimize', 
      description: 'Financial operations and cost management for cloud',
      bgImage: '/lovable-uploads/20fc19c8-af55-43a2-970a-a678465a58ee.png',
      longDescription: 'Strategic FinOps practices and cloud cost optimization to maximize your cloud investment and maintain budget control.'
    },
    { 
      icon: Zap, 
      name: 'Edge Computing', 
      description: 'Distributed computing solutions at the edge',
      bgImage: '/lovable-uploads/10028ffc-e514-43a8-8a79-0286ec10c05f.png',
      longDescription: 'Advanced edge computing solutions bringing processing power closer to data sources for reduced latency and improved performance.'
    },
    { 
      icon: GitBranch, 
      name: 'Low Code and No Code Cloud Solution', 
      description: 'Rapid application development platforms',
      bgImage: '/lovable-uploads/187c0482-934b-4af5-a052-c6ddda4b317b.png',
      longDescription: 'Innovative low-code and no-code cloud solutions enabling rapid application development and digital transformation.'
    },
    { 
      icon: Shield, 
      name: 'Data Security', 
      description: 'Advanced data protection and cybersecurity',
      bgImage: '/lovable-uploads/a75e8ec0-6948-4e16-977a-2c622a496439.png',
      longDescription: 'Comprehensive data security solutions including encryption, access control, compliance, and threat protection for your cloud assets.'
    },
    { 
      icon: Archive, 
      name: 'Disaster Recovery and Backup', 
      description: 'Business continuity and data protection solutions',
      bgImage: null,
      longDescription: 'Robust disaster recovery and backup solutions ensuring business continuity and data protection against any unforeseen circumstances.'
    },
    { 
      icon: Server, 
      name: 'Serverless Architecture/Computing', 
      description: 'Event-driven cloud functions and serverless solutions',
      bgImage: '/lovable-uploads/fa0a405d-90ce-44dd-9155-2f21e8c7a562.png',
      longDescription: 'Modern serverless architecture solutions enabling scalable, cost-effective, and event-driven application development.'
    },
    { 
      icon: HardDrive, 
      name: 'Quantum Computing', 
      description: 'Next-generation quantum processing solutions',
      bgImage: '/lovable-uploads/909319b9-6e92-445d-a213-0dfeb7f5d8cb.png',
      longDescription: 'Cutting-edge quantum computing services and consulting to prepare your business for the next revolution in computing power.'
    },
    { 
      icon: Network, 
      name: 'Rise of Industry-Specific Cloud Platform', 
      description: 'Tailored industry-specific cloud solutions',
      bgImage: null,
      longDescription: 'Specialized cloud platforms designed for specific industries, addressing unique challenges and regulatory requirements.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Cloud Network Background Image */}
          <img
            src="/cloud-bg.jpg"
            alt="Cloud Network Background"
            className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
            style={{ pointerEvents: 'none' }}
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80 z-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Complete <span className="gradient-text">Service Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Discover our comprehensive range of cloud services and solutions designed to 
                transform your business and accelerate your digital journey.
              </p>
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className="cloud-card card-3d group relative flex flex-col h-80"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-slate-300/50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-slate-400/50 transition-colors">
                        <service.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold line-clamp-2 text-slate-900 group-hover:text-blue-800 transition-colors">{service.name}</h3>
                    </div>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    <p className="text-sm text-slate-500 mb-6 flex-grow">{service.longDescription}</p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                      Learn More 
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Back to Home */}
            <div className="text-center mt-16">
              <Link to="/">
                <Button variant="outline" className="mr-4">
                  ← Back to Home
                </Button>
              </Link>
              <Button className="btn-hero" onClick={() => navigate('/support')}>
                Contact Us for Custom Solutions
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AllServices;