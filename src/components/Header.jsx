export default function Header({ total, online }) {
  return (
    <header className="header">
      <div className="header__eyebrow">
        <span className="header__pulse" />
        <span>panel sistem internal</span>
      </div>

      <h1 className="header__title">
        Portal Sistem<br />TSM
      </h1>

      <p className="header__subtitle">
        Kumpulan sistem internal yang dibangun dan dikelola oleh divisi IT.
        Pilih sistem di bawah untuk mulai.
      </p>

      <div className="header__stats">
        <div className="header__stat">
          <span className="header__stat-value">{String(total).padStart(2, "0")}</span>
          <span className="header__stat-label">total sistem</span>
        </div>
        <div className="header__stat-divider" />
        <div className="header__stat">
          <span className="header__stat-value header__stat-value--accent">{String(online).padStart(2, "0")}</span>
          <span className="header__stat-label">aktif</span>
        </div>
      </div>
    </header>
  )
}
