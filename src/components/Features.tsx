interface Feature {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  { number: "01", icon: "↗", title: "Project Management", description: "Plan projects, assign work and keep every important task organized in one place." },
  { number: "02", icon: "◎", title: "Team & Workforce", description: "Keep your team aligned with clear responsibilities, schedules and real-time updates." },
  { number: "03", icon: "₹", title: "Expenses & Tracking", description: "Track project expenses, approvals and budgets with complete visibility." },
  { number: "04", icon: "▣", title: "Materials & Inventory", description: "Monitor materials, stock levels and requests without scattered spreadsheets." },
  { number: "05", icon: "!", title: "Alerts & Notifications", description: "Know what needs attention with timely alerts and actionable notifications." },
  { number: "06", icon: "⌁", title: "Reports & Analytics", description: "Turn project activity into useful reports that help you make better decisions." },
];

export default function Features() {
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">POWERFUL FEATURES</span>
          <h2>Everything You Need in One Place</h2>
          <p>
            Replace disconnected tools with one reliable workspace designed
            around the way modern teams actually work.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-top">
                <span className="feature-number">{feature.number}</span>
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href="#contact">Learn more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
