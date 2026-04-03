import { motion } from "motion/react";
import { useState } from "react";
import { Check } from "lucide-react";

export function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    attendance: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !formData.name.trim(),
      attendance: !formData.attendance,
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.attendance) return;

    setLoading(true);

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accessKey: "sf_56c727498f41e88a6e2d4784", 
          name: formData.name,
          attendance: formData.attendance,
          subject: "New RSVP Submission",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: "",
            attendance: "",
          });
          setErrors({ name: false, attendance: false });
        }, 3000);
      } else {
        alert(data.message || "Something went wrong. Try again.");
      }
    } catch (error) {
      alert("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-[#F7F4D5] relative overflow-hidden">
      <motion.div className="max-w-md mx-auto relative z-10">

        <div className="text-center mb-10">
          <h3
            className="text-[#0A3323] text-4xl mb-3"
            style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 600 }}
          >
            Confirm Your Attendance Here!
          </h3>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8">

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-[#839958] rounded-full mx-auto mb-6 flex items-center justify-center">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl text-[#0A3323]">Thank You!</h4>
              <p className="text-[#105666] text-sm mt-2">
                Your RSVP has been received
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <div>
                <label className="text-sm text-[#0A3323]">NAME</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl border border-[#839958]/30"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1">Required</p>
                )}
              </div>

              {/* ATTENDANCE */}
              <div>
                <label className="text-sm text-[#0A3323]">
                  WILL YOU ATTEND?
                </label>

                <div className="grid grid-cols-2 gap-4 mt-2">
                  {["Yes", "No"].map((option) => (
                    <label
                      key={option}
                      className={`text-center py-3 rounded-2xl border cursor-pointer ${
                        formData.attendance === option
                          ? "bg-[#839958] text-white border-[#839958]"
                          : "bg-white/50 border-[#839958]/30"
                      }`}
                    >
                      <input
                        type="radio"
                        value={option}
                        checked={formData.attendance === option}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            attendance: e.target.value,
                          })
                        }
                        className="sr-only"
                      />
                      {option}
                    </label>
                  ))}
                </div>

                {errors.attendance && (
                  <p className="text-xs text-red-400 mt-1">Required</p>
                )}
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-[#D3968C] text-white"
              >
                {loading ? "SENDING..." : "Confirm"}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}