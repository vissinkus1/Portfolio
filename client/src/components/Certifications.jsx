const certs = [
  'Introduction to Agentic AI – AWS (Jan 2026)',
  'AWS Academy Machine Learning Foundation (Nov 2025)',
  'Generative AI Foundation – AWS (Jul 2025)',
  'Fundamentals of Python – Infosys Springboard (Oct 2024)',
  'Core Java – Infosys Springboard (Nov 2024)',
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-header">
        <h2>Certifications</h2>
        <p>Continuous learning across AI, ML, and cloud domains.</p>
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
