// Profile data source for Kiran Andolu - Principal AI/ML Engineer
// This data drives the 3D skillverse and loading animations

export const profile = {
  name: "Kiran Andolu",
  title: "Principal AI/ML Engineer • MLOps • Data Platforms",
  location: "Frisco, TX",
  email: "kiranand638@gmail.com",
  phone: "+1 (801) 414-6894",
  
  // Core competencies for 3D visualization
  languages: [
    { label: "Python" },
    { label: "Java" },
    { label: "TypeScript" },
    { label: "SQL" },
    { label: "R" },
    { label: "C++" },
    { label: "Scala" },
    { label: "Julia" }
  ],
  
  frameworks: [
    { label: "TensorFlow" },
    { label: "PyTorch" },
    { label: "Keras" },
    { label: "scikit-learn" },
    { label: "XGBoost" },
    { label: "LightGBM" },
    { label: "Hugging Face" },
    { label: "PySpark" },
    { label: "Spring Boot" },
    { label: "FastAPI" },
    { label: "Flask" },
    { label: "Angular" }
  ],
  
  cloud: [
    { label: "AWS" },
    { label: "EC2" },
    { label: "Lambda" },
    { label: "S3" },
    { label: "SageMaker" },
    { label: "EMR" },
    { label: "Glue" },
    { label: "Step Functions" }
  ],
  
  tools: [
    { label: "Docker" },
    { label: "Kubernetes" },
    { label: "Airflow" },
    { label: "MLflow" },
    { label: "Kafka" },
    { label: "Spark" },
    { label: "Hadoop" },
    { label: "Jenkins" },
    { label: "Databricks" },
    { label: "OpenSearch" }
  ],
  
  // 3D Scene mapping for skillverse visualization
  sceneMap: {
    dataEngineering: ["PySpark", "Airflow", "Kafka", "Spark", "Hadoop", "SQL", "Glue", "EMR"],
    aiMl: ["TensorFlow", "PyTorch", "Keras", "scikit-learn", "XGBoost", "LightGBM", "Hugging Face", "SageMaker"],
    devOps: ["Docker", "Kubernetes", "Jenkins", "AWS", "Lambda", "MLflow", "Databricks", "Step Functions"]
  },
  
  // Career highlights
  experience: "12+ years",
  modelsShipped: "50+",
  uptimeTarget: "99.9%",
  
  // Social links
  social: {
    email: "kiranand638@gmail.com",
    linkedin: "https://linkedin.com/in/kiran-andolu",
    github: "https://github.com/kiran-andolu"
  }
};

export type ProfileType = typeof profile;