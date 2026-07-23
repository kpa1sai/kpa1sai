
import React from 'react';
import '../styles/ProjectGrid.css'; // Reusing for consistency
import { motion } from 'framer-motion';

const techCategories = [
    {
        name: "Cloud Platforms",
        skills: ["AWS (EKS, Lambda, SageMaker)", "Azure (AKS, DevOps)", "GCP (GKE, BigQuery)"]
    },
    {
        name: "Containers & Orchestration",
        skills: ["Docker", "Kubernetes", "Helm", "Kustomize", "Istio Service Mesh"]
    },
    {
        name: "CI/CD & GitOps",
        skills: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "Azure Pipelines", "ArgoCD"]
    },
    {
        name: "Infrastructure as Code",
        skills: ["Terraform", "CloudFormation", "ARM Templates"]
    },
    {
        name: "MLOps & ML Lifecycle",
        skills: ["Kubeflow", "MLflow", "SageMaker Pipelines", "Model Registry", "Drift Monitoring"]
    },
    {
        name: "Observability & Reliability",
        skills: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch", "Distributed Tracing"]
    },
    {
        name: "Data & Workflow Orchestration",
        skills: ["Apache Airflow", "Step Functions", "ETL Automation", "Event-Driven Architecture"]
    },
    {
        name: "Languages & Security",
        skills: ["Python", "Java", "Bash", "SQL", "IAM / RBAC", "HIPAA Compliance"]
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
