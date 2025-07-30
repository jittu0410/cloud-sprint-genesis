const ContactForm = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
      
      <form
        action="https://formspree.io/f/xldllerd"
        method="POST"
        className="space-y-6"
      >
        <input 
          type="hidden" 
          name="_next" 
          value="/thank-you"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500 transition-colors bg-white/50 text-gray-800 placeholder-gray-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500 transition-colors bg-white/50 text-gray-800 placeholder-gray-500"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500 transition-colors bg-white/50 text-gray-800 placeholder-gray-500"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-800 mb-1">
              Company
            </label>
            <input
              id="company"
              type="text"
              name="company"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500 transition-colors bg-white/50 text-gray-800 placeholder-gray-500"
              placeholder="Your company (optional)"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500 transition-colors bg-white/50 text-gray-800 placeholder-gray-500"
            placeholder="How can we help you?"
          ></textarea>
        </div>
        
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;