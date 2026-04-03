import React from "react";
import { motion } from "framer-motion";
import profileImage from '../../assets/image-0.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1578406464251-bb2437640bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3R1cyUyMHBvbmQlMjBnYXJkZW4lMjBuYXR1cmUlMjBzb2Z0JTIwZHJlYW15fGVufDF8fHx8MTc3Mzc1NDAzMXww&ixlib=rb-4.1.0&q=80&w=1080')`,
          filter: 'blur(8px)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A3323]/70 via-[#0A3323]/50 to-[#0A3323]/70" />
      
      {/* Floating floral decorations */}
      <motion.div
        className="absolute top-10 left-8 w-16 h-16 opacity-30"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <circle cx="50" cy="50" r="8" fill="#F7F4D5" />
          <ellipse cx="50" cy="35" rx="8" ry="15" fill="#839958" opacity="0.6" />
          <ellipse cx="50" cy="65" rx="8" ry="15" fill="#839958" opacity="0.6" />
          <ellipse cx="35" cy="50" rx="15" ry="8" fill="#839958" opacity="0.6" />
          <ellipse cx="65" cy="50" rx="15" ry="8" fill="#839958" opacity="0.6" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-8 w-20 h-20 opacity-20"
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <circle cx="50" cy="50" r="10" fill="#D3968C" />
          <ellipse cx="50" cy="30" rx="10" ry="18" fill="#105666" opacity="0.5" />
          <ellipse cx="50" cy="70" rx="10" ry="18" fill="#105666" opacity="0.5" />
          <ellipse cx="30" cy="50" rx="18" ry="10" fill="#105666" opacity="0.5" />
          <ellipse cx="70" cy="50" rx="18" ry="10" fill="#105666" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-md w-full"
      >
        <div className="bg-[#F7F4D5]/95 backdrop-blur-sm rounded-[2rem] p-8 shadow-2xl border-4 border-[#839958]/30">
          {/* Decorative corner elements */}
          <div className="absolute top-6 left-6 w-12 h-12">
            <svg viewBox="0 0 50 50" fill="none">
              <path d="M 0,25 Q 0,0 25,0" stroke="#839958" strokeWidth="1.5" fill="none" />
              <circle cx="25" cy="0" r="3" fill="#D3968C" />
              <circle cx="0" cy="25" r="3" fill="#D3968C" />
            </svg>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 rotate-90">
            <svg viewBox="0 0 50 50" fill="none">
              <path d="M 0,25 Q 0,0 25,0" stroke="#839958" strokeWidth="1.5" fill="none" />
              <circle cx="25" cy="0" r="3" fill="#D3968C" />
              <circle cx="0" cy="25" r="3" fill="#D3968C" />
            </svg>
          </div>
          <div className="absolute bottom-6 left-6 w-12 h-12 -rotate-90">
            <svg viewBox="0 0 50 50" fill="none">
              <path d="M 0,25 Q 0,0 25,0" stroke="#839958" strokeWidth="1.5" fill="none" />
              <circle cx="25" cy="0" r="3" fill="#D3968C" />
              <circle cx="0" cy="25" r="3" fill="#D3968C" />
            </svg>
          </div>
          <div className="absolute bottom-6 right-6 w-12 h-12 rotate-180">
            <svg viewBox="0 0 50 50" fill="none">
              <path d="M 0,25 Q 0,0 25,0" stroke="#839958" strokeWidth="1.5" fill="none" />
              <circle cx="25" cy="0" r="3" fill="#D3968C" />
              <circle cx="0" cy="25" r="3" fill="#D3968C" />
            </svg>
          </div>

          <div className="text-center space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[#105666] tracking-[0.3em] uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', fontWeight: 500 }}
            >
              You're Invited
            </motion.p>

            {/* Photo frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-[#839958]/40 shadow-lg"
            >
              <img
                src={profileImage}
                alt="Vioncee"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <h1 
                className="text-[#0A3323] text-6xl mb-2"
                style={{ fontFamily: 'Great Vibes, cursive' }}
              >
                Vioncee's
              </h1>
              <h2 
                className="text-[#0A3323] text-3xl mb-1"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}
              >
                18th Birthday
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="pt-4"
            >
              <div className="w-24 h-px bg-[#839958]/40 mx-auto mb-4" />
              <p 
                className="text-[#105666] text-2xl"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
              >
                April 9, 2026
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
