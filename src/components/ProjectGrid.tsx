import React from 'react';
import '../styles/ProjectGrid.css';
import { motion } from 'framer-motion';

interface Project {
    title: string;
    description: string;
    tech: string[];
}

const projects: Project[] = [
    {
        title: "High-Throughput Systems",
        description: "Node.js microservices handling 10k+ requests/sec.",
        tech: ["Node.js", "Microservices", "Optimization"]
    },
    {
        title: "API Latency Reduction",
        description: "Reduced API latency by 45% via caching & optimization.",
        tech: ["Performance", "Caching", "Backend"]
    },
    {
        title: "Serverless Migration",
        description: "Saved 25% costs by re-architecting to serverless.",
        tech: ["AWS Lambda", "Cost Reduction", "Serverless"]
    },
    {
        title: "Scalable IaC Modules",
        description: "Terraform modules adopted by 10+ teams.",
        tech: ["Terraform", "DevOps", "Automation"]
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
};

const ProjectGrid: React.FC = () => {
    return (
        <motion.div
            className="project-grid-container"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {projects.map((project, index) => (
                <motion.div
                    className="project-card"
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                >
                    <div>
                        <div className="project-title">{project.title}</div>
                        <div style={{ fontSize: '0.9rem', color: '#ccc' }}>{project.description}</div>
                    </div>
                    <div className="project-tech">
                        {project.tech.map((t, i) => (
                            <span key={i} className="tech-tag">{t}</span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ProjectGrid;
