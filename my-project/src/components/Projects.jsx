import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'RAG AI Assistant',
      description: 'Retrieval-Augmented Generation chatbot answering queries from PDF documents using semantic search and LLM-powered responses.',
      tech: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Gemini API'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
      github: '#',
      featured: false
    },
    {
      title: 'Machine Health Monitor',
      description: 'IoT-based industrial machine monitoring system using ESP32 for real-time health assessment and anomaly detection.',
      tech: ['ESP32', 'Embedded C', 'Thingspeak', 'IoT'],
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
      github: '#',
      featured: false
    },
    {
      title: 'Clinical Data Pipeline',
      description: 'High-performance healthcare data pipeline converting SNOMED-CT to ICD-10 medical codes.',
      tech: ['Python', 'Pandas', 'FastAPI', 'REST'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
      github: '#',
      featured: false
    },
    {
      title: 'Science Tutor LLM',
      description: 'Domain-specific educational chatbot using a two-layer classification system and fine-tuned Llama model via LoRA.',
      tech: ['Python', 'Flask', 'Groq API', 'LoRA', 'NLP'],
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
      github: '#',
      featured: false
    },
    {
      title: 'Brain Tumor Detection',
      description: 'Medical imaging classification system analyzing MRI scans with multiple ML algorithms and majority voting.',
      tech: ['Python', 'OpenCV', 'Scikit-learn', 'PCA'],
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
      github: '#',
      featured: false
    },
    {
      title: 'Sequence Quest (PSoC)',
      description: 'Low-level embedded system designed on a PSoC microcontroller for secure sequence validation and UART comms.',
      tech: ['Embedded C', 'PSoC', 'UART', 'Hardware'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
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
                      background: 'rgba(255,255,255,0.05)', 
                      borderRadius: '100px',
                      color: 'var(--text)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="bento-links" style={{ marginTop: 'auto' }}>
                  <a href={project.github} className="bento-link" target="_blank" rel="noopener noreferrer">
                    View Case Study <ArrowUpRight size={14} />
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
