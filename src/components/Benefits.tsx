interface Benefit {
  label: string;
  title: string;
  description: string;
  points: string[];
}

const benefits: Benefit[] = [
  {
    label: "SMARTER DECISIONS",
    title: "Work Smarter with Better Insights",
    description: "See the information that matters without searching through multiple tools and conversations.",
    points: ["Real-time project visibility", "Clear performance insights", "Faster decision making"],
  },
  {
    label: "BUILT FOR TEAMS",
    title: "One System for Every Team",
    description: "Give every department a shared source of truth while keeping their daily workflow simple.",
    points: ["Centralized team communication", "Clear ownership of work", "One reliable source of information"],
  },
];

export default function Benefits() {
  return (
    <section className="section benefits-section" id="benefits">
      <div className="container">
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <span className="eyebrow">{benefit.label}</span>
              <h2>{benefit.title}</h2>
              <p>{benefit.description}</p>
              <ul>
                {benefit.points.map((point) => (
                  <li key={point}><span>✓</span>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
