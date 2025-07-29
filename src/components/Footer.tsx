import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    'Cloud Migration Services',
    'DevOps Services',
    'Kubernetes Consulting & Managed Services',
    'Cloud Optimization Consulting',
    'SRE (24/7)',
    'AI/Gen AI Cloud Services',
    'Multi-cloud & Hybrid Cloud Management',
    'FinOps & Cloud Cost Optimize',
    'Edge Computing',
    'Low Code and No Code Cloud Solution',
    'Data Security',
    'Disaster Recovery and Backup',
    'Serverless Architecture/Computing',
    'Quantum Computing',
    'Rise of Industry-Specific Cloud Platform'
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/105367148', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/techiravan/', label: 'Instagram' },
  ];

  return (
    <footer id="contact" className="relative border-t border-light-gray/30 overflow-hidden bg-[#F8F6F0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-6 text-white">
                <span className="text-black">Techiravan</span>
              </h2>
              <p className="text-muted-foreground">
                Leading provider of innovative cloud services and solutions, 
                empowering businesses to scale and succeed in the digital era.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@techiravan.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@techiravan.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919121396814" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 91213 96814
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Hyderabad, Telangana 500098
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              Stay connected for the latest updates, insights, and cloud innovations.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              2024 Techiravan. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;