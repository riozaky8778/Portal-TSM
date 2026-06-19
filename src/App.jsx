import { systems } from "./data/systems"
import Header from "./components/Header"
import SystemCard from "./components/SystemCard"
import "./App.css"

export default function App() {
  const onlineCount = systems.filter((s) => s.status === "online").length

  return (
    <div className="page">
      <div className="page__bg" />

      <div className="page__inner">
        <Header total={systems.length} online={onlineCount} />

        {systems.length > 0 ? (
          <div className="grid">
            {systems.map((system, i) => (
              <SystemCard key={system.name} system={system} index={i} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <p>Belum ada sistem yang terdaftar.</p>
          </div>
        )}

        <footer className="footer">
          <span>Divisi IT &middot; {new Date().getFullYear()}</span>
        </footer>
      </div>
    </div>
  )
}
