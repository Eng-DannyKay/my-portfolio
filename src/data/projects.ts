import amaliblogImg from "../assets/blog.jpg";
import dodokpoImg from "../assets/assessment.jpg";
import quizappImg from "../assets/quiz.jpg";
import devjobImg from "../assets/devjob.png";
import ecommerceImg from "../assets/ecommerce.jpg";
import configuratorImg from "../assets/3d.jpeg";
import portfolioImg from "../assets/portfolio.jpg";
import wheelsImg from "../assets/car.jpg";


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
    description: "Blogging Platform with article workflow and user dashboard",
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
    githubUrl: "#",
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
  {
    id: 7,
    title: "Personal Portfolio Website",
    description:
      "Modern full-stack portfolio showcasing projects and professional experience",
    longDescription:
      "A responsive, feature-rich portfolio website built to showcase development projects, technical skills, and professional experience. The frontend leverages React with TypeScript, Redux Toolkit for state management, and SCSS for styling with a modern dark/light theme system. The backend is powered by Node.js and Express with MongoDB for data persistence, featuring a contact form with email notifications. The site includes smooth animations, project filtering, an interactive skills section, and a comprehensive experience timeline. Deployed with optimized performance and SEO best practices.",
    image: portfolioImg,
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "SCSS",
      "Vite",
    ],
    githubUrl: "https://github.com/Eng-DannyKay/my-portfolio",
    liveUrl: "https://danielforson.onrender.com/",
    featured: true,
    isPrivateProject: false,
  },
  {
    id: 8,
    title: "Wheels Car Rental",
    description:
      "Full-featured car rental platform with booking management and payment processing",
    longDescription:
      "A comprehensive car rental application that streamlines the vehicle booking process. Users can browse available vehicles, view detailed specifications, check real-time availability, and make reservations with flexible date ranges. The platform features secure payment integration, booking management dashboard, and automated confirmation emails. Includes advanced search filters, dynamic pricing based on rental duration, and a responsive design optimized for both mobile and desktop users. Built with modern web technologies to ensure fast performance and seamless user experience.",
    image: wheelsImg,
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Kwabena-Owusu-Achiaw/wheels-fe",
    liveUrl: "https://wheels-fe.vercel.app/",
    featured: true,
    isPrivateProject: false,
  },
];
