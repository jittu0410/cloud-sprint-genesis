import { Button } from '@/components/ui/button';
import { ArrowUpRight, Calendar, User, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AllBlogs = () => {
  const navigate = useNavigate();
  const blogs = [
    {
      title: "Cloud Infrastructure Best Practices",
      excerpt: "Discover the latest strategies for building scalable and secure cloud architectures that can handle enterprise-level workloads.",
      author: "Gjithender",
      date: "March 15, 2024",
      readTime: "8 min read",
      url: "https://gjithender09.wordpress.com/",
      category: "Infrastructure",
      featured: true
    },
    {
      title: "AI-Powered Cloud Solutions",
      excerpt: "Explore how artificial intelligence is revolutionizing cloud computing and business operations across various industries.",
      author: "Tejashwini",
      date: "March 12, 2024",
      readTime: "6 min read",
      url: "https://elikattetejashwini.wordpress.com/",
      category: "AI & ML",
      featured: true
    },
    {
      title: "DevOps in the Cloud Era",
      excerpt: "Learn about modern DevOps practices and tools for cloud-native development and continuous integration/deployment.",
      author: "Pranay Sai",
      date: "March 10, 2024",
      readTime: "7 min read",
      url: "https://uppupranaysai.wordpress.com/",
      category: "DevOps",
      featured: false
    },
    {
      title: "Cloud Innovation Strategies",
      excerpt: "Discover cutting-edge approaches to cloud transformation and digital innovation that drive business growth.",
      author: "Sumanth",
      date: "March 8, 2024",
      readTime: "5 min read",
      url: "https://bandarusaisumanth.wordpress.com/",
      category: "Innovation",
      featured: false
    },
    {
      title: "Kubernetes Security Best Practices",
      excerpt: "Essential security practices for Kubernetes deployments including RBAC, network policies, and container security.",
      author: "Gjithender",
      date: "March 5, 2024",
      readTime: "10 min read",
      url: "https://gjithender09.wordpress.com/",
      category: "Security",
      featured: false
    },
    {
      title: "Serverless Architecture Patterns",
      excerpt: "Comprehensive guide to serverless design patterns and their implementation in modern cloud applications.",
      author: "Tejashwini",
      date: "March 3, 2024",
      readTime: "9 min read",
      url: "https://elikattetejashwini.wordpress.com/",
      category: "Serverless",
      featured: false
    },
    {
      title: "Multi-Cloud Strategy Guide",
      excerpt: "How to implement a successful multi-cloud strategy that avoids vendor lock-in and maximizes flexibility.",
      author: "Pranay Sai",
      date: "February 28, 2024",
      readTime: "12 min read",
      url: "https://uppupranaysai.wordpress.com/",
      category: "Strategy",
      featured: false
    },
    {
      title: "Edge Computing Revolution",
      excerpt: "Understanding the impact of edge computing on application performance and user experience.",
      author: "Sumanth",
      date: "February 25, 2024",
      readTime: "6 min read",
      url: "https://bandarusaisumanth.wordpress.com/",
      category: "Edge Computing",
      featured: false
    }
  ];



  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Cloud Network Background Image */}
          <div className="absolute inset-0 bg-gradient-hero opacity-80 z-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Cloud <span className="gradient-text">Insights</span> & Expertise
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Stay ahead of the curve with our latest insights, best practices, and expert opinions 
                on cloud computing, DevOps, and emerging technologies.
              </p>
            </div>
          </div>
        </section>



        {/* All Blog Posts */}
        <section className="py-16 bg-gradient-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              All <span className="gradient-text">Articles</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs
                .filter(blog => ![
                  'Kubernetes Security Best Practices',
                  'Serverless Architecture Patterns',
                  'Multi-Cloud Strategy Guide',
                  'Edge Computing Revolution'
                ].includes(blog.title))
                .map((blog, index) => (
                <article
                  key={`${blog.title}-${index}`}
                  className="cloud-card card-3d group cursor-pointer bg-white/95 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-2xl rounded-xl p-6 border border-white/20"
                  onClick={() => window.open(blog.url, '_blank')}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Category Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4 group-hover:bg-blue-200 transition-colors">
                    {blog.category}
                  </div>

                  {/* Blog Content */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-800 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-slate-700 mb-6 line-clamp-3 group-hover:text-slate-800 transition-colors">
                    {blog.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-slate-700 group-hover:text-slate-800 transition-colors mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {blog.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {blog.readTime}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-slate-700 group-hover:text-slate-800 transition-colors mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blog.date}
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold group-hover:translate-x-1 transition-all">
                      Read More
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </article>
              ))}
            </div>

            {/* Back to Home */}
            <div className="text-center mt-16">
              <Link to="/">
                <Button variant="outline" className="mr-4">
                  ← Back to Home
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="mr-4">
                  Go to Services
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

export default AllBlogs;