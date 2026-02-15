import { useState } from "react"
import { menuCategories } from "../data/menuData"
import type { MenuItem } from "../data/menuData"

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div
      className="rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
      style={{
        background: "linear-gradient(145deg, #FFFBF5 0%, #FFF3E0 100%)",
        boxShadow: "0 4px 15px rgba(120, 53, 15, 0.1)",
      }}
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(40,20,0,0.7) 0%, rgba(40,20,0,0.1) 40%, transparent 100%)",
          }}
        ></div>
        {item.popular && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-amber-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
            Popular
          </div>
        )}
        {item.spicy && !item.popular && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
            Spicy
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
          <h3 className="text-white text-2xl font-bold drop-shadow-lg">{item.name}</h3>
          <span
            className="text-xl font-bold px-4 py-1 rounded-full shadow-lg"
            style={{ background: "rgba(255,255,255,0.95)", color: "#92400E" }}
          >
            ${item.price.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-base mb-3" style={{ color: "#57534E" }}>{item.description}</p>
        <div className="flex gap-2">
          {item.vegetarian && (
            <span
              className="text-sm font-semibold px-3 py-1 rounded-full"
              style={{ background: "#ECFDF5", color: "#065F46" }}
            >
              Vegetarian
            </span>
          )}
          {item.spicy && (
            <span
              className="text-sm font-semibold px-3 py-1 rounded-full"
              style={{ background: "#FEF2F2", color: "#991B1B" }}
            >
              Spicy
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function Menu() {
  const [activeCategory, setActiveCategory] = useState("momo")

  const currentCategory = menuCategories.find(
    (cat) => cat.key === activeCategory
  )

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #FDF6EE 0%, #F5E6D3 30%, #FDF6EE 60%, #F5E6D3 100%)",
      }}
    >
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FFF7ED 0%, #FDE8CD 50%, #FFF7ED 100%)" }}>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(120,53,15,0.03) 20px, rgba(120,53,15,0.03) 21px)",
          }}
        ></div>
        <div className="relative z-10 py-20 text-center">
          <div
            className="inline-block px-6 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6"
            style={{ background: "rgba(120,53,15,0.1)", color: "#92400E", border: "1px solid rgba(120,53,15,0.2)" }}
          >
            Explore Our Dishes
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif", color: "#292524" }}>
            Our Menu
          </h1>
          <p className="max-w-xl mx-auto text-xl" style={{ color: "#44403C" }}>
            Authentic Nepalese dishes crafted with traditional recipes and fresh ingredients
          </p>
          <div className="mt-8 flex justify-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold" style={{ color: "#92400E" }}>25+</p>
              <p className="text-sm uppercase tracking-wider" style={{ color: "#78716C" }}>Dishes</p>
            </div>
            <div className="w-px bg-amber-400"></div>
            <div className="text-center">
              <p className="text-3xl font-bold" style={{ color: "#92400E" }}>100%</p>
              <p className="text-sm uppercase tracking-wider" style={{ color: "#78716C" }}>Authentic</p>
            </div>
            <div className="w-px bg-amber-400"></div>
            <div className="text-center">
              <p className="text-3xl font-bold" style={{ color: "#92400E" }}>Fresh</p>
              <p className="text-sm uppercase tracking-wider" style={{ color: "#78716C" }}>Daily</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-7 relative z-10">
        <div
          className="flex flex-wrap justify-center gap-3 py-5 px-6 rounded-2xl"
          style={{
                background:"rgba(127,29,29,0.95)",
            boxShadow: "0 10px 40px rgba(120, 53, 15, 0.12)",
            backdropFilter: "blur(10px)",
          }}
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className="transition-all duration-300"
              style={
                activeCategory === cat.key
                  ? {
                      padding: "10px 24px",
                      borderRadius: "9999px",
                      fontWeight: 600,
                      fontSize: "16px",
                      background: "linear-gradient(135deg, #92400E, #B45309)",
                      color: "white",
                      boxShadow: "0 4px 15px rgba(146, 64, 14, 0.4)",
                    }
                  : {
                      padding: "10px 24px",
                      borderRadius: "9999px",
                      fontWeight: 600,
                      fontSize: "16px",
                      background: "#FFF7ED",
                      color: "#78350F",
                      border: "1px solid #FDE68A",
                    }
              }
            >
              {cat.label}
            </button>
          ))}
          <button
            onClick={() => setActiveCategory("all")}
            className="transition-all duration-300"
            style={
              activeCategory === "all"
                ? {
                    padding: "10px 24px",
                    borderRadius: "9999px",
                    fontWeight: 600,
                    fontSize: "16px",
                    background: "linear-gradient(135deg, #92400E, #B45309)",
                    color: "white",
                    boxShadow: "0 4px 15px rgba(146, 64, 14, 0.4)",
                  }
                : {
                    padding: "10px 24px",
                    borderRadius: "9999px",
                    fontWeight: 600,
                    fontSize: "16px",
                    background: "#FFF7ED",
                    color: "#78350F",
                    border: "1px solid #FDE68A",
                  }
            }
          >
            All Items
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14">
        {activeCategory === "all" ? (
          <div className="space-y-16">
            {menuCategories.map((cat) => (
              <div key={cat.key}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-4xl font-bold" style={{ color: "#292524", fontFamily: "'Georgia', serif" }}>
                    {cat.label}
                  </h2>
                  <p className="text-base" style={{ color: "#78716C" }}>
                    ({cat.items.length} {cat.items.length === 1 ? "item" : "items"})
                  </p>
                  <div className="flex-1 ml-4" style={{ height: "2px", background: "linear-gradient(to right, #D97706, transparent)" }}></div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.items.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-4xl font-bold" style={{ color: "#292524", fontFamily: "'Georgia', serif" }}>
                {currentCategory?.label}
              </h2>
              <p className="text-base" style={{ color: "#78716C" }}>
                ({currentCategory?.items.length}{" "}
                {currentCategory?.items.length === 1 ? "item" : "items"})
              </p>
              <div className="flex-1 ml-4" style={{ height: "2px", background: "linear-gradient(to right, #D97706, transparent)" }}></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentCategory?.items.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
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
              Ready to order?
            </h3>
            <p className="text-lg mb-8" style={{ color: "#D4B896" }}>
              Call us or reserve a table for the best Nepalese experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0280728089"
                className="inline-block px-8 py-3 rounded-full font-bold text-lg transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #D97706, #F59E0B)",
                  color: "white",
                  boxShadow: "0 4px 20px rgba(217, 119, 6, 0.4)",
                }}
              >
                Call (02) 8072 8089
              </a>
              <a
                href="/reservation"
                className="inline-block px-8 py-3 rounded-full font-bold text-lg transition-all duration-300"
                style={{
                  background: "transparent",
                  color: "#FCD34D",
                  border: "2px solid #FCD34D",
                }}
              >
                Reserve a Table
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu