import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/mitho logo.jpg"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-red-900 via-red-800 to-orange-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo & Name */}
        <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="Mithho Logo" className="h-14 w-14 rounded-full object-cover" />
     
          <div>
            <h1 className="text-2xl font-bold tracking-wide" style={{ fontFamily: "'Georgia', serif" }}>
              Mithho 
            </h1>
            <p className="text-orange-300 text-xs tracking-widest uppercase">
              Authentic Nepali Cuisine
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-orange-300 transition-colors duration-300">Home</Link>
          <Link to="/menu" className="hover:text-orange-300 transition-colors duration-300">Menu</Link>
          <Link to="/about" className="hover:text-orange-300 transition-colors duration-300">About</Link>
          <Link to="/contact" className="hover:text-orange-300 transition-colors duration-300">Contact</Link>
          <Link
            to="/reservation"
            className="bg-orange-500 hover:bg-orange-400 px-5 py-2 rounded-full font-semibold transition-colors duration-300"
          >
            Reserve a Table
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-900 px-6 pb-4 flex flex-col gap-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-orange-300 py-1">Home</Link>
          <Link to="/menu" onClick={() => setIsOpen(false)} className="hover:text-orange-300 py-1">Menu</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-orange-300 py-1">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-orange-300 py-1">Contact</Link>
          <Link
            to="/reservation"
            onClick={() => setIsOpen(false)}
            className="bg-orange-500 hover:bg-orange-400 px-5 py-2 rounded-full font-semibold text-center transition-colors duration-300"
          >
            Reserve a Table
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar