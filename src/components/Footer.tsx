import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Facebook } from 'lucide-react';

const Footer = () => {
  const services = [
    'Cloud Infrastructure',
    'AI & Machine Learning',
    'Cybersecurity',
    'Data Analytics',
    'DevOps Solutions',
    'API Management'
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer id="contact" className="relative bg-card/50 backdrop-blur-sm border-t border-border overflow-hidden">
      {/* Cloud Network Background Image */}
      <img
        src="/cloud-bg.jpg"
        alt="Cloud Network Background"
        className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
        style={{ pointerEvents: 'none' }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-80 z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="text-2xl font-bold mb-4 text-slate-900">Techiravan</div>
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
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">info@technavan.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  123 Cloud Street<br />
                  Tech City, TC 12345
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
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </a>
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
              © 2024 Technavan. All rights reserved.
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