import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, CheckCircle2, Star, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop"
            alt="Video Editing Workspace"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-4 block">
                Professional Video Editing Studio
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Cinematic Storytelling for Your Brand.
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                We transform raw footage into compelling documentaries, engaging YouTube content, and high-impact promotional videos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all text-center flex items-center justify-center gap-2 group"
                >
                  Call Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all text-center flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  View Portfolio
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Specialized editing services tailored for creators, brands, and filmmakers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Documentary Editing',
                desc: 'Deep, narrative-driven editing that captures the essence of your story with cinematic pacing and emotional resonance.',
                icon: '🎬'
              },
              {
                title: 'YouTube Content',
                desc: 'High-retention editing designed for the YouTube algorithm, keeping viewers engaged from the hook to the outro.',
                icon: '▶️'
              },
              {
                title: 'Promotional Videos',
                desc: 'Sleek, professional brand videos that convert viewers into customers and elevate your corporate identity.',
                icon: '📈'
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-brand-black p-8 rounded-2xl border border-white/5 hover:border-brand-red/50 transition-colors group"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-red transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-brand-red font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
              <p className="text-gray-400">A glimpse into our recent storytelling projects.</p>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-brand-red font-semibold hover:text-red-400 transition-colors">
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'The Silent Ocean', category: 'Documentary', img: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?q=80&w=1000&auto=format&fit=crop' },
              { title: 'Tech Startup Journey', category: 'Brand Story', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop' }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer"
              >
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center pl-1">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-brand-red font-semibold text-sm tracking-wider uppercase mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-brand-red font-semibold hover:text-red-400 transition-colors">
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-charcoal border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Partner With Us?</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We don't just cut clips together; we craft narratives. Our documentary-first approach ensures every video has a soul, a rhythm, and a purpose.
              </p>
              
              <div className="space-y-6">
                {[
                  'Cinematic storytelling that hooks viewers',
                  'Fast, reliable turnaround times',
                  'Professional color grading & sound design',
                  'Dedicated communication throughout the project'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0 mt-1" />
                    <p className="text-gray-300 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-full bg-brand-red/10 absolute -inset-4 blur-3xl z-0" />
              <img 
                src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1000&auto=format&fit=crop" 
                alt="Editor Working" 
                className="rounded-2xl relative z-10 shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Stories</h2>
            <p className="text-gray-400">Don't just take our word for it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Jenkins', role: 'Documentary Filmmaker', text: 'Tanjim completely transformed my raw footage. The pacing and emotional beats were hit perfectly. Highly recommended.' },
              { name: 'Marcus Chen', role: 'Tech YouTuber (500k Subs)', text: 'Since hiring Tanjim Studio, my retention rates have skyrocketed. They understand the YouTube algorithm and how to tell a story.' },
              { name: 'Elena Rodriguez', role: 'Marketing Director', text: 'Professional, fast, and incredibly talented. The promotional video they edited for our campaign exceeded all expectations.' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-brand-charcoal p-8 rounded-2xl border border-white/5 relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />)}
                </div>
                <p className="text-gray-300 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-brand-red text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay z-0" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Tell Your Story?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's collaborate to create a video that captivates your audience and achieves your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-black hover:bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
            >
              Start Your Project Today
            </Link>
            <a
              href="tel:+15551234567"
              className="bg-white hover:bg-gray-100 text-brand-black px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
