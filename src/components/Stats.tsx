interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "248", label: "Active Projects" },
  { value: "1.2K", label: "Completed Tasks" },
  { value: "86", label: "Team Members" },
  { value: "24", label: "Pending Requests" },
];

export default function Stats() {
  return (
    <div className="dashboard-card">
      <div className="dashboard-header">
        <div>
          <span className="dashboard-label">LIVE OVERVIEW</span>
          <h3>Project Dashboard</h3>
        </div>
        <span className="status-dot">Live</span>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>

      <div className="progress-area">
        <div className="progress-heading">
          <span>Overall progress</span>
          <strong>78%</strong>
        </div>
        <div className="progress-bar">
          <div className="progress-value" />
        </div>
        <div className="mini-info">
          <span>32 tasks completed</span>
          <span>8 remaining</span>
        </div>
      </div>
    </div>
  );
}
