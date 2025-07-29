// PASTE THIS ENTIRE CODE INTO ContactForm.tsx

const ContactForm = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-[#F8F6F0] rounded-xl shadow-lg border border-[#2C2C2C]/10">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#2C2C2C]">Contact Us</h2>
      
      {/* This form posts directly to Formspree. It is our final solution. */}
      <form
        action="https://formspree.io/f/mwpqbjbj"
        method="POST"
        className="space-y-6"
      >
        {/* 
          YES, YOU NEED TO PASTE YOUR URL HERE.
          This hidden input tells Formspree where to send the user after they submit the form.
          This is a required integration step.
        */}
        <input 
          type="hidden" 
          name="_next" 
          value="/thank-you" // <-- PASTE YOUR URL HERE
        />

        {/* The rest of the form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="+1 (555 ) 123-4567"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              id="company"
              type="text"
              name="company"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Your company (optional)"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="How can we help you?"
          ></textarea>
        </div>
        
        <div>
          <button
            type="submit"
            className="w-full bg-[#D4AF37] hover:bg-[#2C2C2C] text-[#2C2C2C] hover:text-[#F8F6F0] font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
