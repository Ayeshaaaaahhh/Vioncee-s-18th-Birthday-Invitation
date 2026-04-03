import { motion } from "motion/react";
import { useState } from "react";
import { Check } from "lucide-react";

export function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    guests: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    attendance: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const newErrors = {
      name: !formData.name.trim(),
      attendance: !formData.attendance,
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.attendance) return;

    setLoading(true);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          attendance: formData.attendance,
          guests: formData.guests ? Number(formData.guests) : 0,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: "",
            attendance: "",
            guests: "",
            message: "",
          });
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
          <h3 className="text-[#0A3323] text-4xl mb-3"
            style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 600 }}
          >
            RSVP
          </h3>
          <div className="w-24 h-px bg-[#839958]/40 mx-auto mb-4" />
          <p className="text-[#105666] text-sm tracking-wider"
            style={{ fontFamily: "Montserrat, sans-serif" }}
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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#839958] rounded-full mb-6 shadow-lg">
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <h4 className="text-[#0A3323] text-3xl mb-3"
                style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 600 }}
              >
                Thank You!
              </h4>
              <p className="text-[#105666]"
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.875rem" }}
              >
                Your RSVP has been received
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">

              {/* NAME */}
              <div>
                <label className="block text-[#0A3323] mb-2 text-sm tracking-wider"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
                >
                  YOUR NAME
                </label>

                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: false });
                  }}
                  className="w-full px-4 py-3 rounded-2xl border-2 bg-white/50 text-[#0A3323] border-[#839958]/30"
                  placeholder="Enter your full name"
                />

                {errors.name && (
                  <p className="text-[#D3968C] text-xs mt-1">Please enter your name</p>
                )}
              </div>

              {/* ATTENDANCE */}
              <div>
                <label className="block text-[#0A3323] mb-3 text-sm tracking-wider">
                  WILL YOU ATTEND?
                </label>

                <div className="grid grid-cols-2 gap-4">
                  {["Yes", "No"].map((option) => (
                    <label
                      key={option}
                      className={`flex items-center justify-center py-3.5 px-4 rounded-2xl border-2 cursor-pointer ${
                        formData.attendance === option
                          ? "bg-[#839958] border-[#839958] text-white"
                          : "bg-white/50 border-[#839958]/30 text-[#0A3323]"
                      }`}
                    >
                      <input
                        type="radio"
                        value={option}
                        checked={formData.attendance === option}
                        onChange={(e) => {
                          setFormData({ ...formData, attendance: e.target.value });
                          if (errors.attendance)
                            setErrors({ ...errors, attendance: false });
                        }}
                        className="sr-only"
                      />
                      {option}
                    </label>
                  ))}
                </div>

                {errors.attendance && (
                  <p className="text-[#D3968C] text-xs mt-1">
                    Please select attendance
                  </p>
                )}
              </div>

              {/* GUESTS */}
              <div>
                <label className="block text-[#0A3323] mb-2 text-sm tracking-wider">
                  NUMBER OF GUESTS
                </label>

                <input
                  type="number"
                  min="0"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border-2 bg-white/50 border-[#839958]/30"
                  placeholder="0"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-[#0A3323] mb-2 text-sm tracking-wider">
                  MESSAGE
                </label>

                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border-2 bg-white/50 border-[#839958]/30"
                  placeholder="Write a message..."
                  rows={4}
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-2xl text-white transition-all ${
                  loading
                    ? "bg-[#D3968C]/50"
                    : "bg-[#D3968C] hover:bg-[#c88679]"
                }`}
              >
                {loading ? "SENDING..." : "RSVP NOW"}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}