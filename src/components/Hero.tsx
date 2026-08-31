import Stats from "./Stats";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">ONE PLATFORM. BETTER WORK.</span>
          <h1>
            Manage Every Project
            <span>With Complete Clarity</span>
          </h1>
          <p>
            Bring projects, people, tasks, expenses and progress together in
            one simple platform built to keep your entire team moving forward.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Get Started</a>
            <a href="#how-it-works" className="text-btn">
              See how it works <span>→</span>
            </a>
          </div>

          <div className="hero-note">
            <span>✓</span>
            Simple setup · Powerful workflow · Built for teams
          </div>
        </div>

        <div className="hero-visual">
          <Stats />
        </div>
      </div>
    </section>
  );
}
