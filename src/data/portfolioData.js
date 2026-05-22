import profileImage from "../assets/profile.jpeg";

export const personalInfo = {
  firstName: "Navya Mani Sri",
  fullName: "Navya Mani Sri Angalakuduru",
  role: "AI & Full Stack Developer",
  tagline: "Building intelligent, responsive web experiences",
  email: "navyamanisri26@gmail.com",
  github: "https://github.com/navyamanisri",
  linkedin:
    "https://www.linkedin.com/in/navya-mani-sri-angalakuduru-838b36332/",
  profileImage,
  college: "R.V.R. & J.C. College of Engineering",
  degree: "B.Tech in Computer Science & Engineering (AI & ML)",
};

export const education = {
  degree: "B.Tech in CSE (AI & ML)",
  institution: "R.V.R. & J.C. College of Engineering",
  cgpa: "9.4",
  graduationYear: "2027",
};

export const certifications = [
  {
    title: "EduSkills Full Stack Developer Virtual Internship",
    issuer: "EduSkills",
  },
  {
    title: "NPTEL — Data Structures & Algorithms",
    issuer: "NPTEL",
  },
];

export const leadership = [
  "NSS Member — community service and campus initiatives",
  "Coordinated technical and cultural events",
];

export const skills = [
  { name: "React.js", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "AI/ML Fundamentals", category: "AI & ML" },
];

export const projects = [
  {
    title: "AI Resume Interview Assistant",
    description:
      "AI-powered interview practice platform that generates role-specific questions from resumes and delivers structured feedback for job preparation.",
    stack: ["React", "JavaScript", "AI APIs", "REST"],
    highlight: "Featured",
  },
  {
    title: "MAG-BERT-ARL for Fair Automated Video Interview Assessment",
    description:
      "Research-oriented NLP system focused on fair, automated video interview evaluation using advanced language models and adaptive learning.",
    stack: ["Python", "BERT", "NLP", "Deep Learning"],
    highlight: "Research",
  },
  {
    title: "E-Commerce Website",
    description:
      "Fully responsive online store with product catalog, cart workflow, and a clean shopping experience optimized for modern browsers.",
    stack: ["React", "CSS", "Responsive UI", "JavaScript"],
    highlight: "Web App",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
