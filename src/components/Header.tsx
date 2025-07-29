import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-200/95 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/lovable-uploads/9049b2d2-59df-4d9a-a7f0-2931346bf2a8.png"
              alt="Techiravan Logo"
              className="h-40 w-auto transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation Centered */}
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-slate-800 hover:text-primary transition-colors duration-300 font-medium"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-slate-800 hover:text-primary transition-colors duration-300 font-medium"
              >
                Services
              </Link>
              <Link
                to="/blogs"
                className="text-slate-800 hover:text-primary transition-colors duration-300 font-medium"
              >
                Blogs
              </Link>
              <Link
                to="/support"
                className="text-slate-800 hover:text-primary transition-colors duration-300 font-medium"
              >
                Support
              </Link>
              <a
                href="#contact"
                className="text-slate-800 hover:text-primary transition-colors duration-300 font-medium"
              >
                Contact
              </a>
            </nav>
          </div>



          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 backdrop-blur-sm rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-slate-800 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-slate-800 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/blogs"
                className="block px-3 py-2 text-slate-800 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                to="/support"
                className="block px-3 py-2 text-slate-800 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              <a
                href="#contact"
                className="block px-3 py-2 text-slate-800 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>

            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;