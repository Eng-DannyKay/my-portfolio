import amaliblogImg from "../assets/blog.jpg";
import dodokpoImg from "../assets/assessment.jpg";
import quizappImg from "../assets/quiz.jpg";
import devjobImg from "../assets/devjob.png";
import ecommerceImg from "../assets/ecommerce.jpg";
import configuratorImg from "../assets/3d.jpeg";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  isPrivateProject?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Blogging Platform ",
    description:
      "Blogging Platform with article workflow and user dashboard",
    longDescription:
      "It features an intuitive rich text editor for creating articles, a multi-step review and approval workflow, and a user-friendly reader interface. Users can manage their posts through a personalized dashboard, ensuring seamless article creation, submission, and publishing within the organization.",
    image: amaliblogImg,
    technologies: [
      "Angular",
      "Scss",
      "Ngrx",
      "Tinymce Editor",
      "websockets",
      "Chart.js",
    ],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    isPrivateProject: true,
  },
  {
    id: 2,
    title: "Assessment Platform",
    description:
      "Comprehensive test management and candidate analytics platform",
    longDescription:
      "Assessment Platform with a full-featured designed for educational institutions and training organizations. It allows test managers to create, schedule, and dispatch tests, while providing candidates with a real-time dashboard to track their performance and progress. The platform includes support for various question types, auto-grading, proctoring protocols, and insightful analytics visualizations. ",
    image: dodokpoImg,
    technologies: ["Angular", "TypeScript", "Ngrx", "Express.Js", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    isPrivateProject: true,
  },
  {
    id: 3,
    title: "Quiz App",
    description:
      "Interactive quiz platform for knowledge testing and engagement",
    longDescription:
      "A user-friendly quiz application designed to deliver short quizzes across various subjects. The platform features multiple-choice questions, instant feedback, scoring, and responsive design for mobile and desktop. Ideal for learning reinforcement, training, or casual knowledge testing. Built with React and Chart.js for rich UI and performance analytics.",
    image: quizappImg,
    technologies: ["React", "Styled Component", "TypeScript"],
    githubUrl: "https://github.com/Eng-DannyKay/frontendQuizApp_",
    liveUrl: "https://frontend-quiz-app-theta.vercel.app/",
    featured: false,
    isPrivateProject: false,
  },
  {
    id: 4,
    title: "DevJob",
    description:
      "Developer-focused job search platform with full time filtering and location-based search",
    longDescription:
      "DevJob is a job discovery platform tailored for developers, enabling users to search and filter job listings based on role, tech stack, experience level, and location. The app provides a clean, responsive UI, bookmark functionality, and integrations with external job APIs to fetch the latest listings. Built using React and Node.js for seamless performance and scalability.",
    image: devjobImg,
    technologies: ["Angular", "TypeScript", "Css"],
    githubUrl: "https://github.com/Eng-DannyKay/DevJobs",
    liveUrl: "https://devjobsproject1.netlify.app/",
    featured: false,
    isPrivateProject: false,
  },

  {
    id: 5,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with modern UI and secure payment processing",
    longDescription:
      "A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, order management, and Stripe payment integration.",
    image: ecommerceImg,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    githubUrl: "https://github.com/Eng-DannyKay/ecommerce-shop",
    liveUrl: "https://ecommerceshopproject.netlify.app/",
    featured: false,
    isPrivateProject: false,
  },
  {
    id: 6,
    title: "3D Model Configurator",
    description:
      "Interactive 3D modeling platform with admin approval workflow",
    longDescription:
      "Full-stack cutting-edge web-based platform that allows users to upload and configure 3D models for custom product design. Once a model is submitted, it is automatically transformed into a visual, interactive 3D view for previewing. An integrated admin dashboard enables reviewers to inspect the model, assess manufacturability, and approve or reject it for production. The system supports real-time feedback, secure file handling, and user notifications. Built with Angular, Nest.js, and Three.js libraries for 3D rendering.Use this password to log in APP_PASSWORD=J3n8r4v2g5k7",
    image: configuratorImg,
    technologies: [
      "Angular",
      "Nest.js",
      "Three.js",
      "PostgreSQL",
      "Ngrx",
      "Nx monorepo",
    ],
    githubUrl:
      "https://github.com/Bilal-Abubakari/Accelerator-Injection-Molding",
    isPrivateProject: true,
    liveUrl: "https://accelerator-injection-molding-chi.vercel.app/",
    featured: true,
  },
];
