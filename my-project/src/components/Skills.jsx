import { motion } from 'framer-motion';
import { Terminal, Database, Cpu, Code2, Layers, Cloud } from 'lucide-react';

export function Skills() {
  const stack = [
    { name: 'Python', icon: <Terminal size={18} /> },
    { name: 'C / Embedded C', icon: <Cpu size={18} /> },
    { name: 'React', icon: <Code2 size={18} /> },
    { name: 'FastAPI', icon: <Layers size={18} /> },
    { name: 'PyTorch / LangChain', icon: <Database size={18} /> },
    { name: 'Verilog', icon: <Cpu size={18} /> },
    { name: 'Pandas', icon: <Database size={18} /> },
    { name: 'Azure / GCP', icon: <Cloud size={18} /> },
  ];

  // Duplicate for infinite scroll effect
  const marqueeItems = [...stack, ...stack, ...stack];

  return (
    <section id="skills" style={{ padding: '4rem 0', borderTop: '1px solid var(--border)' }}>
      <div className="section-container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3 style={{ color: 'var(--text)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Core Engineering Stack
        </h3>
      </div>
      
      <div className="skills-marquee">
        <div className="marquee-content">
          {marqueeItems.map((item, index) => (
            <div key={index} className="skill-badge">
              {item.icon} {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
