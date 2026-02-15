import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Reservation from "./pages/Reservation"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App