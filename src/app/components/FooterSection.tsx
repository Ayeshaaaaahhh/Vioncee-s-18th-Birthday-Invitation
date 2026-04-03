import { motion } from "motion/react";

export function FooterSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#105666]/60 to-[#0A3323]/80 relative overflow-hidden">
      {/* Decorative floral border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7F4D5]/30 to-transparent" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-8 left-1/4 w-12 h-12 opacity-20">
        <svg viewBox="0 0 50 50" fill="none">
          <circle cx="25" cy="25" r="4" fill="#F7F4D5" />
          <ellipse cx="25" cy="15" rx="6" ry="10" fill="#D3968C" opacity="0.6" />
          <ellipse cx="25" cy="35" rx="6" ry="10" fill="#D3968C" opacity="0.6" />
        </svg>
      </div>

      <div className="absolute top-8 right-1/4 w-12 h-12 opacity-20">
        <svg viewBox="0 0 50 50" fill="none">
          <circle cx="25" cy="25" r="4" fill="#F7F4D5" />
          <ellipse cx="15" cy="25" rx="10" ry="6" fill="#D3968C" opacity="0.6" />
          <ellipse cx="35" cy="25" rx="10" ry="6" fill="#D3968C" opacity="0.6" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto text-center relative z-10"
      >
        {/* Decorative frame */}
        <div className="mb-8">
          <div className="inline-block relative">
            <div className="w-24 h-24 rounded-full border-4 border-[#F7F4D5]/20 flex items-center justify-center">
              <svg viewBox="0 0 60 60" fill="none" className="w-16 h-16">
                <circle cx="30" cy="30" r="4" fill="#F7F4D5" />
                {Array.from({ length: 12 }).map((_, i) => (
                  <ellipse
                    key={i}
                    cx="30"
                    cy="30"
                    rx="12"
                    ry="5"
                    fill="#839958"
                    opacity="0.4"
                    transform={`rotate(${i * 30} 30 30)`}
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-4"
        >
          <p 
            className="text-[#F7F4D5] text-2xl"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, fontStyle: 'italic' }}
          >
            We can't wait to celebrate with you
          </p>

          <div className="w-16 h-px bg-[#F7F4D5]/30 mx-auto my-6" />

          <p 
            className="text-[#D3968C] text-lg"
            style={{ fontFamily: 'Great Vibes, cursive' }}
          >
            With love and gratitude
          </p>

          <p 
            className="text-[#F7F4D5]/60 text-xs tracking-widest pt-8"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            APRIL 9, 2026 • PAGTALUNAN RESIDENCE
          </p>
        </motion.div>

        {/* Bottom decorative border */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <div className="w-12 h-px bg-[#F7F4D5]/20" />
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
            <circle cx="10" cy="10" r="2" fill="#F7F4D5" opacity="0.5" />
          </svg>
          <div className="w-12 h-px bg-[#F7F4D5]/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
