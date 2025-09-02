// AI/ML Projects data for Kiran Andolu

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  outcomes: string[];
  category: 'ai-ml' | 'data-engineering' | 'mlops' | 'analytics';
  featured: boolean;
  image?: string;
  demoUrl?: string;
  codeUrl?: string;
}

export const projects: ProjectItem[] = [
  {
    id: "vintage-platform",
    title: "Vintage Platform - ML Pipeline Architecture",
    description: "Engineered PySpark ETL pipelines processing 2M+ records per batch with advanced fraud detection models achieving 92% accuracy.",
    longDescription: "Comprehensive ML platform featuring end-to-end data pipelines, advanced fraud detection using ensemble methods, and semantic search capabilities for financial crime investigation.",
    technologies: ["PySpark", "XGBoost", "LightGBM", "Random Forest", "OpenSearch", "NLP", "Python", "AWS"],
    outcomes: [
      "Improved ML feature availability by 40%",
      "Achieved 92% accuracy in fraud detection",
      "Reduced investigation time by 50%",
      "Processing 2M+ records per batch"
    ],
    category: 'ai-ml',
    featured: true,
    image: "/assets/projects/vintage-platform.jpg"
  },
  {
    id: "predictive-card-analytics",
    title: "Predictive Analytics for Card Transactions",
    description: "Built ML-ready pipelines using PySpark and Hadoop to process large-scale transaction data with anomaly detection reducing false positives by 30%.",
    longDescription: "Real-time transaction monitoring system with advanced statistical modeling for fraud detection and risk assessment in financial transactions.",
    technologies: ["PySpark", "Hadoop", "Python", "scikit-learn", "Spring Boot", "REST APIs", "Statistical Modeling"],
    outcomes: [
      "Improved anomaly detection efficiency by 35%",
      "Reduced false positives by 30%",
      "Accelerated ML pipeline usage by 25%",
      "Real-time transaction processing"
    ],
    category: 'analytics',
    featured: true,
    image: "/assets/projects/card-analytics.jpg"
  },
  {
    id: "customer-behavior-prediction",
    title: "Customer Behavior Prediction System",
    description: "Migrated monolithic systems to microservices for real-time ML deployment, building predictive models that improved intervention success by 28%.",
    longDescription: "Advanced customer analytics platform using machine learning to predict churn, engagement patterns, and optimize targeted interventions.",
    technologies: ["Spring Boot", "Decision Trees", "Random Forest", "Gradient Boosting", "PySpark", "Microservices"],
    outcomes: [
      "Reduced system latency by 35%",
      "Improved targeted intervention success by 28%",
      "Reduced model training time by 40%",
      "Real-time ML model deployment"
    ],
    category: 'ai-ml',
    featured: true,
    image: "/assets/projects/customer-behavior.jpg"
  },
  {
    id: "pension-claims-analytics",
    title: "Pension Claims Analytics Platform",
    description: "Designed caching and batch processing solutions reducing ETL runtime by 30% with automated reporting for claim analysis.",
    longDescription: "Enterprise-scale pension claims processing system with automated data pipelines, interactive dashboards, and optimized data retrieval for regulatory compliance.",
    technologies: ["MemCache", "Spring Batch", "JSP", "JavaScript", "AWS", "Hibernate ORM", "Data Pipelines"],
    outcomes: [
      "Reduced ETL runtime by 30%",
      "Accelerated claim review by 20%",
      "Improved retrieval performance by 28%",
      "Automated regulatory reporting"
    ],
    category: 'data-engineering',
    featured: false,
    image: "/assets/projects/pension-analytics.jpg"
  },
  {
    id: "work-credit-modernization",
    title: "Work Credit Application Modernization",
    description: "Refactored legacy applications into Spring IOC modules, creating scalable ML-ready pipelines and reducing data errors by 30%.",
    longDescription: "Complete modernization of legacy patent processing system with containerized deployment, automated data validation, and ML-ready data pipelines.",
    technologies: ["Spring IOC", "Docker", "AWS ECS", "REST", "SOAP", "Data Validation", "JUnit"],
    outcomes: [
      "Reduced data errors by 30%",
      "Improved analytics throughput by 40%",
      "Achieved 99% uptime",
      "Enhanced system maintainability by 35%"
    ],
    category: 'mlops',
    featured: false,
    image: "/assets/projects/work-credit.jpg"
  },
  {
    id: "financial-transaction-analytics",
    title: "Financial Transaction Analytics Engine",
    description: "Designed Spring MVC microservices and automated batch pipelines improving ML model readiness and increasing throughput by 35%.",
    longDescription: "High-performance financial transaction processing system with automated ETL pipelines, interactive monitoring dashboards, and optimized database operations.",
    technologies: ["Spring MVC", "MyBatis", "Oracle", "Quartz Scheduler", "JSP", "JSF", "Batch Processing"],
    outcomes: [
      "Reduced ETL runtime by 30%",
      "Increased throughput by 35%",
      "Improved analyst productivity by 20%",
      "Automated batch processing workflows"
    ],
    category: 'data-engineering',
    featured: false,
    image: "/assets/projects/financial-analytics.jpg"
  }
];

// Featured projects for hero section
export const featuredProjects = projects.filter(project => project.featured);

// Projects by category
export const projectsByCategory = {
  'ai-ml': projects.filter(p => p.category === 'ai-ml'),
  'data-engineering': projects.filter(p => p.category === 'data-engineering'),
  'mlops': projects.filter(p => p.category === 'mlops'),
  'analytics': projects.filter(p => p.category === 'analytics')
};