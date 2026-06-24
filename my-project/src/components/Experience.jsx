import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="timeline-container">
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <div className="timeline-icon-wrapper">
              <Briefcase size={24} />
            </div>
            <div className="timeline-card">
              <h3 className="timeline-title">AI & NLP Intern</h3>
              <h4 className="timeline-subtitle">Invent Health, Bengaluru</h4>
              <div className="timeline-meta">
                <span><Calendar size={16} /> Feb 2026 – May 2026</span>
              </div>
              <ul className="timeline-highlights">
                {[
                  "Engineered \"Epsilon,\" a Retrieval-Augmented Generation (RAG) study suite featuring a Streamlit web portal and a React/Next.js/Electron desktop client for real-time document intelligence.",
                  "Built end-to-end local data ingestion pipelines utilizing PyMuPDF, LangChain, and FAISS for sub-second semantic retrieval.",
                  "Implemented a multi-model routing system via the Groq API (Llama 4, 3.3, 3.1) and fine-tuned large language models using Unsloth and LoRA adapters.",
                  "Evaluated OCR pipelines using NVIDIA Nemotron and integrated continuous real-time audio transcription via Web Speech APIs."
                ].map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, type: 'spring', delay: 0.2 }}
          >
            <div className="timeline-icon-wrapper">
              <Briefcase size={24} />
            </div>
            <div className="timeline-card">
              <h3 className="timeline-title">Electrical Distribution Intern</h3>
              <h4 className="timeline-subtitle">MESCOM - Mangalore Electricity Supply Company Ltd.</h4>
              <div className="timeline-meta">
                <span><Calendar size={16} /> June 2025 – July 2025</span>
              </div>
              <ul className="timeline-highlights">
                {[
                  "Gained practical exposure to power distribution networks, substations, transformers, and transmission systems.",
                  "Assisted engineers in load analysis, fault identification, and preventive maintenance of electrical infrastructure.",
                  "Observed grid monitoring operations, energy metering systems, and electrical safety protocols."
                ].map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
