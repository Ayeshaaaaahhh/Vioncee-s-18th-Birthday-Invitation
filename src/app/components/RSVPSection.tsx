import { motion } from "motion/react";
import { useState } from "react";
import { Check } from "lucide-react";

export function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    attendance: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    const newErrors = {
      name: !formData.name.trim(),
      attendance: !formData.attendance,
    };
    setErrors(newErrors);

    if (newErrors.name || newErrors.attendance) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/mreogvwl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          attendance: formData.attendance,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", attendance: "" });
          setErrors({ name: false, attendance: false });
        }, 3000);
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      alert("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-[#F7F4D5] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-48 h-48 bg-[#839958]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-[#D3968C]/5 rounded-full blur-3xl" />
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
            className="text-[#0A3323] text-4xl mb-3"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}
          >
            RSVP
          </h3>
          <div className="w-24 h-px bg-[#839958]/40 mx-auto mb-4" />
          <p 
            className="text-[#105666] text-sm tracking-wider"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Please let us know if you can join us
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-[0_20px_50px_rgba(10,51,35,0.15)] border border-[#839958]/25">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
              className="text-center py-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-[#839958] rounded-full mb-6 shadow-lg"
              >
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </motion.div>
              <h4
                className="text-[#0A3323] text-3xl mb-3"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}
              >
                Thank You!
              </h4>
              <p
                className="text-[#105666]"
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}
              >
                Your RSVP has been received
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#0A3323] mb-2 text-sm tracking-wider"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                >
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: false });
                  }}
                  className={`
                    w-full px-4 py-3 rounded-2xl border-2 bg-white/50 text-[#0A3323]
                    focus:outline-none focus:bg-white transition-all duration-300
                    ${errors.name
                      ? 'border-[#D3968C] focus:border-[#D3968C] focus:ring-2 focus:ring-[#D3968C]/20'
                      : 'border-[#839958]/30 focus:border-[#839958] focus:ring-4 focus:ring-[#839958]/10'
                    }
                  `}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[#D3968C] text-xs mt-1.5 ml-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Please enter your full name
                  </motion.p>
                )}
              </div>

              <div>
                <label
                  className="block text-[#0A3323] mb-3 text-sm tracking-wider"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                >
                  WILL YOU ATTEND?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['Yes', 'No'].map((option) => (
                    <label
                      key={option}
                      className={`
                        flex items-center justify-center py-3.5 px-4 rounded-2xl border-2 cursor-pointer
                        transition-all duration-300 ease-out
                        ${formData.attendance === option
                          ? 'bg-[#839958] border-[#839958] text-white shadow-md scale-[1.02]'
                          : errors.attendance
                          ? 'bg-white/50 border-[#D3968C] text-[#0A3323] hover:border-[#D3968C]/80'
                          : 'bg-white/50 border-[#839958]/30 text-[#0A3323] hover:border-[#839958]/70 hover:bg-white/70'
                        }
                      `}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value={option}
                        checked={formData.attendance === option}
                        onChange={(e) => {
                          setFormData({ ...formData, attendance: e.target.value });
                          if (errors.attendance) setErrors({ ...errors, attendance: false });
                        }}
                        className="sr-only"
                      />
                      <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.attendance && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[#D3968C] text-xs mt-1.5 ml-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Please select your attendance
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                className={`
                  w-full py-4 rounded-2xl shadow-lg transition-all duration-300
                  ${loading
                    ? 'bg-[#D3968C]/50 text-white/70 cursor-not-allowed'
                    : 'bg-[#D3968C] text-white hover:bg-[#c88679] hover:shadow-xl'
                  }
                `}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, letterSpacing: '0.1em' }}
              >
                {loading ? 'SENDING...' : 'RSVP NOW'}
              </motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
