// Education background for Kiran Andolu

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  graduationDate: string;
  gpa?: string;
  honors?: string[];
  relevantCoursework?: string[];
  description?: string;
}

export const education: EducationItem[] = [
  {
    id: "tamu-ms-cs",
    institution: "Texas A&M University",
    degree: "Master of Science",
    field: "Computer Science",
    location: "Kingsville, TX",
    graduationDate: "Dec 2011",
    description: "Advanced studies in computer science with focus on algorithms, data structures, software engineering, and computational theory. Foundation for career in AI/ML and data engineering.",
    relevantCoursework: [
      "Advanced Algorithms",
      "Database Systems",
      "Software Engineering",
      "Computer Networks",
      "Artificial Intelligence",
      "Data Structures",
      "Machine Learning Fundamentals",
      "Statistical Computing"
    ]
  }
];

// Academic achievements and highlights
export const academicHighlights = {
  totalDegrees: education.length,
  highestDegree: "Master of Science",
  fieldOfStudy: "Computer Science",
  graduationYear: "2011",
  institution: "Texas A&M University"
};