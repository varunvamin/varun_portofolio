import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from './Experience';
import { Education } from './Education';

export function Journey() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="journey" style={{ padding: '6rem 0' }}>
      <div className="section-container">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Journey</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <div style={{ 
            display: 'flex', 
            background: 'var(--bg-secondary)', 
            padding: '0.5rem', 
            borderRadius: '12px',
            border: '1px solid var(--border)'
          }}>
            <button 
              onClick={() => setActiveTab('experience')}
              style={{
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === 'experience' ? 'var(--accent)' : 'transparent',
                color: activeTab === 'experience' ? '#ffffff' : 'var(--text)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit',
                fontSize: '1rem'
              }}
            >
              Experience
            </button>
            <button 
              onClick={() => setActiveTab('education')}
              style={{
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === 'education' ? 'var(--accent)' : 'transparent',
                color: activeTab === 'education' ? '#ffffff' : 'var(--text)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit',
                fontSize: '1rem'
              }}
            >
              Education
            </button>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Experience />
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Education />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
