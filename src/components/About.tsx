import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, MapPin, Trophy, Music2, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '5000+', label: 'Attendees' },
    { icon: Calendar, value: '2 Days', label: 'Of Events' },
    { icon: MapPin, value: '5', label: 'Venues' },
    { icon: Trophy, value: '20+', label: 'Competitions' }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-black" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative w-20 h-20"
            >
              <Music2 className="absolute top-0 left-0 w-6 h-6 text-purple-400/30" />
              <Star className="absolute top-0 right-0 w-6 h-6 text-blue-400/30" />
              <Music2 className="absolute bottom-0 left-0 w-6 h-6 text-pink-400/30" />
              <Star className="absolute bottom-0 right-0 w-6 h-6 text-purple-400/30" />
            </motion.div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            About The Festival
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            College Fest is the annual cultural extravaganza that brings together talent, creativity, and entertainment. 
            Join us for two days of unforgettable performances, competitions, and celebrations.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
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
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;