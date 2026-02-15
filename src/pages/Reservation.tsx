import { useState } from "react"
import { CalendarDays, Clock, Users, Phone } from "lucide-react"

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    notes: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Hi Mithho! I'd like to reserve a table.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Guests: ${formData.guests}
${formData.occasion ? `Occasion: ${formData.occasion}` : ""}
${formData.notes ? `Special Requests: ${formData.notes}` : ""}`

    const whatsappURL = `https://wa.me/6145998404?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
    setSubmitted(true)
  }

  const inputStyle = {
    background: "rgba(255,255,255,0.8)",
    border: "1px solid #E7E5E4",
    color: "#292524",
  }

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg, #FDF6EE 0%, #F5E6D3 30%, #FDF6EE 60%, #F5E6D3 100%)" }}
    >
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FFF7ED 0%, #FDE8CD 50%, #FFF7ED 100%)" }}>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(120,53,15,0.03) 20px, rgba(120,53,15,0.03) 21px)",
          }}
        ></div>
        <div className="relative z-10 py-20 text-center">
          <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: "#92400E" }}>Book a Table</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif", color: "#292524" }}>
            Reservation
          </h1>
          <p className="max-w-xl mx-auto text-xl" style={{ color: "#44403C" }}>
            Reserve your spot for an unforgettable Nepalese dining experience
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          <div
            className="text-center p-6 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 4px 15px rgba(120,53,15,0.08)" }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3" style={{ background: "rgba(146,64,14,0.1)" }}>
              <CalendarDays className="w-6 h-6" style={{ color: "#92400E" }} />
            </div>
            <h3 className="font-bold mb-1" style={{ color: "#292524" }}>Open Daily</h3>
            <p className="text-sm" style={{ color: "#78716C" }}>Monday to Sunday</p>
          </div>
          <div
            className="text-center p-6 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 4px 15px rgba(120,53,15,0.08)" }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3" style={{ background: "rgba(146,64,14,0.1)" }}>
              <Clock className="w-6 h-6" style={{ color: "#92400E" }} />
            </div>
            <h3 className="font-bold mb-1" style={{ color: "#292524" }}>Hours</h3>
            <p className="text-sm" style={{ color: "#78716C" }}>11 AM - 10 PM</p>
          </div>
          <div
            className="text-center p-6 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 4px 15px rgba(120,53,15,0.08)" }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3" style={{ background: "rgba(146,64,14,0.1)" }}>
              <Users className="w-6 h-6" style={{ color: "#92400E" }} />
            </div>
            <h3 className="font-bold mb-1" style={{ color: "#292524" }}>Party Size</h3>
            <p className="text-sm" style={{ color: "#78716C" }}>Up to 20 guests</p>
          </div>
          <div
            className="text-center p-6 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 4px 15px rgba(120,53,15,0.08)" }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3" style={{ background: "rgba(146,64,14,0.1)" }}>
              <Phone className="w-6 h-6" style={{ color: "#92400E" }} />
            </div>
            <h3 className="font-bold mb-1" style={{ color: "#292524" }}>Call Us</h3>
            <p className="text-sm" style={{ color: "#78716C" }}>(02) 8072 8089</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div
            className="p-8 md:p-12 rounded-3xl"
            style={{ background: "rgba(255,255,255,0.85)", boxShadow: "0 10px 40px rgba(120,53,15,0.1)" }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-6">&#10003;</div>
                <h2 className="text-3xl font-bold mb-3" style={{ color: "#292524", fontFamily: "'Georgia', serif" }}>
                  Reservation Confirmed!
                </h2>
                <p className="text-lg mb-2" style={{ color: "#57534E" }}>
                  Thank you, {formData.name}! We've received your booking.
                </p>
                <p className="text-lg mb-6" style={{ color: "#57534E" }}>
                  {formData.date} at {formData.time} for {formData.guests} {Number(formData.guests) === 1 ? "guest" : "guests"}
                </p>
                <p className="text-base mb-8" style={{ color: "#78716C" }}>
                  We'll send a confirmation to {formData.email}. For any changes, call us at (02) 8072 8089.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "2", occasion: "", notes: "" })
                  }}
                  className="px-8 py-3 rounded-full font-bold text-lg text-white transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #92400E, #B45309)",
                    boxShadow: "0 4px 15px rgba(146, 64, 14, 0.4)",
                  }}
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: "#292524", fontFamily: "'Georgia', serif" }}>
                  Reserve Your Table
                </h2>
                <p className="text-center mb-8" style={{ color: "#78716C" }}>
                  Fill in the details below and we'll confirm your booking
                </p>

                <div className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: "#44403C" }}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-300"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: "#44403C" }}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-300"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#44403C" }}>Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      className="w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-300"
                      style={inputStyle}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: "#44403C" }}>Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-300"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: "#44403C" }}>Time *</label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-300"
                        style={inputStyle}
                      >
                        <option value="">Select time</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="12:30 PM">12:30 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="1:30 PM">1:30 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="2:30 PM">2:30 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="3:30 PM">3:30 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="4:30 PM">4:30 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="5:30 PM">5:30 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="6:30 PM">6:30 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                        <option value="7:30 PM">7:30 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                        <option value="8:30 PM">8:30 PM</option>
                        <option value="9:00 PM">9:00 PM</option>
                        <option value="9:30 PM">9:30 PM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: "#44403C" }}>Guests *</label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-300"
                        style={inputStyle}
                      >
                        {[...Array(20)].map((_, i) => (
                          <option key={i + 1} value={String(i + 1)}>
                            {i + 1} {i === 0 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#44403C" }}>Occasion (optional)</label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-300"
                      style={inputStyle}
                    >
                      <option value="">Select occasion</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="date">Date Night</option>
                      <option value="business">Business Meal</option>
                      <option value="family">Family Gathering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#44403C" }}>Special Requests (optional)</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Any dietary requirements, seating preferences, or special requests..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-300 resize-none"
                      style={inputStyle}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-full font-bold text-lg text-white transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #92400E, #B45309)",
                      boxShadow: "0 4px 15px rgba(146, 64, 14, 0.4)",
                    }}
                  >
                    Confirm Reservation
                  </button>

                  <p className="text-center text-sm" style={{ color: "#A8A29E" }}>
                    Or call us directly at{" "}
                    <a href="tel:0280728089" className="font-semibold hover:text-amber-600 transition-colors" style={{ color: "#92400E" }}>
                      (02) 8072 8089
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reservation