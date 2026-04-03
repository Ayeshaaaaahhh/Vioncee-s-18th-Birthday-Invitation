import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-04-09T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-[#F7F4D5] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#839958]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#D3968C]/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto relative z-10"
      >
        <div className="text-center mb-10">
          <h3 
            className="text-[#0A3323] text-3xl mb-2"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}
          >
            Counting Down to the Celebration
          </h3>
          <div className="w-24 h-px bg-[#839958]/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-[#839958]/20"
            >
              <div 
                className="text-[#0A3323] text-4xl mb-1 tabular-nums"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700 }}
              >
                {String(item.value).padStart(2, '0')}
              </div>
              <div 
                className="text-[#105666] text-xs tracking-wider uppercase"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
