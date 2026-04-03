import { motion } from "motion/react";

const colorPalette = [
  { name: 'Dark Green', color: '#0A3323' },
  { name: 'Moss Green', color: '#839958' },
  { name: 'Beige', color: '#F7F4D5' },
  { name: 'White', color: '#FFFFFF' },
];

export function DressCodeSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#105666]/60 to-[#0A3323]/70 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#F7F4D5] text-4xl mb-3"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}
          >
            Dress Code
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-px bg-[#F7F4D5]/50 mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-[#D3968C] text-xl"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontStyle: 'italic' }}
          >
            Casual Minimalist Attire
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-[#F7F4D5]/20"
        >
          <p 
            className="text-[#F7F4D5]/80 text-center text-sm tracking-wider mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            SUGGESTED COLOR PALETTE
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            {colorPalette.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5, type: "spring" }}
                className="flex flex-col items-center gap-2"
              >
                <div 
                  className="w-16 h-16 rounded-full shadow-lg border-4 border-white/30 hover:scale-110 transition-transform cursor-pointer"
                  style={{ backgroundColor: item.color }}
                  title={item.name}
                />
                <span 
                  className="text-[#F7F4D5]/60 text-xs text-center"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.65rem' }}
                >
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <p 
              className="text-[#F7F4D5]/70 text-sm leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              Wear any style you love — just stick to our color palette and please, no pink! 
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
