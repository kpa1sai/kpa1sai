
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
        role: "Lead Software Engineer",
        duration: "July 2025 - Present",
        logo: logo1,
        accomplishments: [
            "Led, mentored, and managed a 7-member cloud engineering team, overseeing all scrum ceremonies, project backlogs, and execution.",
            "Architected and deployed a stateful, event-driven backend system on AWS using Python (FastAPI) and Celery to orchestrate complex, multi-step workflows with built-in retries and timeouts.",
            "Engineered a high-availability authentication service using Python-based Lambda Authorizers, implementing secure token refresh mechanisms and strict least-privilege access controls for compliance.",
            "Developed a serverless Node.js application on AWS to achieve scalability and reduce operational overhead.",
            "Optimized application performance through code refactoring and containerizing Node.js applications for deployment on AWS ECS.",
            "Devised and implemented token refresh mechanisms using Node.js, Lambda, EventBridge, and AWS Parameter Store for secure, scheduled credential rotation.",
            "Authored and scaled reusable Terraform modules adopted by 10+ teams, enabling standardized, secure provisioning of 50+ resources across a multi-account AWS environment.",
            "Engineered a high-availability, secure AWS-native application stack using ECS Fargate, API Gateway, ALB/NLB, and DocumentDB to support core business functions.",
            "Developed core Java microservices using Spring Boot and REST for data computation and storage, implementing AWS-native security practices with KMS, Secrets Manager, and ACM.",
            "Spearheaded production release cycles including technical documentation, resource tagging, and execution of Gameday operations to ensure platform resilience."
        ]
    },
    {
        id: 2,
        company: "Saint Louis University",
        role: "Senior Backend Engineer",
        duration: "November 2023 - May 2025",
        logo: logo2,
        accomplishments: [
            "Developed AWS Lambda functions using Python and Java to store audio streaming data into S3 for downstream processing.",
            "Created reusable frontend widgets using Node and Angular to be shared across multiple teams.",
            "Led the design and implementation of highly scalable Node.js microservices, improving system performance by 30%.",
            "Implemented backend integrations for frontend widgets, including lazy loading and pagination features.",
            "Spearheaded migration of legacy systems to a modern Node.js-based architecture, improving quality and maintainability.",
            "Implemented comprehensive testing strategies with Jest, including unit, integration, and end-to-end tests.",
            "Integrated frontend and backend services to deliver a seamless experience for business users consuming existing APIs.",
            "Led a team of 5 to develop custom data transformers serving multiple dashboards across the enterprise.",
            "Engineered a resilient, event-driven integration platform between the TDX enterprise system and AWS by deploying multiple connectors to automate workflows and improve scalability.",
            "Designed and implemented automated ETL data pipelines from TDX to AWS S3 buckets to support analytics workloads.",
            "Engineered high-availability backend services that improved user experience, achieving over 90% positive feedback from end users.",
            "Implemented the Observer pattern to make an existing application event-driven and built a Java application to process streaming data.",
            "Established a data validation framework using Kafka, Snowflake, and QuerySurge to ensure high data integrity between Postgres databases and the TDX integration platform.",
            "Devised and evaluated implementation strategies for AI-based analytics in AWS Connect, including cost-benefit analysis for high-performance data processing capabilities."
        ]
    },
    {
        id: 3,
        company: "Capgemini Technology Services",
        role: "Senior Software Engineer",
        duration: "August 2021 - July 2023",
        logo: logo3,
        accomplishments: [
            "Led migration of legacy Java/SOAP components to a modern microservices architecture on AWS, improving scalability and maintainability.",
            "Developed an in-house mailbox application using Java, Spring Boot, Spring Data JPA, Hibernate, Maven, and Postgres.",
            "Performed non-functional requirements (NFR) testing in line with company performance and reliability policies.",
            "Built Infrastructure as Code solutions using Terraform to create secure, modular AWS infrastructure.",
            "Integrated secure internet practices using Parameter Store, KMS, and custom Lambda Authorizers.",
            "Implemented one-time data migration from on-prem Oracle to DynamoDB using DMS and Glue with Aurora RDS as a staging area.",
            "Maintained a hybrid application state supporting both on-prem and cloud environments.",
            "Championed containerization by designing, deploying, and managing highly available application environments on ECS Fargate.",
            "Architected a scalable, serverless, event-driven application using Lambda, boosting performance and responsiveness by 10% while reducing operational overhead.",
            "Developed and maintained infrastructure using Azure Resource Manager and Azure Pipelines with industry-standard templates to enhance efficiency and security.",
            "Saved approximately 25% in application costs by re-architecting a monolithic application into serverless Azure Functions and Azure Container Apps.",
            "Mentored interns on development best practices, testing strategies, and professional ethics."
        ]
    },
    {
        id: 4,
        company: "Zoho",
        role: "Technical Staff Intern",
        duration: "March 2021 - July 2021",
        logo: logo4,
        accomplishments: [
            "Developed an algorithm to enable resource-consumption-based instrumentation for Java applications across the organization.",
            "Designed and engineered a workflow to identify inefficient applications based on health and performance metrics.",
            "Architected Java agents for real-time performance monitoring and alerting for 50+ clients.",
            "Optimized multiple endpoints by identifying bottlenecks and rewriting SQL queries.",
            "Refactored the Java codebase using Java Streams to improve performance and readability."
        ]
    },
    {
        id: 5,
        company: "Tata Consultancy Services - ION",
        role: "Software Engineer Intern",
        duration: "December 2020 - March 2021",
        logo: logo5,
        accomplishments: [
            "Created multiple REST endpoints using Spring MVC with Spring Boot, Data JPA, Maven, Hibernate, and Swagger.",
            "Developed TDD/BDD-based test cases to maintain over 85% SonarQube coverage.",
            "Provided production support by resolving 30+ ServiceNow tickets.",
            "Implemented and utilized React components to build 2 customer-facing pages.",
            "Fixed 50+ bugs and security issues and performed version upgrades.",
            "Performed manual and Jenkins-based deployments on IBM WebSphere and JBoss."
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
