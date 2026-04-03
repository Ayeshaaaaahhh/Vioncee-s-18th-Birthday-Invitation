import { motion } from "motion/react";

export function MessageSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0A3323]/70 to-[#105666]/60 relative overflow-hidden">
      {/* Decorative floral corners */}
      <div className="absolute top-8 left-8 w-24 h-24 opacity-20">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="20" cy="20" r="5" fill="#F7F4D5" />
          <path d="M 20,20 Q 10,10 0,20 Q 10,30 20,20 Z" fill="#D3968C" />
          <path d="M 20,20 Q 30,10 20,0 Q 10,10 20,20 Z" fill="#D3968C" />
          <ellipse cx="20" cy="0" rx="8" ry="15" fill="#839958" opacity="0.6" />
          <ellipse cx="0" cy="20" rx="15" ry="8" fill="#839958" opacity="0.6" />
        </svg>
      </div>

      <div className="absolute bottom-8 right-8 w-24 h-24 opacity-20 rotate-180">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="20" cy="20" r="5" fill="#F7F4D5" />
          <path d="M 20,20 Q 10,10 0,20 Q 10,30 20,20 Z" fill="#D3968C" />
          <path d="M 20,20 Q 30,10 20,0 Q 10,10 20,20 Z" fill="#D3968C" />
          <ellipse cx="20" cy="0" rx="8" ry="15" fill="#839958" opacity="0.6" />
          <ellipse cx="0" cy="20" rx="15" ry="8" fill="#839958" opacity="0.6" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto relative z-10"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-[#F7F4D5]/20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="mb-6">
              <svg viewBox="0 0 60 60" fill="none" className="w-16 h-16 mx-auto">
                <circle cx="30" cy="30" r="5" fill="#F7F4D5" />
                {Array.from({ length: 8 }).map((_, i) => (
                  <ellipse
                    key={i}
                    cx="30"
                    cy="30"
                    rx="15"
                    ry="6"
                    fill="#D3968C"
                    opacity="0.5"
                    transform={`rotate(${i * 45} 30 30)`}
                  />
                ))}
              </svg>
            </div>

            <p 
              className="text-[#F7F4D5] text-3xl leading-relaxed"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, fontStyle: 'italic' }}
            >
              Join us as we celebrate this special milestone surrounded with love and laughter
            </p>

            <div className="w-16 h-px bg-[#F7F4D5]/50 mx-auto my-6" />

            <p 
              className="text-[#D3968C] text-lg"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
            >
              Your presence would make this day even more memorable as Vioncee steps into adulthood.
            </p>

            <div className="pt-4">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <p 
                  className="text-[#F7F4D5] text-5xl"
                  style={{ fontFamily: 'Great Vibes, cursive' }}
                >
                  ♡
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
