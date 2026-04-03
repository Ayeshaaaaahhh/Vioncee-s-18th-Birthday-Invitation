import { motion } from "motion/react";
import { useState } from "react";

const traditions = [
  {
    icon: "🕯️",
    title: "18 Candles",
    participants: [
      "1. Grandmother",
      "2. Aunt Maria",
      "3. Cousin Sarah",
      "4. Best Friend Emma",
      "5. Childhood Friend Lily",
      "6. School Friend Mia",
      "7. Cousin Rachel",
      "8. Neighbor Claire",
      "9. Dance Instructor",
      "10. Aunt Sophie",
      "11. Sister's Friend",
      "12. Mentor Ms. Johnson",
      "13. Godmother",
      "14. Friend from Church",
      "15. Teammate Anna",
      "16. Friend Olivia",
      "17. Cousin Jessica",
      "18. Mother",
    ],
  },
  {
    icon: "🌹",
    title: "18 Roses",
    participants: [
      "1. Grandfather",
      "2. Uncle John",
      "3. Cousin Michael",
      "4. Best Friend Alex",
      "5. Childhood Friend Ryan",
      "6. School Friend Daniel",
      "7. Cousin David",
      "8. Neighbor James",
      "9. Dance Partner",
      "10. Uncle Robert",
      "11. Brother's Friend",
      "12. Family Friend Tom",
      "13. Godfather",
      "14. Friend from Church",
      "15. Teammate Chris",
      "16. Friend Matthew",
      "17. Cousin Andrew",
      "18. Father",
    ],
  },
  {
    icon: "🎁",
    title: "18 Treasures",
    participants: [
      "1. Grandmother",
      "2. Aunt Maria",
      "3. Best Friend Emma",
      "4. Cousin Sarah",
      "5. School Friend Mia",
      "6. Childhood Friend Lily",
      "7. Mentor Ms. Johnson",
      "8. Dance Instructor",
      "9. Godmother",
      "10. Sister",
      "11. Cousin Rachel",
      "12. Friend Olivia",
      "13. Teammate Anna",
      "14. Neighbor Claire",
      "15. Friend from Church",
      "16. Aunt Sophie",
      "17. Cousin Jessica",
      "18. Mother",
    ],
  },
  {
    icon: "🥂",
    title: "18 Shots",
    participants: [
      "1. Best Friend Emma",
      "2. Childhood Friend Lily",
      "3. School Friend Mia",
      "4. Best Friend Alex",
      "5. Cousin Sarah",
      "6. Cousin Michael",
      "7. Friend Olivia",
      "8. Friend Matthew",
      "9. Dance Partner",
      "10. Teammate Anna",
      "11. Teammate Chris",
      "12. Sister",
      "13. Brother",
      "14. Cousin Rachel",
      "15. Cousin David",
      "16. Friend from Church",
      "17. Neighbor Claire",
      "18. Neighbor James",
    ],
  },
  {
    icon: "💵",
    title: "18 Bills",
    participants: [
      "1. Grandmother",
      "2. Grandfather",
      "3. Aunt Maria",
      "4. Uncle John",
      "5. Aunt Sophie",
      "6. Uncle Robert",
      "7. Godmother",
      "8. Godfather",
      "9. Cousin Sarah",
      "10. Cousin Michael",
      "11. Cousin Rachel",
      "12. Cousin David",
      "13. Family Friend",
      "14. Neighbor Claire",
      "15. Neighbor James",
      "16. Sister",
      "17. Brother",
      "18. Parents",
    ],
  },
];

export function TraditionsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#F7F4D5] to-[#F7F4D5]/80 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-10 left-0 w-32 h-32 opacity-10">
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
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#0A3323] text-4xl mb-3"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}
          >
            18 Traditions
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-24 h-px bg-[#839958]/40 mx-auto"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-[#105666]/70 mt-4 text-sm max-w-2xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
          >
            Special moments shared with the most important people in my life
          </motion.p>
        </div>

        {/* Traditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {traditions.map((tradition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <motion.div
                animate={{
                  y: hoveredIndex === index ? -4 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-[0_8px_30px_rgba(10,51,35,0.08)] border border-[#839958]/10 h-full"
              >
                {/* Icon and Title */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{tradition.icon}</div>
                  <h4
                    className="text-[#0A3323] text-lg"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}
                  >
                    {tradition.title}
                  </h4>
                  <div className="w-12 h-px bg-[#839958]/30 mx-auto mt-2" />
                </div>

                {/* Participants List */}
                <div className="space-y-2">
                  {tradition.participants.map((participant, pIndex) => (
                    <motion.div
                      key={pIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + pIndex * 0.02, duration: 0.4 }}
                      className="text-[#105666]/60 text-xs leading-relaxed"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
                    >
                      {participant}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Hover Shadow Effect */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl shadow-[0_20px_60px_rgba(10,51,35,0.15)] pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
