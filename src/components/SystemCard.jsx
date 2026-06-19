export default function SystemCard({ system, index }) {
  const isOnline = system.status === "online"

  return (
    <div className={`system-card ${!isOnline ? "system-card--soon" : ""}`}>
      <div className="system-card__top">
        <span className="system-card__index">{String(index + 1).padStart(2, "0")}</span>
        <span className={`system-card__status ${isOnline ? "is-online" : "is-soon"}`}>
          <span className="system-card__dot" />
          {isOnline ? "online" : "segera"}
        </span>
      </div>

      <h3 className="system-card__name">{system.name}</h3>
      <p className="system-card__desc">{system.description}</p>

      <div className="system-card__footer">
        <span className="system-card__category">{system.category}</span>

        {isOnline ? (
          <a
            href={system.url}
            target="_blank"
            rel="noopener noreferrer"
            className="system-card__cta"
          >
            Kunjungi sistem
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        ) : (
          <span className="system-card__cta system-card__cta--disabled">
            Belum tersedia
          </span>
        )}
      </div>
    </div>
  )
}
