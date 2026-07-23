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
        title: "MLOps Release Automation",
        description: "Cut ML release cycles from 2 weeks to under 6 hours.",
        tech: ["Kubeflow", "SageMaker", "MLflow"]
    },
    {
        title: "GitOps at Scale",
        description: "Multi-env deployments with automated rollback via ArgoCD.",
        tech: ["ArgoCD", "Kubernetes", "Helm"]
    },
    {
        title: "AI-Assisted Incident Response",
        description: "LLM log summarization cut diagnosis time by 35%.",
        tech: ["LLMs", "Prometheus", "Grafana"]
    },
    {
        title: "Infrastructure as Code",
        description: "Terraform provisioning cut manual setup time by 60%.",
        tech: ["Terraform", "AWS", "GCP"]
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
