import { motion } from "motion/react";
import { MapPin, Clock } from "lucide-react";

export function EventDetailsSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#0A3323]/70 to-[#105666]/60 relative">
      {/* Background botanical pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32">
          <svg viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="5" fill="#F7F4D5" />
            {Array.from({ length: 8 }).map((_, i) => (
              <ellipse
                key={i}
                cx="50"
                cy="50"
                rx="20"
                ry="8"
                fill="#F7F4D5"
                opacity="0.4"
                transform={`rotate(${i * 45} 50 50)`}
              />
            ))}
          </svg>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto"
      >
        <div className="bg-[#839958]/90 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-[#F7F4D5]/20 relative overflow-hidden">
          {/* Decorative leaves */}
          <div className="absolute -top-8 -right-8 w-32 h-32 opacity-20">
            <svg viewBox="0 0 100 100" fill="none">
              <ellipse cx="50" cy="30" rx="20" ry="35" fill="#F7F4D5" />
              <ellipse cx="50" cy="70" rx="20" ry="35" fill="#F7F4D5" />
            </svg>
          </div>

          <div className="relative z-10 space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center"
            >
              <h3 
                className="text-[#F7F4D5] text-4xl mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}
              >
                Join Us
              </h3>
              <div className="w-16 h-px bg-[#F7F4D5]/50 mx-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-start gap-4"
            >
              <div className="bg-[#F7F4D5]/20 rounded-full p-3 mt-1">
                <MapPin className="w-6 h-6 text-[#F7F4D5]" />
              </div>
              <div>
                <p 
                  className="text-[#F7F4D5]/70 text-sm tracking-wider mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  LOCATION
                </p>
                <p 
                  className="text-[#F7F4D5] text-2xl"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
                >
                  Purok 2, Crossing (Pagtalunan Residence)
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-start gap-4"
            >
              <div className="bg-[#F7F4D5]/20 rounded-full p-3 mt-1">
                <Clock className="w-6 h-6 text-[#F7F4D5]" />
              </div>
              <div>
                <p 
                  className="text-[#F7F4D5]/70 text-sm tracking-wider mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  TIME
                </p>
                <p 
                  className="text-[#F7F4D5] text-2xl"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
                >
                  2:00 PM
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
