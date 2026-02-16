import { Link } from "react-router-dom"
import { Facebook, Instagram, MapPin, Phone, Mail, Heart } from "lucide-react"
import logo from "../assets/mitho logo.jpg"

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Mithho Logo"
                className="h-10 w-10 mr-3 rounded-full object-cover"
              />
              <h3 className="text-3xl font-bold text-amber-400">Mithho</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Bringing authentic Nepalese flavors to Sydney. Experience the taste of the Himalayas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/mithhonepalese/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-600 p-3 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/mithhomithho/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-600 p-3 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-amber-400 transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/reservation" className="text-gray-400 hover:text-amber-400 transition-colors">Reservations</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-amber-400">Opening Hours</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span>Monday</span>
                <span>11 AM - 10 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday</span>
                <span>11 AM - 10 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday</span>
                <span>11 AM - 10 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday</span>
                <span>11 AM - 10 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>11 AM - 10 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>11 AM - 10 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>11 AM - 10 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-amber-400">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">shop 9, 2A Vaughan St, Lidcombe NSW 2141</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="tel:0280728089"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  (02) 8072 8089
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:info@mithho.com.au"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  info@mithho.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {new Date().getFullYear()} Mithho Nepalese Cuisine. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> in Sydney
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
