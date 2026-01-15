import { 
  SiTableau, 
  SiPython, 
  SiMysql, 
  SiPandas, 
  SiNumpy, 
  SiScikitlearn, 
  SiHtml5, 
  SiCss3, 
  SiOpenai,
  SiGoogleanalytics
} from "react-icons/si";
import { FaChartLine, FaBrain, FaDatabase, FaUsers, FaLightbulb, FaChartBar, FaFileExcel } from "react-icons/fa";

// Import internship certificates
import quantiumCert from "@assets/Quantium_internship_1768471022202.jpeg";
import deloitteCert from "@assets/deloitte_internship_1768471022160.jpeg";
import tataCert from "@assets/tata_group_internship_1768471022205.jpeg";

export const resumeData = {
  personalInfo: {
    name: "Dhruv Gupta",
    role: "Business Intelligence & Data Analyst",
    email: "dhruvvgupta70@gmail.com",
    phone: "+91-8109637970",
    linkedin: "https://www.linkedin.com/in/dhruv-gupta-bba-bia",
    instagram: "https://www.instagram.com/its._dhruv__",
    facebook: "https://www.facebook.com/dhruv.gupta.75054689",
    location: "Bhopal, Madhya Pradesh",
    about: "Analytical and detail-oriented BBA BIA student with hands-on experience in SQL, Python, Power BI, and machine learning. Successfully delivered insights through real-world projects and internships at Deloitte, Quantium, and Tata Group. Skilled in data modeling, visualization, and team leadership."
  },
  skills: [
    { name: "Python", icon: SiPython, description: "Data analysis using Pandas, NumPy, Matplotlib, Seaborn" },
    { name: "SQL", icon: SiMysql, description: "Advanced querying, joins, aggregations, optimization" },
    { name: "Power BI", icon: FaChartBar, description: "Data modeling, DAX, dashboard creation, storytelling" },
    { name: "Tableau", icon: SiTableau, description: "Interactive visualization, calculated fields, dashboarding" },
    { name: "Excel", icon: FaFileExcel, description: "Advanced formulas, pivot tables, data cleaning" },
    { name: "Machine Learning", icon: SiScikitlearn, description: "Regression, classification, model evaluation" },
    { name: "Data Engineering", icon: FaDatabase, description: "ELT pipelines, data modeling, architecture" },
    { name: "Generative AI", icon: SiOpenai, description: "Prompt engineering, ChatGPT integration" }
  ],
  experience: [
    {
      company: "Quantium (Forage)",
      role: "Virtual Data Analyst Intern",
      period: "May 2025",
      description: "Conduct customer analytics using segmentation and transactional data. Applied uplift modeling and A/B testing to evaluate marketing strategies. Generated actionable recommendations to improve business strategy.",
      type: "Virtual Internship",
      certificate: quantiumCert
    },
    {
      company: "Deloitte (Forage)",
      role: "Virtual Data Analytics Intern",
      period: "May 2025",
      description: "Performed Practical data challenges simulating industry scenarios and applied Forensic Technology Techniques. Gained insight into analytics for fraud detection and forensic Audits.",
      type: "Virtual Internship",
      certificate: deloitteCert
    },
    {
      company: "Tata Group (Forage)",
      role: "Virtual Data Visualization Intern",
      period: "April 2025 – May 2025",
      description: "Developed data visuals and dashboards to solve real business problems. Applied principles of effective data communication and storytelling. Interpreted complex datasets to translated analytical findings into visual storytelling.",
      type: "Virtual Internship",
      certificate: tataCert
    }
  ],
  projects: [
    {
      id: "ola-campaign",
      title: "Ola Ride Booking Campaign Analysis",
      skills: ["SQL", "SQLite Studio", "Excel"],
      shortDescription: "Executed 25+ advanced SQL queries to analyze customer behavior and route profitability.",
      fullDescription: "Executed 25+ advanced SQL queries on a 5,000+ record simulated ride-booking dataset to analyze customer behavior, route profitability, and ride trends. Segmented customers by fare spending, ranked drivers by performance, and identified surge pricing routes using fare/km logic. Conducted root cause and aggregation-based analysis to report operational inefficiencies.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "boston-housing",
      title: "Boston Housing Price Prediction",
      skills: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      shortDescription: "Developed a machine learning model to predict housing prices based on socio-economic factors.",
      fullDescription: "Developed a machine learning model using Python (sklearn, pandas) to predict housing prices based on various socio-economic factors. Performed data preprocessing, exploratory analysis, and trained regression models with model evaluation. Showcased end-to-end implementation of machine learning pipelines and practical application of coding for predictive analytics.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
    },
    {
      id: "who-website",
      title: "WHO Themed Website",
      skills: ["HTML", "CSS"],
      shortDescription: "Structured and styled multi-page content highlighting WHO health themes.",
      fullDescription: "Structured and styled multi-page content highlighting WHO health themes, using semantic HTML and CSS techniques. Demonstrated proficiency in front-end development, page responsiveness, navigation design, and web design best practices.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  certificates: [
    { title: "5★ SQL Badge", issuer: "HackerRank", date: "May 2025", description: "Demonstrated advanced SQL skills in query design, joins, aggregations, and optimization." },
    { title: "Power BI Badge", issuer: "Microsoft Learn", date: "May 2025", description: "Completed Microsoft’s guided Power BI learning path covering data modeling, DAX, and dashboard creation." },
    { title: "Exploratory Data Analysis", issuer: "Accenture & NASSCOM", date: "July 2025", description: "Aligned with NASSCOM industry competency standards." },
    { title: "Data Analytics Essentials", issuer: "CISCO Networking Academy", date: "Oct 2025", description: "Comprehensive data analytics foundation." },
    { title: "Mastering GenAI & ChatGPT Course", issuer: "GeeksforGeeks", date: "June 2025", description: "Comprehensive course on Generative AI and prompt engineering." },
    { title: "AI for Beginners", issuer: "HP LIFE", date: "June 2025", description: "Fundamental principles of Artificial Intelligence." },
    { title: "SQL (Intermediate)", issuer: "HackerRank", date: "April 2025", description: "Intermediate SQL skills including complex joins and subqueries." },
    { title: "SQL (Basic)", issuer: "HackerRank", date: "March 2025", description: "Fundamental SQL queries and data manipulation." }
  ],
  education: [
    {
      institution: "LNCT University, Bhopal",
      degree: "Bachelor of Business Administration (BBA), Business Intelligence and Analytics",
      period: "2023 – 2026"
    }
  ],
  leadership: [
    {
      role: "Operations Head & Lead Coordinator",
      organization: "Techno Management Fest, LNCT University",
      period: "Sep 2024 – Dec 2024",
      description: "Led the largest student-run management event attended by over 2,000 students and faculty. Oversaw cross-functional operations including finance, logistics, sponsorships, stall allocation, and department coordination. Managed task delegation, secured sponsorships, and supervised technical setup and security logistics."
    },
    {
      role: "Co-Operation Head",
      organization: "BIA Unified Data Science Club",
      period: "Oct 2024 – Present",
      description: "Spearheaded initiatives to foster a vibrant community for data science enthusiasts. Organized club events, managed member engagement, and handled participant coordination."
    },
    {
      role: "Team Leader/ Co-ordinator",
      organization: "Event Management Team, LNCT",
      period: "Sep 2023 – Apr 2025",
      description: "Led a team of 15 volunteers to organize large-scale college fests and orientations. Managed logistics, scheduling, and communication for 7-day events."
    }
  ]
};
