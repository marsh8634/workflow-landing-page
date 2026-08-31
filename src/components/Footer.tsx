const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#benefits" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="logo">Work<span>Flow</span></a>
          <p>A simple, reliable platform for managing projects, people and progress.</p>
        </div>

        <div className="footer-column">
          <h4>Navigation</h4>
          {footerLinks.map((link) => (
            <a href={link.href} key={link.label}>{link.label}</a>
          ))}
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <a href="mailto:hello@workflow.com">hello@workflow.com</a>
          <a href="tel:+919876543210">+91 98765 43210</a>
          <span>India</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 WorkFlow. All rights reserved.</span>
        <span>Built for better work.</span>
      </div>
    </footer>
  );
}
