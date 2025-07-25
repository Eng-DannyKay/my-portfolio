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
}

export const projects: Project[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with modern UI and secure payment processing",
        longDescription: "A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, order management, and Stripe payment integration.",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
        githubUrl: "https://github.com/username/ecommerce-platform",
        liveUrl: "https://ecommerce-demo.com",
        featured: true
    },
    {
        id: 2,
        title: "Task Management App",
        description: "Collaborative task management tool with real-time updates and team features",
        longDescription: "A modern task management application with drag-and-drop functionality, real-time collaboration, and team management features. Built with React, TypeScript, and Socket.io.",
        image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["React", "TypeScript", "Socket.io", "Node.js", "PostgreSQL"],
        githubUrl: "https://github.com/username/task-manager",
        liveUrl: "https://taskmanager-demo.com",
        featured: true
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "Beautiful weather app with detailed forecasts and location-based services",
        longDescription: "A responsive weather dashboard that provides detailed weather information, forecasts, and weather maps. Features geolocation, multiple city tracking, and beautiful data visualizations.",
        image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation API"],
        githubUrl: "https://github.com/username/weather-dashboard",
        liveUrl: "https://weather-demo.com",
        featured: false
    },
    {
        id: 4,
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media management with data visualization",
        longDescription: "A comprehensive social media analytics dashboard that aggregates data from multiple platforms and provides insights through interactive charts and reports.",
        image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["React", "D3.js", "Node.js", "Redis", "Social APIs"],
        githubUrl: "https://github.com/username/social-dashboard",
        liveUrl: "https://social-demo.com",
        featured: false
    }
];