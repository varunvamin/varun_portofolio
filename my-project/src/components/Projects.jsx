import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'RAG AI Assistant',
      description: 'A production-grade Retrieval-Augmented Generation pipeline leveraging FAISS vector storage and the Gemini API for sub-second semantic search over vast PDF datasets.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
      github: '#',
      featured: true
    },
    {
      title: 'Industrial Machine Monitor',
      description: 'IoT Edge computing system utilizing ESP32 for real-time anomaly detection.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
      github: '#',
      featured: false
    },
    {
      title: 'Clinical Data Pipeline',
      description: 'High-throughput FastAPI microservice mapping SNOMED-CT to ICD-10.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
      github: '#',
      featured: false
    },
    {
      title: 'Science Tutor LLM',
      description: 'LoRA fine-tuned Llama model on SciQ dataset for domain-specific education.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
      github: '#',
      featured: false
    },
    {
      title: 'Brain Tumor Detection',
      description: 'Ensemble ML architecture analyzing MRI scans with PCA and majority voting.',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
      github: '#',
      featured: true
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
              className={`bento-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="bento-image-wrapper">
                <img src={project.image} alt={project.title} className="bento-image" />
              </div>
              <div className="bento-content">
                <h3 className="bento-title">{project.title}</h3>
                <p className="bento-desc">{project.description}</p>
                <div className="bento-links">
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
