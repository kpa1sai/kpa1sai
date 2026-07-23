
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import '../styles/Experience.css';

import logo1 from '../assets/logo_1.png';
import logo2 from '../assets/logo_2.png';
import logo3 from '../assets/logo_3.png';
import logo4 from '../assets/logo_4.png';
import logo5 from '../assets/logo_5.svg';

interface ExperienceItem {
    id: number;
    company: string;
    role: string;
    duration: string;
    logo: string;
    accomplishments: string[];
}

const experienceData: ExperienceItem[] = [
    {
        id: 1,
        company: "Cigna Healthcare",
        role: "Senior DevOps/MLOps Engineer",
        duration: "July 2025 - Present",
        logo: logo1,
        accomplishments: [
            "Designed and implemented end-to-end MLOps pipelines using Kubeflow and AWS SageMaker, enabling automated model training, tuning, validation, and deployment; reduced fraud model release cycles from two weeks to under six hours.",
            "Built CI/CD pipelines with Jenkins and GitLab to support scheduled retraining of TensorFlow and PyTorch models, incorporating data validation, regression testing, and version control across environments.",
            "Improved incident response by integrating LLM-based log summarization with monitoring tools, delivering clear alert insights to Slack and reducing time to diagnose issues by ~35%.",
            "Deployed containerized ML inference services on AWS EKS using Docker and Helm, with autoscaling and fault-tolerance configurations maintaining over 99.9% uptime for real-time scoring systems.",
            "Implemented MLflow for experiment tracking and model lifecycle management, standardizing model versioning and audit trails to support compliance.",
            "Modernized data pipelines by transitioning legacy ETL to AWS Lambda and Step Functions, processing over 10M records monthly and cutting data latency from 12 hours to under 2 hours.",
            "Developed Terraform modules to provision cloud infrastructure, ensuring consistent environments across development, staging, and production while minimizing configuration drift.",
            "Established monitoring and alerting with Prometheus and Grafana, and enabled automated rollback via ArgoCD to recover quickly from deployment issues.",
            "Strengthened data security and compliance with encryption, role-based access controls, and private networking, ensuring adherence to healthcare (HIPAA) data protection standards."
        ]
    },
    {
        id: 2,
        company: "Saint Louis University",
        role: "DevOps Engineer",
        duration: "November 2023 - May 2025",
        logo: logo2,
        accomplishments: [
            "Built and managed Jenkins CI/CD pipelines for Python and Java applications, integrating parallel testing, SonarQube analysis, and automated deployments, reducing release time by 55%.",
            "Migrated legacy on-premise applications to Google Kubernetes Engine (GKE), implementing horizontal pod autoscaling and Ingress-based load balancing to handle peak academic workloads.",
            "Developed and managed Kubeflow Pipelines for multiple ML experiments, automating data preprocessing, model training, evaluation, and artifact versioning for reproducible research workflows.",
            "Created an internal chatbot using the Anthropic API to assist developers with pipeline failures and Kubernetes events by querying live cluster logs, reducing first-level support requests.",
            "Automated Cloud SQL backup and recovery using Python, including snapshot scheduling and cross-region replication, significantly reducing recovery time for critical incidents.",
            "Implemented GitOps workflows using ArgoCD and Kustomize to manage multi-environment deployments, reducing manual drift across development, QA, and production clusters.",
            "Designed Apache Airflow pipelines to ingest IoT and research datasets into BigQuery with validation and incremental load logic for near real-time data availability.",
            "Containerized microservices with Docker and managed deployments with Helm, enabling rolling updates and zero-downtime releases on the LMS platform.",
            "Strengthened cluster security with RBAC policies and network isolation in GKE, and built Grafana dashboards to improve visibility and reduce issue resolution time."
        ]
    },
    {
        id: 3,
        company: "Capgemini Technology Services",
        role: "DevOps Engineer",
        duration: "August 2021 - July 2023",
        logo: logo3,
        accomplishments: [
            "Designed and deployed cloud infrastructure using Terraform, provisioning AWS VPCs, EC2, RDS, and S3 across development, QA, and production, reducing manual setup time by over 60%.",
            "Developed Jenkins CI/CD pipelines for 50+ microservices with unit, integration, and automated smoke tests, reducing production rollback incidents by 40%.",
            "Containerized all microservices using Docker and deployed them on AWS ECS, ensuring 99.9% uptime for POS systems supporting 500+ retail outlets nationwide.",
            "Implemented Kubernetes orchestration with Helm charts, enabling blue-green deployments, horizontal pod autoscaling, and environment-specific configurations.",
            "Integrated SonarQube static analysis and Nexus artifact management into CI pipelines, improving code quality and deployment success rates by 25%.",
            "Developed custom Bash scripts to automate rollback and service recovery, reducing production downtime from 2 hours to less than 20 minutes during incidents.",
            "Configured centralized logging and monitoring with the ELK Stack, AWS CloudWatch, and SNS alerts for rapid identification of application and infrastructure issues.",
            "Optimized microservices communication with Istio service mesh, reducing inter-service latency by 15% under peak load, and automated multi-region deployments to sustain 99.95% availability during high-traffic retail events."
        ]
    },
    {
        id: 4,
        company: "Zoho",
        role: "Technical Staff Intern",
        duration: "March 2021 - July 2021",
        logo: logo4,
        accomplishments: [
            "Developed a resource-consumption-based instrumentation algorithm in Java to identify high CPU and memory usage patterns across enterprise applications, improving monitoring efficiency by 30%.",
            "Designed a workflow to detect underperforming applications using health metrics and performance KPIs, enabling proactive optimization of 50+ enterprise client applications.",
            "Architected Java agents for real-time performance monitoring and alerting, reducing incident detection time from hours to minutes across multiple production environments.",
            "Optimized critical endpoints by profiling SQL queries and refactoring inefficient database interactions, achieving up to 25% faster data retrieval.",
            "Refactored legacy code using Java Streams and modern Java constructs, improving readability and performance without affecting production stability."
        ]
    },
    {
        id: 5,
        company: "Tata Consultancy Services - ION",
        role: "Software Engineer Intern",
        duration: "December 2020 - March 2021",
        logo: logo5,
        accomplishments: [
            "Developed RESTful APIs using Spring Boot, Spring MVC, Spring Data JPA, Hibernate, and Maven, documented with Swagger for seamless front-end integration.",
            "Designed unit and integration tests following TDD/BDD practices, achieving SonarQube code coverage above 85%.",
            "Provided production support by resolving 30+ ServiceNow tickets covering critical bugs, configuration issues, and performance bottlenecks.",
            "Built and integrated React components delivering 2 customer-facing pages, reducing front-end development time by 20%.",
            "Executed manual and automated Jenkins deployments on IBM WebSphere and JBoss servers, including version upgrades and patching with zero downtime."
        ]
    }
]

const ExperienceCard: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            cardRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            cardRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="experience-item-wrapper">
            <motion.div
                className="timeline-dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.2 }}
            />

            <motion.div
                ref={cardRef}
                className={`experience-card ${isExpanded ? 'expanded' : ''}`}
                onClick={() => setIsExpanded(!isExpanded)}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                layout
            >
                <div className="card-glow" />

                <div className="experience-header">
                    <img src={item.logo} alt={item.company} className="company-logo-img" />
                    <div className="experience-info">
                        <h3 className="experience-role">{item.role}</h3>
                        <p className="experience-company">{item.company}</p>
                        <span className="experience-duration">{item.duration}</span>
                    </div>
                    <div className="expand-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            style={{ overflow: 'hidden' }}
                        >
                            <ul className="accomplishments-list">
                                {item.accomplishments.map((acc, i) => (
                                    <motion.li
                                        key={i}
                                        className="accomplishment-item"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 + 0.2 }}
                                    >
                                        {acc}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

const Experience: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const pulseProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="experience-section" id="experience" ref={sectionRef}>
            <motion.h2
                className="experience-title"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Professional Journey
            </motion.h2>

            <div className="experience-container">
                <div className="timeline-line" />
                <motion.div
                    className="timeline-pulse"
                    style={{ top: pulseProgress }}
                />

                {experienceData.map((item, index) => (
                    <ExperienceCard key={item.id} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
