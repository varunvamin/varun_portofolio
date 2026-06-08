import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'RAG AI Assistant',
      description: 'Retrieval-Augmented Generation chatbot answering queries from PDF documents using semantic search and LLM-powered responses.',
      tech: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Gemini API'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'Industrial Machine Health Monitoring',
      description: 'IoT-based industrial machine monitoring system using ESP32 for real-time health assessment and anomaly detection.',
      tech: ['ESP32', 'Embedded C', 'Thingspeak', 'IoT'],
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'Brain Tumor Detection System',
      description: 'Medical imaging classification system analyzing MRI scans with multiple ML algorithms and majority voting.',
      tech: ['Python', 'OpenCV', 'Scikit-learn', 'PCA'],
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'Science Tutor Bot',
      description: 'Domain-specific educational chatbot using a two-layer classification system and fine-tuned Llama model via LoRA.',
      tech: ['Python', 'Flask', 'Groq API', 'LoRA', 'NLP'],
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'Clinical Code Mapping Engine',
      description: 'High-performance healthcare data pipeline converting SNOMED-CT to ICD-10 medical codes.',
      tech: ['Python', 'Pandas', 'FastAPI', 'REST'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'Sequence Quest (PSoC)',
      description: 'Low-level embedded system designed on a PSoC microcontroller for secure sequence validation and UART comms.',
      tech: ['Embedded C', 'PSoC', 'UART', 'Hardware'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      github: '#',
      demo: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-image-overlay"></div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Code size={18} /> Source Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
