import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Network } from 'lucide-react';

export function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'AI / Data', 'Hardware / Systems', 'Full-Stack / Web'];

  const stack = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', category: 'AI / Data', type: 'img' },
    { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg', category: 'AI / Data', type: 'img' },
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', category: 'AI / Data', type: 'img' },
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg', category: 'AI / Data', type: 'img' },
    { name: 'LangChain', icon: <Network size={40} strokeWidth={1.5} />, category: 'AI / Data', type: 'lucide' },
    
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg', category: 'Hardware / Systems', type: 'img' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', category: 'Hardware / Systems', type: 'img' },
    { name: 'MATLAB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg', category: 'Hardware / Systems', type: 'img' },
    { name: 'SystemVerilog', icon: <Cpu size={40} strokeWidth={1.5} />, category: 'Hardware / Systems', type: 'lucide' },
    { name: 'Embedded C', icon: <Cpu size={40} strokeWidth={1.5} />, category: 'Hardware / Systems', type: 'lucide' },
    
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', category: 'Full-Stack / Web', type: 'img' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', category: 'Full-Stack / Web', type: 'img', invertDark: true },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', category: 'Full-Stack / Web', type: 'img' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', category: 'Full-Stack / Web', type: 'img' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', category: 'Full-Stack / Web', type: 'img' }
  ];

  const filteredStack = activeTab === 'All' ? stack : stack.filter(item => item.category === activeTab);

  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Tech Stack</h2>
        
        <div className="filter-bar" style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div layout className="tech-grid">
          <AnimatePresence mode="popLayout">
            {filteredStack.map((item) => (
              <motion.div
                layout
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="tech-card"
              >
                <div className="tech-icon-wrapper">
                  {item.type === 'img' ? (
                    <img src={item.icon} alt={item.name} className={`tech-icon ${item.invertDark ? 'invert-dark' : ''}`} />
                  ) : (
                    <div className="tech-icon lucide-icon" style={{ color: 'var(--text)' }}>{item.icon}</div>
                  )}
                </div>
                <span className="tech-name">{item.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
