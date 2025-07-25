import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { projects } from '../../data/projects';
import ProjectModal from './ProjectModal.tsx';

const Projects: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'featured'>('all');
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.featured);

    return (
        <section id="projects" className="projects section">
    <div className="container">
    <div className="projects__header">
    <h2 className="projects__title animate-fade-in-up">Featured Projects</h2>
    <p className="projects__description animate-fade-in-up animation-delay-200">
        Here are some of my recent projects that showcase my skills and experience
    </p>

    <div className="projects__filters animate-fade-in-up animation-delay-400">
    <button
        className={`projects__filter ${filter === 'all' ? 'projects__filter--active' : ''}`}
    onClick={() => setFilter('all')}
>
    All Projects
    </button>
    <button
    className={`projects__filter ${filter === 'featured' ? 'projects__filter--active' : ''}`}
    onClick={() => setFilter('featured')}
>
    Featured
    </button>
    </div>
    </div>

    <div className="projects__grid">
    {filteredProjects.map((project, index) => (
            <div
                key={project.id}
        className={`projects__card animate-fade-in-up animation-delay-${(index + 1) * 200}`}
    >
    <div className="projects__card-image">
    <img src={project.image} alt={project.title} />
    <div className="projects__card-overlay">
    <button
        onClick={() => setSelectedProject(project.id)}
    className="projects__card-button"
    >
    <Eye size={20} />
    View Details
    </button>
    </div>
    </div>

    <div className="projects__card-content">
    <h3 className="projects__card-title">{project.title}</h3>
        <p className="projects__card-description">{project.description}</p>

        <div className="projects__card-technologies">
        {project.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="projects__card-tech">{tech}</span>
))}
    </div>

    <div className="projects__card-actions">
    <a
        href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="projects__card-link"
    >
    <Github size={18} />
    Code
    </a>
    <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="projects__card-link"
    >
    <ExternalLink size={18} />
    Live Demo
    </a>
    </div>
    </div>
    </div>
))}
    </div>
    </div>

    {selectedProject && (
        <ProjectModal
            project={projects.find(p => p.id === selectedProject)!}
        onClose={() => setSelectedProject(null)}
        />
    )}
    </section>
);
};

export default Projects;