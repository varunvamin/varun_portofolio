export function Education() {
  const education = [
    {
      institution: 'NMAM Institute of Technology, Nitte',
      degree: 'B.Tech in Electronics and Communication Engineering',
      duration: '2023 – 2027',
      icon: '🎓'
    },
    {
      institution: 'St. Aloysius PU College, Mangalore',
      degree: 'Pre-University',
      duration: '2021 – 2023',
      gpa: '91.6%',
      icon: '📚'
    },
    {
      institution: 'Holy Family English Medium High School, Surathkal',
      degree: 'SSLC',
      duration: '2021',
      gpa: '89.9%',
      icon: '🏫'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="timeline-marker">{edu.icon}</div>
              <div className="education-content">
                <h3 className="education-institution">{edu.institution}</h3>
                <p className="education-degree">{edu.degree}</p>
                <div className="education-meta">
                  <span className="duration">📅 {edu.duration}</span>
                  {edu.gpa && <span className="gpa">🌟 {edu.gpa}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
