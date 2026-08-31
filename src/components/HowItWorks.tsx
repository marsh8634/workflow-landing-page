interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  { number: "01", title: "CREATE", description: "Set up your project and define the key information." },
  { number: "02", title: "PLAN", description: "Assign work and organize responsibilities across your team." },
  { number: "03", title: "MANAGE", description: "Keep tasks, people and resources moving together." },
  { number: "04", title: "TRACK", description: "Monitor progress, costs and important project updates." },
  { number: "05", title: "COMPLETE", description: "Finish the work and turn your activity into useful reports." },
];

export default function HowItWorks() {
  return (
    <section className="section process-section" id="how-it-works">
      <div className="container">
        <div className="section-heading center">
          <span className="eyebrow">SIMPLE WORKFLOW</span>
          <h2>From Start to Finish, All in One Place</h2>
          <p>A straightforward workflow that gives your team visibility at every stage.</p>
        </div>

        <div className="process">
          {steps.map((step, index) => (
            <article className="process-step" key={step.number}>
              <div className="step-number">{step.number}</div>
              {index !== steps.length - 1 && <div className="step-line" />}
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
