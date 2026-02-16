
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section style={{ padding: '4rem 10%', position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>About Me</h2>
                <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        A Lead Software Engineer with a passion for architecting and building high-available cloud-native systems.
                        I specialize in architecting resilient microservices, optimizing application performance,
                        and integrating AI-driven solutions to solve complex, real-world problems.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        My core focus is on creating and upgrading software that is highly scalable, efficient, maintainable and cloud native.
                    </p>
                    <h3 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Current Focus</h3>
                    <p>
                        I am currently deepening my expertise in <strong style={{ color: 'var(--accent-color)' }}>Artificial Intelligence</strong>,
                        with a focus on Deep Learning, Computer Vision, and simulation environments. I'm excited to leverage these skills to
                        build the next generation of intelligent, data-driven applications.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
