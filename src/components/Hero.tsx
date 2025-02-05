import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles, Users, Music, Star } from 'lucide-react';


const Hero = () => {
  const highlights = [
    { icon: Calendar, text: 'Feb 21-22, 2025' },
    { icon: MapPin, text: 'College Campus' },
    { icon: Users, text: '5000+ Attendees' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
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

        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Decorative icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-24 w-48 h-48 opacity-20"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Music className="w-12 h-12 text-purple-400" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center rotate-45">
                <Star className="w-12 h-12 text-blue-400" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center rotate-90">
                <Music className="w-12 h-12 text-pink-400" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center rotate-135">
                <Star className="w-12 h-12 text-purple-400" />
              </div>
            </motion.div>

            {/* Main title with animated gradient */}
            <motion.h1
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-6xl md:text-8xl font-bold tracking-tight"
            >
              <span className="inline-block relative">
                <span className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 opacity-50 blur-xl animate-pulse" />
                <span className="relative bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
                  SUNRISE 2025
                </span>
              </span>
            </motion.h1>

            {/* Highlights */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-wrap justify-center gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-white/5 backdrop-blur-lg px-4 py-2 rounded-full"
                >
                  <item.icon className="w-5 h-5 text-purple-400" />
                  <span className="text-lg text-gray-200">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Experience the ultimate celebration of music, art, and culture at the biggest college festival of the year
            </motion.p>

            CTA Buttons
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-bold text-white overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 shadow-lg hover:shadow-purple-500/25"
              >
                <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                Get Your Tickets
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-bold text-white overflow-hidden rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-colors"
              >
                View Schedule
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-blue-600/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;