"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        topic: "",
        message: "",
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24">
      <div className="px-6 md:px-10 lg:px-14 xl:max-w-7xl xl:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Left Column: Form */}
          <div>
            <h2 className="font-primary font-semibold text-3xl md:text-4xl text-text-primary mb-2">
              Send us a message
            </h2>
            <p className="font-secondary text-text-secondary text-sm md:text-base mb-8">
              Fill out the form and we'll get back to you within 24 hours.
            </p>

            {isSuccess ? (
              <div className="bg-green-50 text-green-700 p-6 rounded-2xl border border-green-200 font-secondary shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Message Sent!</h3>
                <p>Thank you for reaching out. We have received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-secondary">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="firstName" className="text-sm font-semibold text-text-primary">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      placeholder="Jane"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-brand shadow-[0_2px_10px_rgba(0,0,0,0.02)] bg-white"
                    />
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="lastName" className="text-sm font-semibold text-text-primary">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      placeholder="Smith"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-brand shadow-[0_2px_10px_rgba(0,0,0,0.02)] bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="email" className="text-sm font-semibold text-text-primary">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="chidi@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-brand shadow-[0_2px_10px_rgba(0,0,0,0.02)] bg-white"
                  />
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="topic" className="text-sm font-semibold text-text-primary">What's this about?</label>
                  <select 
                    id="topic" 
                    name="topic" 
                    required
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-brand shadow-[0_2px_10px_rgba(0,0,0,0.02)] appearance-none bg-white text-text-primary"
                    style={{ 
                      backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236D717F' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")", 
                      backgroundRepeat: "no-repeat", 
                      backgroundPosition: "right 1rem center", 
                      backgroundSize: "1.2em" 
                    }}
                  >
                    <option value="" disabled className="text-text-muted">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="message" className="text-sm font-semibold text-text-primary">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-brand shadow-[0_2px_10px_rgba(0,0,0,0.02)] resize-none bg-white"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-[#E96029] hover:bg-[#ff8255] text-white rounded-full px-8 py-6 text-sm font-semibold shadow-md transition-all w-max"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Cards */}
          <div className="flex flex-col gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col font-secondary h-full">
              <div className="h-48 md:h-[220px] relative w-full overflow-hidden">
                 <Image 
                    src="/images/contact-illust-1.png" 
                    alt="Email Us Illustration" 
                    fill 
                    className="object-cover"
                 />
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <h3 className="font-primary font-semibold text-2xl text-text-primary mb-3">Email Us</h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 flex-1">
                  For general questions, partnerships, or anything at all. We respond within 24 hours.
                </p>
                <a href="mailto:support@getcraveit.com" className="text-brand font-medium hover:underline text-sm md:text-base">
                  support@getcraveit.com
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col font-secondary h-full">
              <div className="h-48 md:h-[220px] relative w-full overflow-hidden">
                 <Image 
                    src="/images/contact-illust-2.png" 
                    alt="Become a Vendor Illustration" 
                    fill 
                    className="object-cover"
                 />
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <h3 className="font-primary font-semibold text-2xl text-text-primary mb-3">Become a Vendor</h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 flex-1">
                  Cook real food in Enugu? Download the app and sign up as a vendor to start reaching hungry customers.
                </p>
                <a href="/vendor" className="text-brand font-medium hover:underline flex items-center gap-2 text-sm md:text-base w-fit">
                  Learn More 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
