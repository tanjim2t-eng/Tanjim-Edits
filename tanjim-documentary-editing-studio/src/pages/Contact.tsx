import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectDetails: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', projectDetails: '' });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Let's <span className="text-brand-red">Talk.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Ready to start your next project? Fill out the form below or reach out directly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div className="bg-brand-charcoal p-10 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-black rounded-2xl flex items-center justify-center text-brand-red shrink-0 border border-white/5">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">Phone</p>
                    <a href="tel:+15551234567" className="text-xl font-semibold hover:text-brand-red transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-black rounded-2xl flex items-center justify-center text-brand-red shrink-0 border border-white/5">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">Email</p>
                    <a href="mailto:hello@tanjimstudio.com" className="text-xl font-semibold hover:text-brand-red transition-colors">
                      hello@tanjimstudio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-black rounded-2xl flex items-center justify-center text-brand-red shrink-0 border border-white/5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">Location</p>
                    <p className="text-xl font-semibold">
                      Remote Studio<br/>
                      <span className="text-gray-400 text-base font-normal">Available Worldwide</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <a 
                  href="https://wa.me/15551234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-brand-charcoal p-10 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              
              {isSuccess ? (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-2xl text-center">
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-400 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="projectDetails"
                      required
                      rows={5}
                      value={formState.projectDetails}
                      onChange={(e) => setFormState({ ...formState, projectDetails: e.target.value })}
                      className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors resize-none"
                      placeholder="Tell me about your video project, timeline, and goals..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
