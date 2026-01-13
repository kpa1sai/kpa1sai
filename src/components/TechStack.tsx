
import React from 'react';
import '../styles/ProjectGrid.css'; // Reusing for consistency
import { motion } from 'framer-motion';

const techCategories = [
    {
        name: "Languages",
        skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
        name: "Frameworks",
        skills: ["Spring Boot", "Node.js", "React", "Angular", "Jest"]
    },
    {
        name: "Cloud (AWS)",
        skills: ["Lambda", "ECS", "S3", "DynamoDB", "Aurora RDS", "API Gateway"]
    },
    {
        name: "DevOps",
        skills: ["Terraform", "Docker", "Kubernetes", "CI/CD", "Jenkins"]
    }
];

const TechStack: React.FC = () => {
    return (
        <section style={{ padding: '4rem 10%', position: 'relative', zIndex: 10 }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Tech Stack</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {techCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="project-card" // Reusing card styling
                        style={{ cursor: 'default' }}
                    >
                        <h3 className="project-title" style={{ fontSize: '1.2rem', color: 'var(--accent-color)' }}>{category.name}</h3>
                        <div className="project-tech" style={{ marginTop: '1rem', justifyContent: 'flex-start' }}>
                            {category.skills.map(skill => (
                                <span key={skill} className="tech-tag" style={{ fontSize: '0.9rem', padding: '4px 10px' }}>{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
