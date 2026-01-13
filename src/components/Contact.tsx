
import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    return (
        <section style={{
            padding: '6rem 10%',
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            marginBottom: '4rem'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get In Touch</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                    I'm always open to connecting with fellow engineers and exploring new opportunities.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <a href="https://www.linkedin.com/in/kpa1sai" target="_blank" rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '10px 20px',
                            borderRadius: '30px',
                            background: '#0077B5',
                            color: 'white',
                            fontSize: '1.1rem'
                        }}>
                        <FaLinkedin size={24} /> LinkedIn
                    </a>

                    <a href="mailto:korlapatipavansai@gmail.com"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '10px 20px',
                            borderRadius: '30px',
                            background: '#D14836',
                            color: 'white',
                            fontSize: '1.1rem'
                        }}>
                        <FaEnvelope size={24} /> Email
                    </a>
                </div>
            </motion.div>

            <footer style={{ marginTop: '5rem', color: '#555', fontSize: '0.9rem' }}>
                <p>© {new Date().getFullYear()} Pavan. Built with React & Three.js</p>
            </footer>
        </section>
    );
};

export default Contact;
