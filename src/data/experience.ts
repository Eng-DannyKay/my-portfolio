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
        title: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        startDate: "2022-01",
        endDate: "",
        current: true,
        description: [
            "Led development of responsive web applications using React and TypeScript",
            "Collaborated with UX designers to implement pixel-perfect designs",
            "Mentored junior developers and conducted code reviews",
            "Improved application performance by 40% through optimization techniques"
        ],
        technologies: ["React", "TypeScript", "Next.js", "GraphQL", "AWS"],
        type: "work"
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "StartupXYZ",
        location: "New York, NY",
        startDate: "2020-06",
        endDate: "2021-12",
        current: false,
        description: [
            "Developed and maintained multiple client-facing web applications",
            "Implemented responsive designs and ensured cross-browser compatibility",
            "Worked closely with backend team to integrate RESTful APIs",
            "Participated in agile development process and daily standups"
        ],
        technologies: ["React", "JavaScript", "Sass", "Node.js", "MongoDB"],
        type: "work"
    },
    {
        id: 3,
        title: "Junior Web Developer",
        company: "WebAgency Pro",
        location: "Los Angeles, CA",
        startDate: "2019-03",
        endDate: "2020-05",
        current: false,
        description: [
            "Built responsive websites using HTML, CSS, and JavaScript",
            "Assisted senior developers in maintaining existing codebases",
            "Learned modern development practices and version control with Git",
            "Contributed to improving website loading speeds and SEO"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP"],
        type: "work"
    },
    {
        id: 4,
        title: "Bachelor of Science in Computer Science",
        company: "University of California",
        location: "Berkeley, CA",
        startDate: "2015-09",
        endDate: "2019-05",
        current: false,
        description: [
            "Graduated Magna Cum Laude with GPA 3.8/4.0",
            "Specialized in Web Development and Software Engineering",
            "Completed capstone project on machine learning applications",
            "Active member of Computer Science Student Association"
        ],
        technologies: ["Java", "Python", "C++", "SQL", "Data Structures"],
        type: "education"
    }
];