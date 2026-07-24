
import React from 'react';
import '../styles/ProjectGrid.css'; // Reusing for consistency
import { motion } from 'framer-motion';

interface ProjectItem {
    title: string;
    description: string;
    tech: string[];
}

const projectsData: ProjectItem[] = [
    {
        title: "Agentic Procurement Automation Platform",
        description: "Built a multi-agent platform automating enterprise purchasing, vendor negotiation, and decision workflows. Integrated MCP, A2A, and Google ADK with session-based memory and enterprise APIs for scalable, context-aware procurement operations.",
        tech: ["Python", "Google ADK", "Vertex AI", "MCP", "A2A", "FastAPI", "Docker", "GCP"]
    },
    {
        title: "Early Red Spider Mite Detection",
        description: "Led evaluation and deployment of a deep learning model for real-time pest detection on mobile and web. Built Python ETL validation scripts and K-Fold cross-validation with error matrix visualization, reducing prediction errors by 15%.",
        tech: ["Python", "TensorFlow", "Keras", "OpenCV", "scikit-learn"]
    },
    {
        title: "CARLA Simulation Dataset Generation",
        description: "Generated realistic datasets for event-based 3D feature tracking using the CARLA Simulator, applying perspective projection and stereo geometry. Automated test scripts validated data transformations against real-world baselines.",
        tech: ["Python", "CARLA", "NumPy", "OpenCV", "PyTest"]
    },
    {
        title: "University Network Mapper",
        description: "Developed a full-stack application visualizing network coverage and blind spots across campus. Spring backend with MongoDB powers Angular heatmaps via Google Maps API; multi-stage validation improved data accuracy by 25%.",
        tech: ["Java", "Spring", "MongoDB", "Angular", "Google Maps API", "Nmap"]
    }
];

const Projects: React.FC = () => {
    return (
        <section style={{ padding: '4rem 10%', position: 'relative', zIndex: 10 }} id="projects">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="project-card" // Reusing card styling
                        whileHover={{ scale: 1.02 }}
                        style={{ cursor: 'default' }}
                    >
                        <div>
                            <h3 className="project-title" style={{ fontSize: '1.2rem', color: 'var(--accent-color)' }}>{project.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '0.5rem' }}>
                                {project.description}
                            </p>
                        </div>
                        <div className="project-tech" style={{ justifyContent: 'flex-start' }}>
                            {project.tech.map(t => (
                                <span key={t} className="tech-tag" style={{ fontSize: '0.85rem', padding: '4px 10px' }}>{t}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
