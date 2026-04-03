import React, { useState } from "react";
import { motion } from "framer-motion";
import customPhoto from "../../assets/image-1.png";
import customPhoto2 from "../../assets/image-2.jpg";
import customPhoto3 from "../../assets/image-3.jpg";
import customPhoto4 from "../../assets/image-4.png";
import customPhoto5 from "../../assets/image-5.jpg";
import customPhoto6 from "../../assets/image-6.jpg";
const galleryImages = [
  {
    url: customPhoto,
    alt: 'Elegant garden style 1',
    size: 'large',
  },
  {
    url: customPhoto2,
    alt: 'Elegant garden style 2',
    size: 'medium',
  },
  {
    url: customPhoto3,
    alt: 'Debutante celebration',
    size: 'medium',
  },
  {
    url: customPhoto4,
    alt: 'Botanical aesthetic',
    size: 'medium',
  },
  {
    url: customPhoto5,
    alt: 'Elegant portrait',
    size: 'medium',
  },
  {
    url: customPhoto6,
    alt: 'Luxury event moment',
    size: 'medium',
  },
];

export function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-[#F7F4D5] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-0 w-40 h-40 opacity-10">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="8" fill="#0A3323" />
          {Array.from({ length: 12 }).map((_, i) => (
            <ellipse
              key={i}
              cx="50"
              cy="50"
              rx="25"
              ry="10"
              fill="#0A3323"
              opacity="0.3"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <h3 
            className="text-[#0A3323] text-4xl mb-3"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}
          >
            The Debutant
          </h3>
          <div className="w-24 h-px bg-[#839958]/40 mx-auto" />
        </div>

        {/* Elegant Photo Gallery with Responsive Layout */}
        <div className="space-y-4">
          {/* Mobile: Main featured image, Desktop: Asymmetric first row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* First image - spans 2 columns on mobile, 3 on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative col-span-2 md:col-span-3"
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(10,51,35,0.15)] cursor-pointer group">
                <motion.img 
                  src={galleryImages[0].url}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === 0 ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A3323]/5 pointer-events-none" />
                <motion.div 
                  className="absolute inset-0 bg-[#0A3323]/0 group-hover:bg-[#0A3323]/10 transition-colors duration-300"
                  animate={{
                    opacity: hoveredIndex === 0 ? 1 : 0,
                  }}
                />
              </div>
              {hoveredIndex === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-3xl shadow-[0_30px_80px_rgba(10,51,35,0.25)] pointer-events-none"
                />
              )}
            </motion.div>

            {/* Second image - smaller, desktop only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative hidden md:block md:col-span-2"
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(10,51,35,0.12)] cursor-pointer group">
                <motion.img 
                  src={galleryImages[1].url}
                  alt={galleryImages[1].alt}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === 1 ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A3323]/5 pointer-events-none" />
                <motion.div 
                  className="absolute inset-0 bg-[#0A3323]/0 group-hover:bg-[#0A3323]/10 transition-colors duration-300"
                  animate={{
                    opacity: hoveredIndex === 1 ? 1 : 0,
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredIndex === 1 ? 1 : 0,
                    scale: hoveredIndex === 1 ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#0A3323" 
                      strokeWidth="2" 
                      className="w-5 h-5"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.div>
              </div>
              {hoveredIndex === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl shadow-[0_20px_60px_rgba(10,51,35,0.2)] pointer-events-none"
                />
              )}
            </motion.div>
          </div>

          {/* Second row - Asymmetric layout */}
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
            {/* Third image - medium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative md:col-span-2"
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(10,51,35,0.12)] cursor-pointer group">
                <motion.img 
                  src={galleryImages[2].url}
                  alt={galleryImages[2].alt}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === 2 ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A3323]/5 pointer-events-none" />
                <motion.div 
                  className="absolute inset-0 bg-[#0A3323]/0 group-hover:bg-[#0A3323]/10 transition-colors duration-300"
                  animate={{
                    opacity: hoveredIndex === 2 ? 1 : 0,
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredIndex === 2 ? 1 : 0,
                    scale: hoveredIndex === 2 ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#0A3323" 
                      strokeWidth="2" 
                      className="w-5 h-5"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.div>
              </div>
              {hoveredIndex === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl shadow-[0_20px_60px_rgba(10,51,35,0.2)] pointer-events-none"
                />
              )}
            </motion.div>

            {/* Fourth image - larger */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="relative md:col-span-3"
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-[260px] md:h-[300px] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(10,51,35,0.12)] cursor-pointer group">
                <motion.img 
                  src={galleryImages[3].url}
                  alt={galleryImages[3].alt}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === 3 ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A3323]/5 pointer-events-none" />
                <motion.div 
                  className="absolute inset-0 bg-[#0A3323]/0 group-hover:bg-[#0A3323]/10 transition-colors duration-300"
                  animate={{
                    opacity: hoveredIndex === 3 ? 1 : 0,
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredIndex === 3 ? 1 : 0,
                    scale: hoveredIndex === 3 ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#0A3323" 
                      strokeWidth="2" 
                      className="w-5 h-5"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.div>
              </div>
              {hoveredIndex === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-3xl shadow-[0_20px_60px_rgba(10,51,35,0.2)] pointer-events-none"
                />
              )}
            </motion.div>

            {/* Fifth image - small */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative md:col-span-2 hidden md:block"
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(10,51,35,0.12)] cursor-pointer group">
                <motion.img 
                  src={galleryImages[4].url}
                  alt={galleryImages[4].alt}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === 4 ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A3323]/5 pointer-events-none" />
                <motion.div 
                  className="absolute inset-0 bg-[#0A3323]/0 group-hover:bg-[#0A3323]/10 transition-colors duration-300"
                  animate={{
                    opacity: hoveredIndex === 4 ? 1 : 0,
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredIndex === 4 ? 1 : 0,
                    scale: hoveredIndex === 4 ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#0A3323" 
                      strokeWidth="2" 
                      className="w-5 h-5"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.div>
              </div>
              {hoveredIndex === 4 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl shadow-[0_20px_60px_rgba(10,51,35,0.2)] pointer-events-none"
                />
              )}
            </motion.div>
          </div>

          {/* Third row - mobile only images */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {galleryImages.slice(1, 3).map((image, index) => (
              <motion.div
                key={index + 1}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index + 1)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(10,51,35,0.12)] cursor-pointer group">
                  <motion.img 
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index + 1 ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A3323]/5 pointer-events-none" />
                  <motion.div 
                    className="absolute inset-0 bg-[#0A3323]/0 group-hover:bg-[#0A3323]/10 transition-colors duration-300"
                    animate={{
                      opacity: hoveredIndex === index + 1 ? 1 : 0,
                    }}
                  />
                </div>
                {hoveredIndex === index + 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-2xl shadow-[0_20px_60px_rgba(10,51,35,0.2)] pointer-events-none"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Fourth row - Last two images */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="relative md:col-span-3"
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-[240px] rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(10,51,35,0.12)] cursor-pointer group">
                <motion.img 
                  src={galleryImages[4].url}
                  alt={galleryImages[4].alt}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === 4 ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A3323]/5 pointer-events-none" />
                <motion.div 
                  className="absolute inset-0 bg-[#0A3323]/0 group-hover:bg-[#0A3323]/10 transition-colors duration-300"
                  animate={{
                    opacity: hoveredIndex === 4 ? 1 : 0,
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredIndex === 4 ? 1 : 0,
                    scale: hoveredIndex === 4 ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#0A3323" 
                      strokeWidth="2" 
                      className="w-5 h-5"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.div>
              </div>
              {hoveredIndex === 4 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl shadow-[0_20px_60px_rgba(10,51,35,0.2)] pointer-events-none"
                />
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative md:col-span-2"
              onMouseEnter={() => setHoveredIndex(5)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-[240px] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(10,51,35,0.12)] cursor-pointer group">
                <motion.img 
                  src={galleryImages[5].url}
                  alt={galleryImages[5].alt}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === 5 ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A3323]/5 pointer-events-none" />
                <motion.div 
                  className="absolute inset-0 bg-[#0A3323]/0 group-hover:bg-[#0A3323]/10 transition-colors duration-300"
                  animate={{
                    opacity: hoveredIndex === 5 ? 1 : 0,
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredIndex === 5 ? 1 : 0,
                    scale: hoveredIndex === 5 ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#0A3323" 
                      strokeWidth="2" 
                      className="w-5 h-5"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.div>
              </div>
              {hoveredIndex === 5 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-3xl shadow-[0_20px_60px_rgba(10,51,35,0.2)] pointer-events-none"
                />
              )}
            </motion.div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center text-[#105666]/70 mt-8 text-sm"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
        >
          A glimpse into her story so far.
        </motion.p>
      </motion.div>
    </section>
  );
}