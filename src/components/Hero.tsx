import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import TypingText from './TypingText';
import ProjectGrid from './ProjectGrid';

const Hero: React.FC = () => {
    const roles = [
        "Cloud Architect",
        "Backend Engineer",
        "DevOps Specialist",
        "AI/ML Enthusiast"
    ];

    return (
        <section className="hero-section">
            <motion.div
                className="hero-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="hero-profile-container">
                    <img src="/headshot.jpeg" alt="Pavan" className="hero-headshot" />
                </div>
                <div className="hero-intro">
                    {/* <h3>Hi there, I'm</h3> */}
                    <h1>Pavan Sai Korlapati</h1>
                    <h3>
                        I am a <TypingText texts={roles} />
                    </h3>
                    <p style={{ marginTop: '3rem', lineHeight: '1.6', color: '#d1d1d1' }}>
                        Specializing in building resilient microservices, optimizing performance,
                        and integrating AI solutions.
                    </p>
                </div>
            </motion.div>

            <motion.div
                className="hero-right"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <ProjectGrid />
            </motion.div>
        </section>
    );
};

export default Hero;
