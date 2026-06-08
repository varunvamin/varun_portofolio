export function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'C', 'Embedded C', 'Verilog', 'SystemVerilog']
    },
    {
      category: 'Tools & Platforms',
      skills: ['MATLAB', 'Vivado', 'PSoC Creator', 'VS Code', 'Arduino IDE']
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['FastAPI', 'Flask', 'Streamlit', 'LangChain', 'React', 'OpenCV', 'Scikit-learn', 'Pandas']
    },
    {
      category: 'Domains',
      skills: ['Signal Processing', 'Digital Design', 'Embedded Systems', 'Power Systems', 'AI/ML', 'IoT', 'Data Processing']
    },
    {
      category: 'Specializations',
      skills: ['PSoC Microcontrollers', 'MATLAB', 'LLM Fine-tuning', 'RAG Systems', 'Real-time Systems']
    }
  ];

  const languages = [
    { language: 'English', level: 'Fluent' },
    { language: 'Hindi', level: 'Fluent' },
    { language: 'Kannada', level: 'Fluent' },
    { language: 'Tulu', level: 'Native' }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.category}</h3>
              <div className="skill-items">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title" style={{ marginTop: '3rem' }}>Languages</h2>
        <div className="languages-grid">
          {languages.map((lang, index) => (
            <div key={index} className="language-item">
              <h4 className="language-name">{lang.language}</h4>
              <p className="language-level">{lang.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
