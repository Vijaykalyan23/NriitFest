import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Ticket, Check, Star, Music } from 'lucide-react';
import html2canvas from 'html2canvas';
import { collection, addDoc } from "firebase/firestore";
import maleAvatar from "../assests/male-avatar.png";
import femaleAvatar from "../assests/female-avatar.png";
import db from '../firebase';
const Tickets = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    year: '',
    gender: '', // Added gender field
    agree: false,
  });
  const [userCardData, setUserCardData] = useState(null); // Stores user card data
  const [isUserCardVisible, setIsUserCardVisible] = useState(false); // Controls user card visibility
  const [isLoading, setIsLoading] = useState(false);

  // Ref for the user card element
  const userCardRef = useRef(null);

  const tickets = [
    {
      name: 'Day Pass',
      price: '₹299',
      features: [
        'Access to all events for one day',
        'Food court access',
        'Official merchandise',
        'Entry to regular shows',
      ],
    },
  ];

  const handleRegisterClick = () => {
    setIsFormVisible(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    if (!formData.name || !formData.college || !formData.year || !formData.gender || !formData.agree) {
      alert('Please fill all the fields and agree to the terms.');
      return;
    }

    try {
      // Add a new document with a generated id to the "users" collection
      const docRef = await addDoc(collection(db, "users"), {
        name: formData.name,
        college: formData.college,
        year: formData.year,
        gender: formData.gender,
        agree: formData.agree,
        timestamp: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);

      // Set user card data and show the card
      setUserCardData(formData);
      setIsUserCardVisible(true);
      setIsFormVisible(false); // Hide the form
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleDownloadCard = () => {
    if (userCardRef.current) {
      setIsLoading(true); // Start loading

      // Hide the "Download Card" button before capturing
      const downloadButton = userCardRef.current.querySelector('button');
      if (downloadButton) {
        downloadButton.style.display = 'none'; // Hide the button
      }

      // Ensure the card is fully rendered before capturing
      setTimeout(() => {
        html2canvas(userCardRef.current, {
          scale: 2, // Increase scale for better quality
          useCORS: true, // Allow cross-origin images
          logging: true, // Enable logging for debugging
          allowTaint: true, // Allow tainted images
          backgroundColor: null, // Ensure background is transparent
        }).then((canvas) => {
          const link = document.createElement('a');
          link.download = `${userCardData.name}-user-card.png`; // Use the user's name in the filename
          link.href = canvas.toDataURL('image/png', 1.0); // Full quality PNG
          link.click();

          // Show the "Download Card" button again after capturing
          if (downloadButton) {
            downloadButton.style.display = 'block'; // Show the button
          }

          setIsLoading(false); // Stop loading
        });
      }, 100); // Small delay to ensure rendering
    }
  };

  return (
    <section id="tickets" className="relative py-20 overflow-hidden">
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
            <Star className="absolute top-0 left-0 w-6 h-6 text-purple-400" />
            <Music className="absolute top-0 right-0 w-6 h-6 text-blue-400" />
            <Star className="absolute bottom-0 left-0 w-6 h-6 text-pink-400" />
            <Music className="absolute bottom-0 right-0 w-6 h-6 text-purple-400" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold relative">
            <span className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 opacity-50 blur-xl animate-pulse" />
            <span className="relative bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Get Your Tickets
            </span>
          </h2>
        </motion.div>

        <div className=" gap-8 max-w-4xl mx-auto flex justify-center">
          {tickets.map((ticket, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl group-hover:opacity-100 transition-opacity opacity-0" />
              <div className={`relative rounded-xl p-8 ${ticket.featured
                ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/20'
                : 'bg-white/5 backdrop-blur-sm'
                }`}>
                {ticket.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                    BEST VALUE
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <Ticket className="w-6 h-6 mr-2 text-purple-400" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                    {ticket.name}
                  </h3>
                </div>
                <div className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
                  {ticket.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {ticket.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-start"
                    >
                      <Check className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleRegisterClick}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${ticket.features
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                >
                  Register
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Registration Form */}
        {isFormVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30 rounded-xl p-8 max-w-md w-full"
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                Registration Form
              </h3>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Student Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">College</label>
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Year</label>
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Gender</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={handleInputChange}
                        className="mr-2 bg-white/10 rounded"
                        required
                      />
                      <span className="text-gray-300">Male</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={handleInputChange}
                        className="mr-2 bg-white/10 rounded"
                        required
                      />
                      <span className="text-gray-300">Female</span>
                    </label>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleInputChange}
                      className="mr-2 bg-white/10 rounded"
                      required
                    />
                    <span className="text-gray-300">I agree to pay ₹299 to attend the fest</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Submit
                </button>
              </form>
              <button
                onClick={() => setIsFormVisible(false)}
                className="absolute top-4 right-4 text-gray-300 hover:text-white"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* User Card */}
        {isUserCardVisible && userCardData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30 rounded-xl p-8 max-w-md w-full"
            >
              {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
                  <div className="gradient-spinner"></div>
                </div>
              )}

              <div
                id="user-card"
                ref={userCardRef}
                className="bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30 rounded-xl p-8 text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(0, 0, 0, 1), rgba(59, 130, 246, 0.3))',
                  borderRadius: '1rem',
                  padding: '2rem',
                  color: 'white',
                }}
              >
                {/* Replace gradient text with SVG */}
                <svg width="100%" height="50" className="mb-4">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="24"
                    fontWeight="bold"
                    fill="url(#gradient)"
                  >
                    User Card
                  </text>
                </svg>

                <div className="mt-4">
                  <img
                    src={userCardData.gender === 'Male' ? maleAvatar : femaleAvatar}
                    alt="User Avatar"
                    className="w-24 h-24 mx-auto rounded-full"
                  />
                </div>
                
                <div className="mt-4 space-y-2">
                  <p className="text-gray-300"><strong>Name:</strong> {userCardData.name}</p>
                  <p className="text-gray-300"><strong>College:</strong> {userCardData.college}</p>
                  <p className="text-gray-300"><strong>Year:</strong> {userCardData.year}</p>
                  <p className="text-gray-300"><strong>Gender:</strong> {userCardData.gender}</p>
                </div>
                <button
                  onClick={handleDownloadCard}
                  className="mt-6 w-full py-3 px-6 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Download Card
                </button>
              </div>
              <button
                onClick={() => setIsUserCardVisible(false)}
                className="absolute top-4 right-4 text-gray-300 hover:text-white"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Tickets;