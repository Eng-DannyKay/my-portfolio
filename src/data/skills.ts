export interface Skill {
    name: string;
    level: number;
    category: 'frontend' | 'backend' | 'tools' | 'design';
    icon?: string;
}

export const skills: Skill[] = [
    // Frontend
    { name: 'Angular', level: 95, category: 'frontend' },
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'Next.js', level: 85, category: 'frontend' },
    { name: 'Vue.js', level: 75, category: 'frontend' },
    { name: 'HTML5', level: 95, category: 'frontend' },
    { name: 'CSS3', level: 90, category: 'frontend' },
    { name: 'Sass/SCSS', level: 95, category: 'frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'frontend' },

    // Backend
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Express.js', level: 80, category: 'backend' },
    { name: 'Python', level: 75, category: 'backend' },
    { name: 'PostgreSQL', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 75, category: 'backend' },
    { name: 'Redis', level: 70, category: 'backend' },
    { name: 'GraphQL', level: 70, category: 'backend' },
    { name: 'REST APIs', level: 90, category: 'backend' },

    // Tools
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Docker', level: 75, category: 'tools' },
    { name: 'AWS', level: 70, category: 'tools' },
    { name: 'Vercel', level: 85, category: 'tools' },
    { name: 'Vite', level: 85, category: 'tools' },

    // Design
    { name: 'Figma', level: 80, category: 'design' },
    { name: 'Adobe Photoshop', level: 70, category: 'design' },
    { name: 'UI/UX Design', level: 75, category: 'design' },
    { name: 'Responsive Design', level: 90, category: 'design' }
];

export const skillCategories = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    tools: 'Tools & Technologies',
    design: 'Design & UX'
};