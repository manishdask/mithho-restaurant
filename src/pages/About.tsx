import { Heart, Users, UtensilsCrossed, Award } from "lucide-react"
import heroImage from "../assets/hero.jpeg"
import aboutImg from "../assets/about.webp"
import aboutImg2 from "../assets/about2.webp"

function About() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #FDF6EE 0%, #F5E6D3 30%, #FDF6EE 60%, #F5E6D3 100%)" }}>

      <div className="relative h-80 overflow-hidden">
        <img
          src={heroImage}
          alt="Mithho Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))" }}></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-amber-300 tracking-widest uppercase text-sm mb-3 font-bold">Our Story</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>
              About Mithho
            </h1>
          </div>
        </div>
      </div>




    <div className="mb-20">
        <div className="text-center mb-10">
           <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: "#991B1B" }}>Visit Us</p>
           <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#292524", fontFamily: "'Georgia', serif" }}>
              Our Restaurant
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-300">
              <img src={aboutImg2} alt="Mithho Storefront" className="w-full h-80 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-300">
              <img src={aboutImg} alt="Mithho Outdoor Seating" className="w-full h-80 object-cover" />
            </div>
          </div>
         <p className="text-center text-lg mt-6" style={{ color: "#57534E" }}>
            Welcome to our cozy space at 2A Vaughan St, Lidcombe — dine in or enjoy our outdoor seating.
          </p>
        </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: "#92400E" }}>Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#292524", fontFamily: "'Georgia', serif" }}>
              A Taste of Nepal in Sydney
            </h2>
            <p className="text-lg mb-4" style={{ color: "#57534E" }}>
              Mithho, meaning "delicious" in Nepali, was born from a simple dream — to bring the authentic flavors of Nepal to the heart of Sydney. Located in Lidcombe, we are more than just a restaurant; we are a gathering place where food, culture, and community come together.
            </p>
            <p className="text-lg mb-4" style={{ color: "#57534E" }}>
              Our recipes are rooted in tradition, passed down through generations, and prepared with the freshest ingredients. From our handmade momos to our aromatic Nepali thali, every dish is crafted with love and care.
            </p>
            <p className="text-lg" style={{ color: "#57534E" }}>
              Whether you are from Nepal missing the taste of home, or a food lover exploring new cuisines, Mithho welcomes you with open arms and a warm plate.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={heroImage}
              alt="Mithho Food"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 4px 15px rgba(120,53,15,0.08)" }}>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ background: "rgba(146,64,14,0.1)" }}>
              <Heart className="w-7 h-7" style={{ color: "#92400E" }} />
            </div>
            <h3 className="text-3xl font-bold mb-1" style={{ color: "#292524" }}>100%</h3>
            <p className="text-sm font-semibold" style={{ color: "#78716C" }}>Authentic Recipes</p>
          </div>
          <div className="text-center p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 4px 15px rgba(120,53,15,0.08)" }}>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ background: "rgba(146,64,14,0.1)" }}>
              <UtensilsCrossed className="w-7 h-7" style={{ color: "#92400E" }} />
            </div>
            <h3 className="text-3xl font-bold mb-1" style={{ color: "#292524" }}>15+</h3>
            <p className="text-sm font-semibold" style={{ color: "#78716C" }}>Signature Dishes</p>
          </div>
          <div className="text-center p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 4px 15px rgba(120,53,15,0.08)" }}>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ background: "rgba(146,64,14,0.1)" }}>
              <Users className="w-7 h-7" style={{ color: "#92400E" }} />
            </div>
            <h3 className="text-3xl font-bold mb-1" style={{ color: "#292524" }}>1000+</h3>
            <p className="text-sm font-semibold" style={{ color: "#78716C" }}>Happy Customers</p>
          </div>
          <div className="text-center p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 4px 15px rgba(120,53,15,0.08)" }}>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ background: "rgba(146,64,14,0.1)" }}>
              <Award className="w-7 h-7" style={{ color: "#92400E" }} />
            </div>
            <h3 className="text-3xl font-bold mb-1" style={{ color: "#292524" }}>4.8</h3>
            <p className="text-sm font-semibold" style={{ color: "#78716C" }}>Google Rating</p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: "#92400E" }}>What People Say</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#292524", fontFamily: "'Georgia', serif" }}>
              Customer Reviews
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 4px 15px rgba(120,53,15,0.08)" }}>
              <div className="flex gap-1 mb-4">
                <span className="text-amber-400 text-xl">&#9733;</span>
                <span className="text-amber-400 text-xl">&#9733;</span>
                <span className="text-amber-400 text-xl">&#9733;</span>
                <span className="text-amber-400 text-xl">&#9733;</span>
                <span className="text-amber-400 text-xl">&#9733;</span>
              </div>
              <p className="text-base mb-4" style={{ color: "#57534E" }}>
                "Best momos in Sydney! The atmosphere is warm and welcoming, and the food is absolutely authentic."
              </p>
              <p className="font-bold" style={{ color: "#292524" }}>Sanita Baniya</p>
              <p className="text-sm" style={{ color: "#A8A29E" }}>2 weeks ago</p>
            </div>
            <div className="p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 4px 15px rgba(120,53,15,0.08)" }}>
              <div className="flex gap-1 mb-4">
                <span className="text-amber-400 text-xl">&#9733;</span>
                <span className="text-amber-400 text-xl">&#9733;</span>
                <span className="text-amber-400 text-xl">&#9733;</span>
                <span className="text-amber-400 text-xl">&#9733;</span>
                <span className="text-amber-400 text-xl">&#9733;</span>
              </div>
              <p className="text-base mb-4" style={{ color: "#57534E" }}>
                "The Keema Noodles are incredible. Highly recommend for anyone looking for genuine Nepalese cuisine."
              </p>
              <p className="font-bold" style={{ color: "#292524" }}>Dipesh Gurung</p>
              <p className="text-sm" style={{ color: "#A8A29E" }}>1 month ago</p>
            </div>
            <div className="p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 4px 15px rgba(120,53,15,0.08)" }}>
              <div className="flex gap-1 mb-4">
                <span className="text-amber-400 text-xl">&#9733;</span>
                <span className="text-amber-400 text-xl">&#9733;</span>
                <span className="text-amber-400 text-xl">&#9733;</span>
                <span className="text-amber-400 text-xl">&#9733;</span>
                <span className="text-amber-400 text-xl">&#9733;</span>
              </div>
              <p className="text-base mb-4" style={{ color: "#57534E" }}>
                "As someone from Nepal, I can say this is the real deal. The flavors remind me of home!"
              </p>
              <p className="font-bold" style={{ color: "#292524" }}>Ashish KC</p>
              <p className="text-sm" style={{ color: "#A8A29E" }}>3 weeks ago</p>
            </div>
          </div>
        </div>

        <div className="text-center py-14 rounded-3xl relative overflow-hidden" style={{ background: "linear-gradient(135deg, #451A03 0%, #6B3410 50%, #78350F 100%)" }}>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(217,119,6,0.1) 20px, rgba(217,119,6,0.1) 21px)",
            }}
          ></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>
              Come Visit Us
            </h3>
            <p className="text-lg mb-8" style={{ color: "#D4B896" }}>
              2A Vaughan St, Lidcombe NSW 2141 - Open daily till 10 PM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <a
                href="/menu"
                className="inline-block px-8 py-3 rounded-full font-bold text-lg transition-all duration-300"
                style={{
                  background: "transparent",
                  color: "#FCD34D",
                  border: "2px solid #FCD34D",
                }}
              >
                View Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About