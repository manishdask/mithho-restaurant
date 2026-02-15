import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
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
          <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: "#92400E" }}>Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif", color: "#292524" }}>
            Contact Us
          </h1>
          <p className="max-w-xl mx-auto text-xl" style={{ color: "#44403C" }}>
            We'd love to hear from you. Reach out for reservations, feedback, or any questions.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#292524", fontFamily: "'Georgia', serif" }}>
              Send Us a Message
            </h2>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl" style={{ background: "#ECFDF5", color: "#065F46" }}>
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "#44403C" }}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid #E7E5E4",
                    color: "#292524",
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "#44403C" }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid #E7E5E4",
                    color: "#292524",
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "#44403C" }}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid #E7E5E4",
                    color: "#292524",
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "#44403C" }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-300 resize-none"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid #E7E5E4",
                    color: "#292524",
                  }}
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full py-3 rounded-full font-bold text-lg text-white transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #92400E, #B45309)",
                  boxShadow: "0 4px 15px rgba(146, 64, 14, 0.4)",
                }}
              >
                Send Message
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#292524", fontFamily: "'Georgia', serif" }}>
              Restaurant Details
            </h2>

            <div
              className="flex items-start gap-4 p-6 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 4px 15px rgba(120,53,15,0.08)" }}
            >
              <div className="p-3 rounded-full" style={{ background: "rgba(146,64,14,0.1)" }}>
                <MapPin className="w-6 h-6" style={{ color: "#92400E" }} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: "#292524" }}>Address</h3>
                <p style={{ color: "#57534E" }}>2A Vaughan St, Lidcombe NSW 2141</p>
              </div>
            </div>

            <div
              className="flex items-start gap-4 p-6 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 4px 15px rgba(120,53,15,0.08)" }}
            >
              <div className="p-3 rounded-full" style={{ background: "rgba(146,64,14,0.1)" }}>
                <Phone className="w-6 h-6" style={{ color: "#92400E" }} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: "#292524" }}>Phone</h3>
                <a href="tel:0280728089" className="hover:text-amber-600 transition-colors" style={{ color: "#57534E" }}>
                  (02) 8072 8089
                </a>
              </div>
            </div>

            <div
              className="flex items-start gap-4 p-6 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 4px 15px rgba(120,53,15,0.08)" }}
            >
              <div className="p-3 rounded-full" style={{ background: "rgba(146,64,14,0.1)" }}>
                <Mail className="w-6 h-6" style={{ color: "#92400E" }} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: "#292524" }}>Email</h3>
                <a href="mailto:info@mithho.com.au" className="hover:text-amber-600 transition-colors" style={{ color: "#57534E" }}>
                  info@mithho.com.au
                </a>
              </div>
            </div>

            <div
              className="flex items-start gap-4 p-6 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 4px 15px rgba(120,53,15,0.08)" }}
            >
              <div className="p-3 rounded-full" style={{ background: "rgba(146,64,14,0.1)" }}>
                <Clock className="w-6 h-6" style={{ color: "#92400E" }} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: "#292524" }}>Opening Hours</h3>
                <p style={{ color: "#57534E" }}>Monday - Sunday</p>
                <p style={{ color: "#57534E" }}>11:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="text-center mb-8">
          <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: "#92400E" }}>Find Us</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#292524", fontFamily: "'Georgia', serif" }}>
            Our Location
          </h2>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8!2d151.0455!3d-33.8632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb2141e0e1f7%3A0x7a0c3e5d8e0b9b0a!2s2A%20Vaughan%20St%2C%20Lidcombe%20NSW%202141!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mithho Restaurant Location"
          ></iframe>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-14">
        <div
          className="text-center py-14 rounded-3xl relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #451A03 0%, #6B3410 50%, #78350F 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(217,119,6,0.1) 20px, rgba(217,119,6,0.1) 21px)",
            }}
          ></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>
              Ready to dine with us?
            </h3>
            <p className="text-lg mb-8" style={{ color: "#D4B896" }}>
              Book your table now for an authentic Nepalese experience
            </p>
            <a
              href="/reservation"
              className="inline-block px-8 py-3 rounded-full font-bold text-lg transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #D97706, #F59E0B)",
                color: "white",
                boxShadow: "0 4px 20px rgba(217, 119, 6, 0.4)",
              }}
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact