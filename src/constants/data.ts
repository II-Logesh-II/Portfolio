/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Database, 
  BarChart3, 
  Brain, 
  Search, 
  Code2, 
  Cloud, 
  LineChart, 
  GitBranch,
  Mail,
  Linkedin,
  Github,
  Phone,
  Award,
  GraduationCap,
  Briefcase,
  Activity,
  Zap,
  Microscope,
  TrendingUp
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/II-Logesh-II', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/logeswaran-selvapandian', icon: Linkedin },
];

export const HERO_CONTENT = {
  intro: "Hello, I’m",
  name: "Logeswaran Selvapandian",
  title: "Data Scientist | Data Analyst | Data Engineer",
  summary: "Data Science graduate bridging bioinformatics and healthcare analytics, leveraging ML and scalable data pipelines to deliver business-driven insights.",
  roles: ["DATA ANALYST", "ML", "DATA ENGINEER", "RESEARCH ANALYST"],
  stats: [
    { label: "2+ Years Experience", value: "2+" },
    { label: "SLA Compliance (Reliability)", value: "99%+" },
    { label: "Azure (AZ-900 & AZ-204 Certified)", value: "Azure" },
    { label: "MS in Data Science", value: "UTA" },
  ]
};

export const RUNNING_KEYWORDS = [
  "Python", "SQL", "Azure", "ETL Pipelines", "Machine Learning", 
  "Biological Data Analysis", "Power BI", "Data Analytics", 
  "Predictive Modeling", "Cloud Platforms", "Applied ML"
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I'm a data-focused professional with experience spanning healthcare data engineering, cloud-based ETL systems, research analytics, and machine learning. My work combines technical depth with analytical thinking, from building Azure-based data pipelines and optimizing workflows at Tata Consultancy Services to conducting omics data analysis and pathway interpretation as a Research Assistant at the Bone-Muscle Research Center.",
    "I enjoy solving real-world problems with data, whether through dashboard development, anomaly detection, predictive modeling, or biological insight discovery. I’m especially interested in data science, machine learning, cloud analytics, and building systems that turn raw data into meaningful decisions."
  ],
  highlights: [
    { title: "Data Analytics", description: "KPI analysis, EDA, statistical interpretation, reporting", icon: BarChart3 },
    { title: "Machine Learning", description: "Predictive modeling, anomaly detection, CNNs, evaluation", icon: Brain },
    { title: "Data Engineering", description: "ETL pipelines, Azure workflows, SQL optimization", icon: Database },
    { title: "Research Analytics", description: "Omics analysis, IPA, biological pathway interpretation", icon: Search }
  ]
};

export const SKILLS = [
  {
    category: "Programming & Data",
    skills: ["Python", "R", "SQL", "Java"]
  },
  {
    category: "Statistical & Research Analysis",
    skills: ["EDA", "Statistical Testing", "Time Series Analysis", "PCA", "Data Interpretation"]
  },
  {
    category: "Scientific & Biological Analytics",
    skills: ["Origin", "Ingenuity Pathway Analysis (IPA)"]
  },
  {
    category: "Data Engineering & Cloud",
    skills: ["ETL Pipelines", "Data Warehousing", "Azure", "AWS", "Databricks"]
  },
  {
    category: "Machine Learning",
    skills: ["Predictive Analytics", "CNNs", "Transfer Learning", "Model Evaluation"]
  },
  {
    category: "Visualization Tools",
    skills: ["Tableau", "Power BI", "Streamlit", "Excel", "MS Office"]
  },
  {
    category: "Development Tools",
    skills: ["Git", "GitHub", "Docker", "VS Code"]
  }
];

export const EXPERIENCE = [
  {
    role: "Research Assistant",
    organization: "Bone-Muscle Research Center (BMRC)",
    date: "Jan 2026 – Present",
    location: "Arlington, TX",
    description: "Advisor: Prof. Dr. Marco Brotto | Selected for SURPINT 2026 (Funded Research Program, UTA)",
    bullets: [
      "Process large-scale paired-end FASTQ sequencing and lipidomics datasets, performing quality control, filtering, and normalization to generate analysis-ready omics matrices for downstream analysis.",
      "Conduct differential expression analysis using QIAGEN Ingenuity Pathway Analysis (IPA), generating volcano plots and identifying significantly activated/inhibited canonical pathways, upstream regulators, and potential biomarkers.",
      "Analyze enrichment outputs to evaluate up- and down-regulated genes, uncovering key dysregulated pathways associated with lipid metabolism, ECM remodeling, and inflammatory signaling.",
      "Perform molecular interaction and network analysis to identify interconnected regulatory molecules and disease-associated pathway networks, enabling deeper biological insight discovery."
    ],
    stats: [
      { label: "Omics Data", value: "Large Scale" },
      { label: "IPA Analysis", value: "95%+" },
      { label: "Pathways", value: "50+" },
      { label: "Accuracy", value: "High" }
    ]
  },
  {
    role: "Data Engineer",
    organization: "Tata Consultancy Services",
    date: "Jul 2022 – Jul 2024",
    location: "Chennai, India",
    description: "Client: Kaiser Permanente",
    bullets: [
      "Managed Azure-based data pipelines, automated scheduling workflows, and nightly backups, improving system reliability and data availability by 30%.",
      "Designed, optimized, and maintained ETL workflows using Epic, enhancing query performance and streamlining data processing pipelines.",
      "Performed root cause analysis on pipeline failures by validating database access, identifying impacted tables, and optimizing queries, achieving 99%+ SLA compliance.",
      "Improved data quality and governance by implementing validation frameworks and audit controls, ensuring accuracy, consistency, and regulatory compliance across large-scale healthcare datasets."
    ],
    stats: [
      { label: "Reliability", value: "+30%" },
      { label: "SLA Compliance", value: "99%+" },
      { label: "Data Quality", value: "High" },
      { label: "Query Speed", value: "Optimized" }
    ]
  },
  {
    role: "Associate Engineer",
    organization: "Tata Consultancy Services",
    date: "Jul 2022 – Jul 2024",
    location: "Chennai, India",
    description: "Client: Microsoft Business Unit – IS",
    bullets: [
      "Delivered end-to-end technical support by troubleshooting server, connectivity, and application issues, consistently meeting SLA targets.",
      "Monitored system performance and maintained server health, resolving deployment and connectivity issues to ensure high availability and operational continuity.",
      "Collaborated on backend development and Azure-based cloud integrations, enabling scalable enterprise application deployments.",
      "Developed backend logic using C#, improving API performance and application stability by 25%."
    ],
    stats: [
      { label: "API Performance", value: "+25%" },
      { label: "Availability", value: "High" },
      { label: "SLA Targets", value: "Met" },
      { label: "Support", value: "End-to-End" }
    ]
  },
  {
    role: "Data Analyst Intern",
    organization: "Paathshala Edu-Care",
    date: "June 2021 – Aug 2021",
    location: "Chennai, India",
    bullets: [
      "Analyzed operational performance data and KPIs using Excel and SQL, identifying process inefficiencies and improving productivity by 15% while reducing operational costs by 10%.",
      "Developed interactive KPI dashboards and automated reporting workflows, collaborating with cross-functional teams to achieve 95% KPI attainment and align analytics insights with business objectives.",
      "Managed cloud-based datasets on Google Cloud (GCP), enabling scalable analytics reporting, ensuring high data availability, and supporting Agile-driven workflows."
    ],
    stats: [
      { label: "Productivity", value: "+15%" },
      { label: "Cost Reduction", value: "10%" },
      { label: "KPI Attainment", value: "95%" },
      { label: "Data Access", value: "Scalable" }
    ]
  }
];

export const PROJECTS = [
  {
    title: "Sequencing Data Anomaly Detection (ML)",
    tech: ["Python", "PCA", "UMAP", "Isolation Forest"],
    icon: Microscope,
    node: "01",
    summary: "Developed an end-to-end Python pipeline to process large paired-end FASTQ files, extracting k-mer frequency and read-quality features and applying PCA/UMAP for visualization of sequencing-derived patterns.",
    github: "#",
    demo: "#"
  },
  {
    title: "Federated vs. Centralized Learning — CIFAR-100",
    tech: ["Python", "CNN", "ResNet-18", "PyTorch", "Flower"],
    icon: Brain,
    node: "02",
    summary: "Implemented centralized and federated training pipelines using ResNet-18 (PyTorch, Flower), achieving 51.75% centralized accuracy versus 30% federated accuracy while resolving 25+ stability issues.",
    github: "#",
    demo: "#"
  },
  {
    title: "Overnight News Stock Prediction",
    tech: ["Python", "TF-IDF", "Ridge", "Logistic Regression"],
    icon: TrendingUp,
    node: "03",
    summary: "Predicted next-day stock returns from overnight news using TF-IDF with regression and classification models, achieving 61.9% accuracy and MAE = 0.123.",
    github: "#",
    demo: "#"
  }
];

export const CERTIFICATIONS = [
  { title: "AZ-900: Microsoft Azure Fundamentals", icon: Cloud },
  { title: "AZ-204: Azure Developer Associate", icon: Code2 },
  { title: "SURPINT 2026 — Funded Research Program, UTA", icon: Award }
];

export const EDUCATION = [
  {
    school: "University of Texas at Arlington",
    degree: "Master of Science in Data Science",
    location: "Arlington, TX",
    date: "Expected May 2026",
    gpa: "3.6",
    icon: GraduationCap
  }
];

export const CONTACT_INFO = {
  phone: "+1 (682) 559-8983",
  email: "logeswaran.s2105@gmail.com",
  linkedin: "https://www.linkedin.com/in/loges-waran-s/",
  github: "https://github.com/II-Logesh-II",
};
