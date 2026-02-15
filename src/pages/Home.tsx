import heroImage from "../assets/hero.jpeg"

function Home() {
  return (
    <div>
      <section
        className="relative min-h-screen flex items-center justify-center text-center text-white"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
<div className="max-w-3xl px-6">
  <p className="text-amber-300 tracking-widest uppercase text-sm mb-4 font-bold" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
    Authentic Nepali Cuisine
  </p>
  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white" style={{ textShadow: "3px 3px 15px rgba(0,0,0,0.9)" }}>
    Welcome to Mithho
  </h1>
  <p className="text-lg md:text-xl text-white mb-8 font-medium" style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.8)" }}>
    Experience the rich flavors of Nepal, from traditional momos to sizzling sekuwa,
    every dish tells a story of heritage and love.
  </p>
  <div className="flex gap-4 justify-center">
    <a href="/menu" className="bg-red-800 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg">
      Explore Menu
    </a>
    <a href="/reservation" className="bg-white hover:bg-amber-100 text-red-900 px-8 py-3 rounded-full font-semibold shadow-lg">
      Reserve a Table
    </a>
  </div>
</div>
</section>

      <section className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">
            Why Mithho?
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Mithho means delicious in Nepali and that is our promise to you.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <span className="text-4xl mb-4 block">🥟</span>
              <h3 className="text-xl font-bold text-red-900 mb-2">Handmade Momos</h3>
              <p className="text-gray-600">
                Our momos are crafted fresh daily with authentic Nepali spices and fillings passed down through generations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <span className="text-4xl mb-4 block">🔥</span>
              <h3 className="text-xl font-bold text-red-900 mb-2">Traditional Recipes</h3>
              <p className="text-gray-600">
                Every dish is prepared using time-honored Nepali cooking methods with fresh, locally sourced ingredients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <span className="text-4xl mb-4 block">🏔️</span>
              <h3 className="text-xl font-bold text-red-900 mb-2">Himalayan Ambiance</h3>
              <p className="text-gray-600">
                Step into a warm, welcoming space inspired by the beauty and culture of Nepal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to taste Nepal?
          </h2>
          <p className="text-orange-200 text-lg mb-8">
            Join us for an unforgettable dining experience. Walk in or reserve your table today.
          </p>
          <a href="/reservation" className="bg-orange-500 hover:bg-orange-400 text-white px-10 py-4 rounded-full font-semibold text-lg">
            Book a Table
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home