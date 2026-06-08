import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="skill-category">
              <h3 className="skill-category-title">{category.category}</h3>
              <div className="skill-items">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <h2 className="section-title" style={{ marginTop: '4rem' }}>Languages</h2>
        <motion.div 
          className="languages-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {languages.map((lang, index) => (
            <motion.div key={index} variants={itemVariants} className="language-item">
              <h4 className="language-name">{lang.language}</h4>
              <p className="language-level">{lang.level}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
