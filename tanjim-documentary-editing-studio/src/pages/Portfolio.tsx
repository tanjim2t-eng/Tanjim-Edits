import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'The Silent Ocean',
      category: 'Documentary',
      description: 'A 20-minute deep dive into marine conservation efforts off the coast of Australia. Focus on emotional pacing and stunning color grading.',
      img: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Tech Startup Journey',
      category: 'Brand Story',
      description: 'A fast-paced, engaging promotional video for a Series A startup, highlighting their culture and product vision.',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'I Survived 100 Days in the Wild',
      category: 'YouTube Content',
      description: 'High-retention editing for a major YouTube creator, featuring dynamic sound design, motion graphics, and tight pacing.',
      img: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Urban Exploration',
      category: 'Social Media',
      description: 'A series of short-form vertical videos optimized for TikTok and Instagram Reels, driving high engagement.',
      img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'The Artisan Baker',
      category: 'Local Business',
      description: 'A warm, cinematic profile of a local bakery, focusing on the craft and dedication of the owner.',
      img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 6,
      title: 'Marathon Runner Profile',
      category: 'Documentary',
      description: 'An inspiring short documentary following an athlete\'s preparation for the Boston Marathon.',
      img: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000&auto=format&fit=crop',
    }
  ];

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-brand-red">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Explore our recent projects across documentaries, YouTube content, and brand storytelling.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-charcoal rounded-2xl overflow-hidden border border-white/5 group"
            >
              <div className="relative aspect-video overflow-hidden cursor-pointer">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center pl-1 transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-brand-red font-semibold text-xs tracking-wider uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
