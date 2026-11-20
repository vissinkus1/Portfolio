const courseGroups = [
  {
    category: 'AWS Training & Courses',
    courses: [
      {
        title: 'Agentic AI',
        issuer: 'AWS Training',
        date: 'Jan 2026',
      },
      {
        title: 'Machine Learning Foundations',
        issuer: 'AWS Academy',
        date: 'Nov 2025',
      },
      {
        title: 'Generative AI',
        issuer: 'AWS Academy',
        date: 'Jul 2025',
      },
      {
        title: 'Data Engineering Virtual Internship (Grade O - Outstanding)',
        issuer: 'AWS Academy x EduSkills / AICTE',
        date: 'Jun 2026',
      },
    ],
  },
  {
    category: 'Software Engineering & Industry Assessments',
    courses: [
      {
        title: 'Core Java',
        issuer: 'Infosys Springboard',
        date: 'Nov 2024',
      },
      {
        title: 'Python',
        issuer: 'Infosys Springboard',
        date: 'Oct 2024',
      },
      {
        title: 'Foundation Certificate',
        issuer: 'PlatinalQ Universal Assessment',
        date: '2025',
      },
    ],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-header">
        <h2>Courses &amp; Training</h2>
        <p>Verified technical coursework, virtual internships, and foundational engineering certificates.</p>
      </div>

      <div style={{ display: 'grid', gap: '24px' }}>
        {courseGroups.map((group, idx) => (
          <div key={idx} className="about-card">
            <h3 style={{ color: 'var(--accent)', marginBottom: '14px', fontSize: '16px' }}>{group.category}</h3>
            <div className="chip-grid">
              {group.courses.map((item, i) => (
                <div
                  key={i}
                  className="chip"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    borderRadius: '12px',
                    padding: '10px 16px',
                  }}
                >
                  <strong style={{ color: 'var(--text)' }}>{item.title}</strong>
                  <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                    {item.issuer} · {item.date}
                  </span>
                  {/* Certificate Link: [ADD LINK] */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
