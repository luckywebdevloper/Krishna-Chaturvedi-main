"use client"

import React, { FormEvent, useState } from 'react';
import { FaPlay, FaInstagram, FaTwitter, FaFacebook, FaSpotify } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MusicianHeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [email, setEmail] = useState('');

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    // Logic to play/pause music
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to handle newsletter signup
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <div className="bg-gradient-to-r from-purple-700 to-indigo-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Krishna Chaturvedi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl mb-6"
            >
              Award-winning indie rock artist
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex space-x-4 mb-8"
            >
              <button
                onClick={handlePlay}
                className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold flex items-center transition duration-300 hover:bg-purple-200"
              >
                <FaPlay className="mr-2" />
                {isPlaying ? 'Pause' : 'Play'} Sample
              </button>
              <a
                href="#tour-dates"
                className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:bg-white hover:text-purple-700"
              >
                View Tour Dates
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex space-x-4"
            >
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-400 transition duration-300">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition duration-300">
                <FaTwitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600 transition duration-300">
                <FaFacebook />
              </a>
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-400 transition duration-300">
                <FaSpotify />
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <img
              src="https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Jane Doe performing on stage"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
     
      </div>
    </div>
  );
};

export default MusicianHeroSection;