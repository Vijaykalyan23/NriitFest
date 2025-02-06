import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Music, Star,Guitar } from 'lucide-react';

const Artists = () => {
  const artists = [
    {
      name: 'Orientation program',
      role: 'A Grand Welcome: Inspiring the Future at NRIIT Orientation Program',
      image: 'https://i.ibb.co/CsWcSqZ8/nriit-vijayawada-official-20250206-0011-1-1.jpg',
      instagram: '#'
    },
    {
      name: 'Bharatanatyam    ',
      role: 'Graceful Rhythms of Bharatanatyam',
      image: 'https://i.ibb.co/mCcZD5Wk/nriit-vijayawada-official-20250206-0003-1.jpg',
      instagram: '#'
    },
    {
      name: 'Music Band',
      icon: Guitar,
      role: 'Let the Music Play',
      image: 'https://i.ibb.co/tTrS9CHn/IMG-20231127-120708.jpg',
    },
    {
      name: 'Flash mob',
      role: 'The Pulse of Unity',
      image: 'https://i.ibb.co/Xk8TD8fH/Screenshot-20250206-141012-2.jpg',
      instagram: '#'
    }
  ];

  return (
    <section id="highlights" className="relative py-20 overflow-hidden">
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

      <div className="relative max-w-6xl mx-auto px-4">
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
            <Music className="absolute top-0 left-0 w-6 h-6 text-purple-400" />
            <Star className="absolute top-0 right-0 w-6 h-6 text-blue-400" />
            <Music className="absolute bottom-0 left-0 w-6 h-6 text-pink-400" />
            <Star className="absolute bottom-0 right-0 w-6 h-6 text-purple-400" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold relative">
            <span className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 opacity-50 blur-xl animate-pulse" />
            <span className="relative bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Featured Highlights
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl group-hover:opacity-100 transition-opacity opacity-0" />
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                      {artist.name}
                    </h3>
                    <p className="text-gray-300">{artist.role}</p>
                    <motion.a
                      href={artist.instagram}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center mt-2 text-purple-400 hover:text-purple-300"
                    >
                     
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;