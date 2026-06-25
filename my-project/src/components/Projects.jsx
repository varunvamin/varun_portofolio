import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'RAG AI Assistant',
      description: 'Engineered a Retrieval-Augmented Generation engine that processes document queries with sub-second semantic retrieval using FAISS and LangChain.',
      tech: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Gemini API'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
      github: '#',
      featured: false
    },
    {
      title: 'Machine Health Monitor',
      description: 'Developed a real-time IoT monitoring system that detects machine anomalies, reducing unplanned downtime through predictive maintenance alerts.',
      tech: ['ESP32', 'Embedded C', 'Thingspeak', 'IoT'],
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
      github: '#',
      featured: false
    },
    {
      title: 'Clinical Data Pipeline',
      description: 'Architected a high-performance clinical data pipeline automating the conversion of SNOMED-CT concepts to ICD-10 codes using FastAPI and Pandas.',
      tech: ['Python', 'Pandas', 'FastAPI', 'REST'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
      github: '#',
      featured: false
    },
    {
      title: 'Science Tutor LLM',
      description: 'Fine-tuned a Llama-based model via LoRA to deploy a domain-specific educational chatbot featuring a zero-shot two-layer classification system.',
      tech: ['Python', 'Flask', 'Groq API', 'LoRA', 'NLP'],
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
      github: '#',
      featured: false
    },
    {
      title: 'Brain Tumor Detection',
      description: 'Built a robust medical imaging classification system utilizing PCA and majority voting across SVM, KNN, and Random Forest for high-accuracy MRI analysis.',
      tech: ['Python', 'OpenCV', 'Scikit-learn', 'PCA'],
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
      github: '#',
      featured: false
    },
    {
      title: 'Sequence Quest (PSoC)',
      description: 'Designed a low-level embedded system on a PSoC microcontroller featuring secure real-time sequence validation and hardware UART communication.',
      tech: ['Embedded C', 'PSoC', 'UART', 'Hardware'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      github: '#',
      featured: false
    },
    {
      title: 'Temperature Alert System',
      description: 'Implemented a SystemVerilog-based hardware temperature monitoring unit featuring real-time anomaly detection and sensor integration.',
      tech: ['SystemVerilog', 'Hardware', 'Digital Design'],
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800',
      github: '#',
      featured: false
    },
    {
      title: 'DSP for Ultrasonic Echoes',
      description: 'Simulated advanced DSP pipelines in MATLAB, optimizing ultrasonic echo clarity through Total Variation Denoising and Tikhonov Regularization.',
      tech: ['MATLAB', 'Signal Processing', 'Algorithms'],
      image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&q=80&w=800',
      github: '#',
      featured: false
    },
    {
      title: 'Nutrient Calculator',
      description: 'Developed a Python-based data processing application that automates the calculation and analysis of daily nutritional intake.',
      tech: ['Python', 'Data Processing'],
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
      github: '#',
      featured: false
    }
  ];

  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title">Selected Work</h2>
        
        <div className="bento-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bento-card ${project.featured ? 'featured' : 'standard'}`}
            >
              <div className="bento-image-wrapper">
                <img src={project.image} alt={project.title} className="bento-image" />
              </div>
              <div className="bento-content" style={{ padding: '2rem' }}>
                <h3 className="bento-title" style={{ fontSize: '1.4rem' }}>{project.title}</h3>
                <p className="bento-desc" style={{ fontSize: '0.95rem' }}>{project.description}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tech.map((tech, i) => (
                    <span key={i} style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.25rem 0.75rem', 
                      background: 'var(--badge-bg)', 
                      borderRadius: '100px',
                      color: 'var(--text)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="bento-links" style={{ marginTop: 'auto' }}>
                  <a href={project.github !== '#' ? project.github : 'https://github.com/varunvamin'} className="bento-link" target="_blank" rel="noopener noreferrer">
                    View on GitHub <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
