import React, { useEffect } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import { type Project } from '../../data/projects';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
    <div className="modal">
    <div className="modal__header">
    <h3 className="modal__title">{project.title}</h3>
        <button onClick={onClose} className="modal__close">
    <X size={24} />
    </button>
    </div>

    <div className="modal__content">
    <div className="modal__image">
    <img src={project.image} alt={project.title} />
    </div>

    <div className="modal__details">
    <p className="modal__description">{project.longDescription}</p>

        <div className="modal__technologies">
        <h4>Technologies Used:</h4>
    <div className="modal__tech-list">
        {project.technologies.map((tech) => (
                <span key={tech} className="modal__tech">{tech}</span>
))}
    </div>
    </div>

    <div className="modal__actions">
    <a
        href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn--secondary"
    >
    <Github size={18} />
    View Code
    </a>
    <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn--primary"
    >
    <ExternalLink size={18} />
    Live Demo
    </a>
    </div>
    </div>
    </div>
    </div>
    </div>
);
};

export default ProjectModal;