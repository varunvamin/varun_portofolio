export function Certifications() {
  const certifications = [
    {
      title: 'Microsoft AI Innovation 2025',
      provider: 'Microsoft',
      focus: 'Applied AI',
      icon: '🏆'
    },
    {
      title: 'Microsoft Azure Learning',
      provider: 'Microsoft',
      focus: 'Cloud Computing',
      icon: '☁️'
    },
    {
      title: 'Microsoft AI Learning',
      provider: 'Microsoft',
      focus: 'Artificial Intelligence',
      icon: '🤖'
    },
    {
      title: 'MATLAB Signal Processing',
      provider: 'MathWorks',
      focus: 'On-Ramp Program',
      icon: '📊'
    }
  ];

  return (
    <section className="certifications-section">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-icon">{cert.icon}</div>
              <h3 className="certification-title">{cert.title}</h3>
              <p className="certification-provider">{cert.provider}</p>
              <p className="certification-focus">{cert.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
