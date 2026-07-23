
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
                        A DevOps/MLOps Engineer with 5 years of experience designing, automating, and operating
                        cloud-native infrastructure and machine learning platforms across healthcare, academic research,
                        and enterprise systems. I build CI/CD pipelines, containerized microservices, and Kubernetes-based
                        deployments on AWS, Azure, and Google Cloud.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        My core focus is reliability engineering: Infrastructure as Code with Terraform, GitOps with ArgoCD,
                        and observability with Prometheus, Grafana, and the ELK Stack — keeping production systems
                        at 99.9%+ uptime with automated rollback and fast incident response.
                    </p>
                    <h3 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Current Focus</h3>
                    <p>
                        I am currently building end-to-end <strong style={{ color: 'var(--accent-color)' }}>MLOps platforms</strong> —
                        automated training, deployment, and drift monitoring with Kubeflow, MLflow, and SageMaker — and
                        applying LLMs to operations, from AI-assisted log summarization to agentic automation workflows.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
