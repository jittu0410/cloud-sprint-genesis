import { Button } from '@/components/ui/button';
import { ArrowUpRight, Calendar, User } from 'lucide-react';

const BlogsSection = () => {
  const blogs = [
    {
      title: "Cloud Infrastructure Best Practices",
      excerpt: "Discover the latest strategies for building scalable and secure cloud architectures.",
      author: "Gjithender",
      date: "March 15, 2024",
      url: "https://gjithender09.wordpress.com/",
      category: "Infrastructure"
    },
    {
      title: "AI-Powered Cloud Solutions",
      excerpt: "Explore how artificial intelligence is revolutionizing cloud computing and business operations.",
      author: "Tejashwini",
      date: "March 12, 2024",
      url: "https://elikattetejashwini.wordpress.com/",
      category: "AI & ML"
    },
    {
      title: "DevOps in the Cloud Era",
      excerpt: "Learn about modern DevOps practices and tools for cloud-native development.",
      author: "Pranay Sai",
      date: "March 10, 2024",
      url: "https://uppupranaysai.wordpress.com/",
      category: "DevOps"
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-gradient-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and innovations 
            in cloud computing and technology.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={blog.title}
              className="cloud-card card-3d group cursor-pointer"
              onClick={() => window.open(blog.url, '_blank')}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {blog.category}
              </div>

              {/* Blog Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {blog.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {blog.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {blog.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blog.date}
                  </div>
                </div>
              </div>

              {/* Read More Link */}
              <div className="flex items-center justify-between">
                <span className="text-primary font-medium group-hover:translate-x-2 transition-transform">
                  Read More
                </span>
                <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="text-center mt-12">
          <Button className="btn-hero">
            View All Blogs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;