// Professional certifications data for Kiran Andolu

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  platform: string;
  dateEarned: string;
  credentialId?: string;
  verificationUrl?: string;
  description: string;
  skills: string[];
  category: 'ai-ml' | 'cloud' | 'data' | 'general';
  featured: boolean;
}

export const certifications: CertificationItem[] = [
  {
    id: "ibm-ai-engineering",
    title: "IBM AI Engineering Professional Certificate",
    issuer: "IBM",
    platform: "Coursera",
    dateEarned: "2023",
    description: "Comprehensive program covering machine learning, deep learning, and AI application development using TensorFlow, Keras, and PyTorch.",
    skills: ["TensorFlow", "Keras", "Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
    category: 'ai-ml',
    featured: true
  },
  {
    id: "microsoft-ai-ml",
    title: "Microsoft AI & ML Engineering Professional Certificate",
    issuer: "Microsoft",
    platform: "Coursera",
    dateEarned: "2023",
    description: "Advanced certification in AI and ML engineering covering Azure ML, MLOps, and production deployment strategies.",
    skills: ["Azure ML", "MLOps", "Model Deployment", "AutoML", "Machine Learning Pipelines"],
    category: 'ai-ml',
    featured: true
  },
  {
    id: "google-ml-engineer",
    title: "Google Cloud Machine Learning Engineer Professional Certificate",
    issuer: "Google Cloud",
    platform: "Coursera",
    dateEarned: "2023",
    description: "Professional certification for designing, building, and deploying ML models on Google Cloud Platform with best practices for production ML.",
    skills: ["Google Cloud ML", "Vertex AI", "BigQuery ML", "TensorFlow", "ML Infrastructure"],
    category: 'cloud',
    featured: true
  },
  {
    id: "ibm-generative-ai",
    title: "IBM Generative AI Engineering Professional Certificate",
    issuer: "IBM",
    platform: "Coursera",
    dateEarned: "2024",
    description: "Cutting-edge certification in generative AI, covering foundation models, prompt engineering, and LLM fine-tuning techniques.",
    skills: ["Generative AI", "Large Language Models", "Prompt Engineering", "Fine-tuning", "Foundation Models"],
    category: 'ai-ml',
    featured: true
  },
  {
    id: "datacamp-ai-engineer",
    title: "Associate AI Engineer for Developers",
    issuer: "DataCamp",
    platform: "DataCamp",
    dateEarned: "2023",
    description: "Practical AI engineering certification focusing on implementing AI solutions for software developers and data practitioners.",
    skills: ["AI Development", "Model Integration", "API Development", "Production AI Systems"],
    category: 'ai-ml',
    featured: false
  },
  {
    id: "coursera-ai-development",
    title: "AI Engineer Development Plan",
    issuer: "Coursera",
    platform: "Coursera",
    dateEarned: "2023",
    description: "Comprehensive learning path for AI engineers covering the full spectrum of AI development from research to production.",
    skills: ["AI Strategy", "ML Engineering", "Deep Learning", "AI Ethics", "Scalable AI Systems"],
    category: 'general',
    featured: false
  }
];

// Featured certifications for main display
export const featuredCertifications = certifications.filter(cert => cert.featured);

// Certifications by category
export const certificationsByCategory = {
  'ai-ml': certifications.filter(cert => cert.category === 'ai-ml'),
  'cloud': certifications.filter(cert => cert.category === 'cloud'),
  'data': certifications.filter(cert => cert.category === 'data'),
  'general': certifications.filter(cert => cert.category === 'general')
};

// Recent certifications (last 2 years)
export const recentCertifications = certifications.filter(cert => {
  const certYear = parseInt(cert.dateEarned);
  const currentYear = new Date().getFullYear();
  return (currentYear - certYear) <= 2;
});