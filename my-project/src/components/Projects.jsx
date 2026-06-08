export function Projects() {
  const projects = [
    {
      title: 'RAG AI Assistant',
      description: 'Retrieval-Augmented Generation chatbot answering queries from PDF documents using semantic search and LLM-powered responses.',
      tech: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Google Gemini API'],
      highlights: [
        'Implemented document ingestion and text chunking',
        'FAISS-based vector storage for efficient retrieval',
        'Integrated Google Gemini API for context-aware responses'
      ]
    },
    {
      title: 'Industrial Machine Health Monitoring System',
      description: 'IoT-based industrial machine monitoring system using ESP32 for real-time health assessment.',
      tech: ['ESP32', 'Embedded C', 'Thingspeak', 'Arduino IDE', 'IoT'],
      highlights: [
        'Integrated temperature, vibration, and current sensors',
        'Wi-Fi communication and ThingSpeak cloud integration',
        'Threshold-based anomaly detection and alert generation'
      ]
    },
    {
      title: 'Brain Tumor Detection Using ML',
      description: 'Brain tumor classification system using MRI images with multiple ML algorithms.',
      tech: ['Python', 'OpenCV', 'Scikit-learn', 'Google Colab'],
      highlights: [
        'Implemented SVM, KNN, and Random Forest classifiers',
        'PCA for dimensionality reduction',
        'Majority voting mechanism for robust predictions'
      ]
    },
    {
      title: 'Science Tutor Bot',
      description: 'Science-focused chatbot using LLMs with two-layer classification system.',
      tech: ['Python', 'Flask', 'Groq API', 'LLMs', 'LoRA/Unsloth'],
      highlights: [
        'Two-layer classification with BART zero-shot classification',
        'Fine-tuned Llama model using LoRA on SciQ dataset',
        'Deployed as Flask web app on Render'
      ]
    },
    {
      title: 'Clinical Code Mapping Engine',
      description: 'Healthcare data processing pipeline for medical code mapping.',
      tech: ['Python', 'Pandas', 'FastAPI', 'REST APIs'],
      highlights: [
        'SNOMED-CT to ICD-10 code mapping using rule-based algorithms',
        'RESTful APIs with FastAPI',
        'Efficient clinical dataset handling with Pandas'
      ]
    },
    {
      title: 'Sequence Quest - PSoC Project',
      description: 'Embedded system on PSoC microcontroller for sequence validation.',
      tech: ['Embedded C', 'PSoC', 'UART', 'LCD'],
      highlights: [
        'Keypad input and LCD interfacing',
        'UART communication for real-time validation',
        'Optimized system reliability through testing'
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <ul className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
