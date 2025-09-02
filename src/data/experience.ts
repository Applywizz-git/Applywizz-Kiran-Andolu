// Professional experience data for Kiran Andolu

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  achievements: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "capitalone-ml",
    company: "CapitalOne",
    role: "ML Engineer",
    location: "Plano, TX",
    startDate: "Mar 2020",
    endDate: "Present",
    description: [
      "Engineering end-to-end PySpark ETL pipelines processing 2M+ records per batch",
      "Building and fine-tuning fraud detection and credit risk models achieving 92% accuracy",
      "Developing predictive models for customer engagement reducing churn by 15%",
      "Deploying OpenSearch for scalable semantic queries reducing investigation time by 50%"
    ],
    technologies: ["Python", "PySpark", "XGBoost", "LightGBM", "PyTorch", "TensorFlow", "AWS", "Kubernetes", "OpenSearch", "Kafka"],
    achievements: [
      "Improved data accessibility for ML workflows by 40%",
      "Achieved 92% accuracy in fraud detection models",
      "Reduced customer churn by 15% through predictive modeling",
      "Cut investigative reporting time by 50% with semantic search"
    ]
  },
  {
    id: "heartlands-bigdata",
    company: "Heartlands Payment Systems",
    role: "Big Data Engineer",
    location: "Charlotte, NC",
    startDate: "Oct 2017",
    endDate: "Jan 2018",
    description: [
      "Transformed raw transactional data into structured datasets with PySpark and MapReduce",
      "Automated backup and archival processes ensuring regulatory compliance",
      "Engineered advanced features for anomalous transaction detection",
      "Enhanced data retrieval efficiency from MongoDB and Cassandra"
    ],
    technologies: ["PySpark", "MapReduce", "Python", "MongoDB", "Cassandra", "Hadoop", "Hive", "CloudWatch"],
    achievements: [
      "Enhanced predictive fraud model inputs by 40%",
      "Reduced false positives by 30%",
      "Accelerated ML training efficiency by 25%",
      "Improved ETL pipeline execution by 35%"
    ]
  },
  {
    id: "att-analytics",
    company: "AT&T",
    role: "Predictive Analytics Engineer",
    location: "Richardson, TX",
    startDate: "Feb 2013",
    endDate: "Aug 2017",
    description: [
      "Migrated legacy monolithic systems to Spring Boot microservices",
      "Developed Angular 2.0 front-end components for real-time analytics",
      "Built predictive models using Decision Trees, Random Forest, and Gradient Boosting",
      "Exposed ML models via SOAP and REST endpoints for production deployment"
    ],
    technologies: ["Spring Boot", "Angular", "Python", "scikit-learn", "Jenkins", "Netflix OSS", "REST", "SOAP"],
    achievements: [
      "Reduced service latency by 35%",
      "Improved dashboard engagement by 25%",
      "Increased churn prediction accuracy by 28%",
      "Achieved 99.5% uptime for ML pipelines"
    ]
  },
  {
    id: "pbgc-java",
    company: "PBGC",
    role: "Java Developer",
    location: "Washington, DC",
    startDate: "Oct 2012",
    endDate: "Feb 2013",
    description: [
      "Implemented MemCache and AWS ElastiCache for pension claim queries",
      "Developed modular Spring 3.0 components with dependency injection",
      "Built interactive dashboards with JSP, HTML, CSS, and JavaScript",
      "Designed SOAP-based JAX-WS services on AWS EC2 instances"
    ],
    technologies: ["Spring", "AWS", "ElastiCache", "JSP", "JavaScript", "SOAP", "JAX-WS", "EC2"],
    achievements: [
      "Reduced database access latency by 30%",
      "Improved maintainability by 25%",
      "Reduced manual review time by 20%",
      "Increased dataset availability by 40%"
    ]
  },
  {
    id: "uspto-java",
    company: "US Patent & Trademark",
    role: "Jr Java Developer",
    location: "Alexandria, VA",
    startDate: "Jul 2012",
    endDate: "Oct 2012",
    description: [
      "Migrated legacy Work Credit application to Spring IOC modules",
      "Built dynamic JSP and JSF front-end components",
      "Implemented Spring Batch jobs and automated ETL pipelines",
      "Deployed applications in Docker containers on AWS ECS"
    ],
    technologies: ["Spring", "JSP", "JSF", "Docker", "AWS ECS", "Spring Batch", "JUnit"],
    achievements: [
      "Reduced system errors by 30%",
      "Enhanced user interactions by 25%",
      "Reduced batch processing time by 40%",
      "Achieved 99% uptime"
    ]
  },
  {
    id: "pnc-java",
    company: "PNC Bank",
    role: "Jr Developer",
    location: "Strongsville, OH",
    startDate: "May 2012",
    endDate: "Jul 2012",
    description: [
      "Built Spring MVC microservices for processing financial transactions",
      "Designed interactive JSP dashboards with Spring tab library",
      "Optimized MyBatis SQL queries and Oracle stored procedures",
      "Automated batch processing with Spring Quartz scheduling"
    ],
    technologies: ["Spring MVC", "JSP", "MyBatis", "Oracle", "Spring Quartz", "JUnit"],
    achievements: [
      "Reduced ETL runtime by 30%",
      "Improved analyst workflow efficiency by 25%",
      "Accelerated feature extraction by 35%",
      "Cut manual oversight by 40%"
    ]
  },
  {
    id: "kalyan-intern",
    company: "Kalyan Enterprises",
    role: "Java Developer Intern",
    location: "Hyderabad, India",
    startDate: "Jan 2010",
    endDate: "Jul 2010",
    description: [
      "Developed Spring MVC microservices for financial transaction preprocessing",
      "Implemented MyBatis queries with complex joins on Oracle 10g",
      "Built interactive JSP/JSF dashboards with JavaScript and jQuery",
      "Created structured ETL workflows with reusable components"
    ],
    technologies: ["Spring MVC", "MyBatis", "Oracle 10g", "JSP", "JSF", "JavaScript", "jQuery", "JUnit"],
    achievements: [
      "Reduced ETL runtime by 30%",
      "Increased feature extraction efficiency by 25%",
      "Improved analyst productivity by 20%",
      "Enhanced data consolidation accuracy by 28%"
    ]
  }
];