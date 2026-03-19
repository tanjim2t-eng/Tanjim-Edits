import { motion } from 'motion/react';
import { Film, Youtube, Briefcase, Smartphone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'documentary',
      title: 'Documentary Editing',
      icon: <Film className="w-12 h-12 text-brand-red" />,
      description: 'We specialize in long-form, narrative-driven documentary editing. We take hours of raw footage and sculpt it into a compelling story that keeps viewers hooked from start to finish.',
      benefits: [
        'Narrative structuring & pacing',
        'Advanced color grading (Cinematic look)',
        'Professional sound design & mixing',
        'Archival footage integration'
      ]
    },
    {
      id: 'youtube',
      title: 'YouTube Video Editing',
      icon: <Youtube className="w-12 h-12 text-brand-red" />,
      description: 'Designed specifically for the YouTube algorithm. We focus on high-retention editing techniques, engaging hooks, and dynamic pacing to maximize watch time and subscriber growth.',
      benefits: [
        'High-retention pacing & jump cuts',
        'Engaging motion graphics & text tracking',
        'Sound effects & background music selection',
        'Thumbnail consultation included'
      ]
    },
    {
      id: 'corporate',
      title: 'Corporate & Brand Videos',
      icon: <Briefcase className="w-12 h-12 text-brand-red" />,
      description: 'Elevate your brand with professional promotional videos. Perfect for website headers, product launches, company culture videos, and investor pitches.',
      benefits: [
        'Clean, professional aesthetic',
        'Brand guideline adherence',
        'Interview multi-cam syncing',
        'Lower thirds & corporate graphics'
      ]
    },
    {
      id: 'social',
      title: 'Social Media Edits',
      icon: <Smartphone className="w-12 h-12 text-brand-red" />,
      description: 'Short-form, highly engaging vertical videos optimized for TikTok, Instagram Reels, and YouTube Shorts. Capture attention in the first 3 seconds.',
      benefits: [
        'Optimized for 9:16 vertical format',
        'Trendy pacing & transitions',
        'Captions & subtitles (Alex Hormozi style)',
        'Repurposing long-form content'
      ]
    }
  ];

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-brand-red">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Professional post-production solutions tailored to your specific content needs.
          </motion.p>
        </div>

        <div className="space-y-24">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="bg-brand-charcoal p-12 rounded-3xl border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 transform group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="mb-6">{service.icon}</div>
                    <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <h3 className="text-xl font-semibold mb-4 text-white">What's Included:</h3>
                    <ul className="space-y-4 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/contact"
                      className="inline-flex items-center justify-center px-8 py-3 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white rounded-full font-semibold transition-colors"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 w-full hidden lg:block">
                {/* Visual placeholder for service */}
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-charcoal to-brand-black border border-white/5 flex items-center justify-center p-12 relative overflow-hidden">
                   <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                   <div className="relative z-10 text-brand-red opacity-50 transform scale-[3]">
                     {service.icon}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
