import profileImage from "../assets/profile.jpeg";

export const personalInfo = {
  firstName: "Navya Mani Sri",
  fullName: "Navya Mani Sri Angalakuduru",
  nameLine1: "Navya Mani Sri",
  nameLine2: "Angalakuduru",
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

export const educationList = [
  {
    id: "btech",
    level: "B.Tech",
    institution: "R.V.R. & J.C. College of Engineering",
    field: "CSE (AI & ML)",
    scoreLabel: "CGPA",
    score: "9.4",
    year: "2027",
    primary: true,
  },
  {
    id: "intermediate",
    level: "Intermediate",
    institution: "Narayana College",
    field: "MPC",
    scoreLabel: "Score",
    score: "9.6",
    year: null,
    primary: false,
  },
  {
    id: "ssc",
    level: "SSC",
    institution: "St. Ann's School",
    field: null,
    scoreLabel: "GPA",
    score: "10.0",
    year: null,
    primary: false,
  },
];

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
      "An AI-powered full-stack application for resume analysis, ATS improvement, and intelligent interview preparation. Users upload PDF resumes, receive AI-driven feedback, review strengths, and access guidance through a modern dashboard—built with responsive UI and component-based architecture.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Gemini API"],
    highlight: "Featured",
    githubUrl: "",
  },
  {
    title: "MAG-BERT-ARL for Fair Automated Video Interview Assessment",
    description:
      "A fairness-aware assessment system that analyzes text, audio, and visual interview features using multi-modal learning. Explores MAG-BERT, NLP, computer vision, and bias reduction for ethical automated hiring—inspired by IEEE Access research on fair AI evaluation.",
    stack: ["Python", "NLP", "Computer Vision", "MAG-BERT", "Multi-modal"],
    highlight: "Research",
    githubUrl: "",
  },
  {
    title: "E-Commerce Website",
    description:
      "A responsive e-commerce application with product catalog browsing, cart management, routing, and authentication workflows. Built with reusable UI components and a focus on frontend architecture, responsive design, and user experience.",
    stack: ["React.js", "JavaScript", "HTML", "CSS"],
    highlight: "Web App",
    githubUrl: "",
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
