import { useMemo, useState } from "react"
import { systems, categories } from "./data/systems"
import Header from "./components/Header"
import CategoryFilter from "./components/CategoryFilter"
import SystemCard from "./components/SystemCard"
import "./App.css"

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Semua")

  const filteredSystems = useMemo(() => {
    if (activeCategory === "Semua") return systems
    return systems.filter((s) => s.category === activeCategory)
  }, [activeCategory])

  const onlineCount = useMemo(
    () => systems.filter((s) => s.status === "online").length,
    []
  )

  return (
    <div className="page">
      <div className="page__bg" />

      <div className="page__inner">
        <Header total={systems.length} online={onlineCount} />

        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        {filteredSystems.length > 0 ? (
          <div className="grid">
            {filteredSystems.map((system, i) => (
              <SystemCard key={system.name} system={system} index={i} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <p>Belum ada sistem di kategori ini.</p>
          </div>
        )}

        <footer className="footer">
          <span>Divisi IT &middot; {new Date().getFullYear()}</span>
        </footer>
      </div>
    </div>
  )
}
