import Spline from '@splinetool/react-spline';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background" style={{ backgroundColor: '#F8F6F0' }}>
      <Header />
      
      <main className="pt-20">
        <section className="relative overflow-hidden">
          {/* Hero Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-8 pt-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                Have questions or want to discuss a project? We'd love to hear from you!
              </p>
            </div>

            {/* Contact Form Section with Spline */}
            <div className="bg-gradient-secondary/10 rounded-2xl p-8 lg:p-12 -mx-4 sm:mx-0">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Left: Spline Design */}
                <div className="lg:w-1/2 h-[500px] -mt-8">
                  <Spline 
                    scene="https://prod.spline.design/4AnF6Hp3RN3Larwo/scene.splinecode"
                    style={{ width: '100%', height: '100%' }}
                    className="opacity-90"
                  />
                </div>
                
                {/* Right: Contact Form */}
                <div className="lg:w-1/2 w-full">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;