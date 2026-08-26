const certs = [
  'Agentic AI – AWS (Jan 2026)',
  'ML Foundation – AWS (Nov 2025)',
  'Generative AI – AWS (Jul 2025)',
  'Core Java – Infosys Springboard (Nov 2024)',
  'Python – Infosys Springboard (Oct 2024)',
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-header">
        <h2>Certifications</h2>
        <p>Continuous learning across AWS AI/ML certifications and foundational CS programming.</p>
      </div>

      <div className="chip-grid">
        {certs.map((cert, i) => (
          <span className="chip" key={i}>
            {cert}
          </span>
        ))}
      </div>
    </section>
  );
}

