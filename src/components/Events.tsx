import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Heart, Music, Users, Mic, Palette, Brush, Theater, Users2, Camera, Instagram, Map, PersonStanding } from 'lucide-react';

const Events = () => {
  const events = [
    {
      icon: Crown,
      title: 'MR.SUNRISE',
      description: 'Showcase your talent, personality & confidence on stage',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Heart,
      title: 'MISS.SUNRISE',
      description: 'Grace, elegance & talent combined in one spectacular show',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: PersonStanding,
      title: 'CLASSICAL DANCE (SOLO)',
      description: 'Express the beauty of traditional Indian classical dance forms',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'WESTERN/FOLK DANCE',
      description: 'Solo or group performances showcasing diverse dance styles',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Mic,
      title: 'SINGING (SOLO/LIGHT VOCALS)',
      description: 'Melodious performances to captivate the audience',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'RANGOLI',
      description: 'Create stunning traditional art with colors & creativity',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brush,
      title: 'MEHENDI',
      description: 'Intricate henna designs showcasing artistic excellence',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Theater,
      title: 'SKIT',
      description: 'Dramatic performances bringing stories to life',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Users2,
      title: 'FLASHMOB',
      description: 'Surprise dance performances creating instant excitement',
      color: 'from-fuchsia-500 to-pink-500'
    },
    {
      icon: Camera,
      title: 'PHOTOGRAPHY',
      description: 'Capture moments through your creative lens',
      color: 'from-sky-500 to-blue-500'
    },
    {
      icon: Instagram,
      title: 'INSTA REELS',
      description: 'Create trending short-form video content by instagram',
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: Map,
      title: 'TREASURE HUNT',
      description: 'Exciting quest filled with clues and adventures',
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  return (
    <section id="events" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
        
        {/* Animated circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full mix-blend-screen filter blur-xl"
            style={{
              background: `radial-gradient(circle, ${i === 0 ? 'rgba(147,51,234,0.3)' : i === 1 ? 'rgba(59,130,246,0.3)' : 'rgba(236,72,153,0.3)'} 0%, transparent 70%)`,
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Decorative icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 -top-10 -translate-x-1/2 w-20 h-20 opacity-20"
          >
            <Crown className="absolute top-0 left-0 w-6 h-6 text-purple-400" />
            <Music className="absolute top-0 right-0 w-6 h-6 text-blue-400" />
            <Heart className="absolute bottom-0 left-0 w-6 h-6 text-pink-400" />
            <Camera className="absolute bottom-0 right-0 w-6 h-6 text-purple-400" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold relative">
            <span className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 opacity-50 blur-xl animate-pulse" />
            <span className="relative bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Cultural Events
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl group-hover:opacity-100 transition-opacity opacity-0" />
              <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors">
                <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 group-hover:scale-110 transition-transform">
                    <event.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                    {event.title}
                  </h3>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;