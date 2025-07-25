export interface Experience {
    id: number;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string[];
    technologies: string[];
    type: 'work' | 'education';
}

export const experiences: Experience[] = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Amalitech Ghana",
        location: "Takoradi, Ghana",
        startDate: "2024-09",
        endDate: "",
        current: true,
        description: [
            "Developed responsive web applications using Angular, React and Nest Js",
            "Collaborated with UX designers to implement pixel-perfect designs",
            "Mentored junior developers and conducted code reviews",
            "Improved application performance through optimization techniques"
        ],
        technologies: ["Angular","React","Nest.Js", "TypeScript", "Next.js", "GraphQL", "AWS", "Node.js", "MongoDB"],
        type: "work"
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "National Service - Amalitech Ghana",
        location: "Takoradi, Ghana",
        startDate: "2023-10",
        endDate: "2024-09",
        current: false,
        description: [
            "Developed and maintained multiple client-facing web applications",
            "Implemented responsive designs and ensured cross-browser compatibility",
            "Worked closely with backend team to integrate RESTful APIs",
            "Participated in agile development process and daily standups"
        ],
        technologies: ["Angular","React", "JavaScript", "Sass","TailwindCSS"],
        type: "work"
    },
    {
        id: 3,
        title: "Software Developer",
        company: "Freelance",
        location: "Remote",
        startDate: "2022-03",
        endDate: "2023-05",
        current: false,
        description: [
            "Built responsive websites using HTML, CSS,Angular, React and JavaScript",
            "Assisted senior developers in maintaining existing codebases",
            "Learned modern development practices and version control with Git",
            "Contributed to improving website loading speeds and SEO"
        ],
        technologies: ["Angular","react","HTML5", "CSS3", "JavaScript", "jQuery", "PHP"],
        type: "work"
    },
    {
        id: 4,
        title: "Bachelor of Technology in Information Technology",
        company: "Takoradi Technical University",
        location: "Takoradi, Ghana",
        startDate: "2024-01",
        endDate: "2025-01",
        current: false,
        description: [
            "Graduated Takoradi Technical University with GPA 3.8/4.0",
            "Specialized in Web Development and Software Engineering",
            "Completed final year project on school project management systems",
            "Active member of Information Technology Student Association"
        ],
        technologies: ["Java", "Python", "Laravel", "SQL", "Data Structures"],
        type: "education"
    },
    {
        id: 4,
        title: "Higher National Diploma in Information Technology",
        company: "Takoradi Technical University",
        location: "Takoradi, Ghana",
        startDate: "2021-01",
        endDate: "2023-01",
        current: false,
        description: [
            "Graduated Takoradi Technical University with GPA 3.5/4.0",
            "Studied Information Technology with focus on networking, hardware systems, computer applications, and software engineering",
            "Completed final year project on online file sharing systems",
            "Executive member of Information Technology Student Association (Interest ana Innovation Coordinator)"
        ],
        technologies: ["Node.js", "HTML", "CSS", "SQL", "Data Structures"],
        type: "education"
    }
];