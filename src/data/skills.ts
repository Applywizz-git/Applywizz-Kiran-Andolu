// Technical skills data for Kiran Andolu - organized by category

export interface SkillItem {
  name: string;
  level: number; // 1-100
  category: string;
  icon?: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
  color: string; // For UI theming
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    description: "Advanced ML techniques, neural networks, and AI system design",
    color: "teal-accent",
    skills: [
      { name: "Deep Learning", level: 95, category: "ai-ml", description: "Neural Networks, CNN, RNN, LSTM, GANs, Transformers" },
      { name: "TensorFlow", level: 90, category: "ai-ml", description: "Production ML model development and deployment" },
      { name: "PyTorch", level: 90, category: "ai-ml", description: "Research and production deep learning frameworks" },
      { name: "XGBoost", level: 95, category: "ai-ml", description: "Gradient boosting for structured data problems" },
      { name: "scikit-learn", level: 92, category: "ai-ml", description: "Classical ML algorithms and preprocessing" },
      { name: "Hugging Face", level: 85, category: "ai-ml", description: "Transformer models and NLP applications" },
      { name: "Feature Engineering", level: 93, category: "ai-ml", description: "Advanced feature extraction and selection" },
      { name: "Model Optimization", level: 88, category: "ai-ml", description: "Hyperparameter tuning and model compression" }
    ]
  },
  {
    title: "Data Engineering",
    description: "Big data processing, ETL pipelines, and data architecture",
    color: "royal-violet",
    skills: [
      { name: "PySpark", level: 95, category: "data-engineering", description: "Large-scale data processing and analytics" },
      { name: "Apache Kafka", level: 90, category: "data-engineering", description: "Real-time streaming data pipelines" },
      { name: "Airflow", level: 88, category: "data-engineering", description: "Workflow orchestration and scheduling" },
      { name: "Hadoop", level: 85, category: "data-engineering", description: "Distributed storage and processing" },
      { name: "Delta Lake", level: 80, category: "data-engineering", description: "Data lake architecture and versioning" },
      { name: "SQL", level: 95, category: "data-engineering", description: "Advanced query optimization and database design" },
      { name: "ETL Pipelines", level: 92, category: "data-engineering", description: "Data transformation and pipeline architecture" },
      { name: "Data Modeling", level: 87, category: "data-engineering", description: "Dimensional modeling and schema design" }
    ]
  },
  {
    title: "MLOps & DevOps",
    description: "ML infrastructure, deployment, and production monitoring",
    color: "amber-glow",
    skills: [
      { name: "Docker", level: 90, category: "devops", description: "Containerization and microservices architecture" },
      { name: "Kubernetes", level: 88, category: "devops", description: "Container orchestration and scaling" },
      { name: "AWS", level: 93, category: "devops", description: "Cloud infrastructure and ML services" },
      { name: "MLflow", level: 85, category: "devops", description: "ML lifecycle management and model tracking" },
      { name: "Jenkins", level: 82, category: "devops", description: "CI/CD pipeline automation" },
      { name: "Databricks", level: 80, category: "devops", description: "Unified analytics platform" },
      { name: "Model Deployment", level: 90, category: "devops", description: "Production ML model serving and monitoring" },
      { name: "Infrastructure as Code", level: 78, category: "devops", description: "Terraform and CloudFormation" }
    ]
  },
  {
    title: "Programming & Frameworks",
    description: "Core programming languages and development frameworks",
    color: "success-green",
    skills: [
      { name: "Python", level: 95, category: "programming", description: "Primary language for ML and data engineering" },
      { name: "Java", level: 90, category: "programming", description: "Enterprise applications and big data processing" },
      { name: "TypeScript", level: 85, category: "programming", description: "Full-stack web development" },
      { name: "Scala", level: 75, category: "programming", description: "Functional programming for big data" },
      { name: "Spring Boot", level: 88, category: "programming", description: "Microservices and REST API development" },
      { name: "FastAPI", level: 82, category: "programming", description: "High-performance Python web APIs" },
      { name: "React", level: 80, category: "programming", description: "Modern frontend development" },
      { name: "SQL", level: 93, category: "programming", description: "Advanced database querying and optimization" }
    ]
  }
];

// All skills flattened for search and filtering
export const allSkills: SkillItem[] = skillCategories.flatMap(category => 
  category.skills.map(skill => ({ ...skill, category: category.title }))
);

// Top skills for highlight sections
export const topSkills = allSkills
  .sort((a, b) => b.level - a.level)
  .slice(0, 12);

// Skills by proficiency level
export const expertSkills = allSkills.filter(skill => skill.level >= 90);
export const advancedSkills = allSkills.filter(skill => skill.level >= 80 && skill.level < 90);
export const intermediateSkills = allSkills.filter(skill => skill.level >= 70 && skill.level < 80);