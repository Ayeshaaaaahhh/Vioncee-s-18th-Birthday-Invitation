import { motion } from "motion/react";
import { useState } from "react";

const traditions = [
  {
    icon: "🕯️",
    title: "18 Candles",
    participants: [
      "1. Precy Ann Paradela",
      "2. Ranvy Marry Yecyec",
      "3. Fiona Casandra Bacarro",
      "4. Tenya Luzano",
      "5. Quincy Silvero",
      "6. Gino Gil Batallones",
      "7. Raven Lim Atig",
      "8. Shania Magallon",
      "9. Qyen Mykhyla Yanez",
      "10. Kylle Marie Jalop",
      "11. Rapunzel Cuizon",
      "12. Shaheena Khan",
      "13. Arianna Salvo",
      "14. Rachel Jean Lindongan",
      "15. Charesh Angeline Rapirap",
      "16. Easter Gwyneth Bautro",
      "17. Felicity Salazar",
      "18. Raine Sarsuelo",
    ],
  },
  {
    icon: "🌹",
    title: "18 Roses",
    participants: [
      "1. Rasheed Jullian Ladra",
      "2. Raven Lim Atig",
      "3. Arvin Akut",
      "4. Ashley Letchejan",
      "5. Gino Gil Batallones",
      "6. Fred Aiman Navarez",
      "7. Neil Pagtalunan",
      "8. Frank Labis",
      "9. Eldrich Kenzie Cordero",
      "10. Kristan Benedict Yasay",
      "11. Gregory Blaire Morales",
      "12. Patrick Roel Trupa",
      "13. Herjone Dagpin",
      "14. Bryll Magdayo",
      "15. Kairos Malingin",
      "16. Rendey Voughn Beniga",
      "17. Josh Dale Beniga",
      "18. Dely Beniga",
    ],
  },
  {
    icon: "🎁",
    title: "18 Treasures",
    participants: [
      "1. Shekinah Lindongan",
      "2. Khyszha Frelyn Benting",
      "3. Alyana Rotchel Bandiala",
      "4. Angela Rapirap",
      "5. Ingrid Faith Galao",
      "6. Leanne Ferrer",
      "7. Novie Eslao",
      "8. Shatea Racoma",
      "9. Louise Merencillo",
      "10. Aira Pagtalunan",
      "11. Shamicha Racoma",
      "12. Michael Ruelo",
      "13. Carllouie Namoc",
      "14. Ceazar Ian Bajuyo",
      "15. Pauline Mae Salcedo",
      "16. Jyra Maurisze Bacasmot",
      "17. Keisha Jane Abrogueña",
      "18. ____",
    ],
  },
  {
    icon: "🥂",
    title: "18 Shots",
    participants: [
      "1. Josh Dale Beniga",
      "2. Rendey Voughn Beniga",
      "3. Ranvy Marry Yecyec",
      "4. Ingrid Faith Galao",
      "5. Patrick Roel Trupa",
      "6. Bryll Magdayol",
      "7. Kairos Malingin",
      "8. Angela Rapirap",
      "9. Charesh Angeline Rapirap",
      "10. Fiona Casandra Bacarro",
      "11. Quincy Silvero",
      "12. Shaheena Khan",
      "13. Precy Ann Paradela",
      "14. Danielle Gonzales",
      "15. Arianna Salvo",
      "16. Alyana Rotchel Bandiala",
      "17. Easter Gwyneth Bautro",
      "18. Frank Labis",
    ],
  },
  {
    icon: "💵",
    title: "18 Bills",
    participants: [
      "1. Arlene Yanez",
      "2. Lionel Pagtalunan",
      "3. Lucy Jalan",
      "4. Haydee Lacre",
      "5. Romeo Sese Jr.",
      "6. Bodet Jariolne",
      "7. Mylene Yanez",
      "8. Joselita Pagtalunan",
      "9. Dely Beniga",
      "10. Josh Dale Beniga",
      "11. ___",
      "12. ___",
      "13. ___",
      "14. ___",
      "15. ___",
      "16. ___",
      "17. ___",
      "18. ___",
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
