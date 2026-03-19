import { motion } from 'motion/react';
import { Film, Edit3, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white/10 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1533227260815-92f24cb12615?q=80&w=1000&auto=format&fit=crop" 
                alt="Tanjim Video Editor" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h2 className="text-3xl font-bold text-white mb-2">Tanjim</h2>
                <p className="text-brand-red font-semibold tracking-wider uppercase text-sm">Lead Editor & Founder</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl z-0" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Story <span className="text-brand-red">Behind the Edit.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I'm Tanjim, a professional video editor specializing in documentary-style storytelling. For years, I've been helping creators, brands, and filmmakers turn raw footage into compelling narratives.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              My editing philosophy is simple: <strong className="text-white">Story comes first.</strong> Flashy transitions and effects are great, but if the pacing is off or the emotional core is missing, the video fails. I focus on rhythm, sound design, and narrative structure to ensure every project I touch resonates with its audience.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-4xl font-bold text-brand-red mb-2">5+</h4>
                <p className="text-gray-400 font-medium">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-brand-red mb-2">200+</h4>
                <p className="text-gray-400 font-medium">Projects Completed</p>
              </div>
            </div>

            <Link 
              to="/contact"
              className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 inline-block"
            >
              Work With Me
            </Link>
          </motion.div>
        </div>

        <div className="bg-brand-charcoal rounded-3xl p-12 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">My Approach</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">How I ensure every project meets the highest standards of quality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              { icon: <Film />, title: 'Narrative Focus', desc: 'Structuring footage to build tension, emotion, and resolution.' },
              { icon: <Edit3 />, title: 'Precision Editing', desc: 'Cutting on action and rhythm to maintain viewer engagement.' },
              { icon: <Award />, title: 'Cinematic Polish', desc: 'Professional color grading and sound mixing for a premium feel.' },
              { icon: <Users />, title: 'Collaborative', desc: 'Working closely with clients to ensure their vision is realized.' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto bg-brand-black rounded-2xl flex items-center justify-center text-brand-red mb-6 border border-white/10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
