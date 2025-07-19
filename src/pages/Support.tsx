import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

import { useState } from 'react';

const Support = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    // WhatsApp
    const waMsg = `Name: ${form.name}%0AEmail: ${form.email}%0ACompany: ${form.company}%0ACountry: ${form.country}%0APhone: ${form.phone}`;
    window.open(`https://wa.me/919347376755?text=${waMsg}`, '_blank');
    // Email (mailto fallback)
    const mailBody = `Name: ${form.name}%0AEmail: ${form.email}%0ACompany: ${form.company}%0ACountry: ${form.country}%0APhone: ${form.phone}`;
    window.open(`mailto:jithenderkanna@gmail.com?subject=Demo%20Request&body=${mailBody}`, '_blank');
    setLoading(false);
    setSuccess(true);
    setForm({ name: '', email: '', company: '', country: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 w-full bg-slate-100/90 py-12 px-4 md:px-0 mt-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-slate-900">Schedule A Demo</h1>
          <div className="flex flex-col md:flex-row gap-10 items-start justify-between mt-8">
            {/* Left: Features & Benefits */}
            <div className="flex-1 min-w-[300px]">
              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-3xl"></span>
                  <span className="text-lg font-medium text-slate-700">See the benefits for yourself in real-time</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🆓</span>
                  <span className="text-lg font-medium text-slate-700">Free with no commitment</span>
                </div>
              </div>
              <hr className="my-6 border-slate-300" />
              <h2 className="text-2xl font-bold mb-4 text-slate-900">How Our Cloud Solutions Help Your Company:</h2>
              <ul className="list-disc pl-6 text-slate-700 text-base space-y-2">
                <li>Accelerate your cloud adoption journey</li>
                <li>Automate and streamline IT workflows</li>
                <li>Gain visibility and control over cloud spend</li>
                <li>Reduce hours spent on manual tasks</li>
                <li>Easy to use, secure, and scalable</li>
              </ul>
            </div>
            {/* Right: Demo Form */}
            <form onSubmit={handleSubmit} className="flex-1 min-w-[320px] bg-blue-500/90 rounded-xl shadow-xl p-8 flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base text-black placeholder:text-slate-500 bg-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base text-black placeholder:text-slate-500 bg-white"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base text-black placeholder:text-slate-500 bg-white"
                required
              />
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base text-black bg-white"
                required
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Work Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base text-black placeholder:text-slate-500 bg-white"
                required
              />
              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-3 rounded-lg shadow-lg mt-2 transition-all duration-200"
                disabled={loading}
              >
                {loading ? 'SENDING...' : 'REQUEST A DEMO'}
              </Button>
              {success && (
                <div className="text-green-700 font-semibold text-center mt-2">Thank you! Your request has been sent.</div>
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
