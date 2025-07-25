import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { experiences } from '../../data/experience';

const Experience: React.FC = () => {
    const workExperience = experiences.filter(exp => exp.type === 'work');
    const education = experiences.filter(exp => exp.type === 'education');

    const formatDate = (dateStr: string, current: boolean) => {
        if (current) return 'Present';
        if (!dateStr) return 'Present';

        const [year, month] = dateStr.split('-');
        const date = new Date(parseInt(year), parseInt(month) - 1);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    };

    const ExperienceCard: React.FC<{ experience: typeof experiences[0]; index: number }> = ({ experience, index }) => (
        <div className={`experience__item animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
            <div className="experience__item-icon">
                {experience.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
            </div>

            <div className="experience__item-content">
                <div className="experience__item-header">
                    <h3 className="experience__item-title">{experience.title}</h3>
                    <div className="experience__item-meta">
                        <span className="experience__item-company">{experience.company}</span>
                        <span className="experience__item-location">
              <MapPin size={14} />
                            {experience.location}
            </span>
                        <span className="experience__item-date">
              <Calendar size={14} />
                            {formatDate(experience.startDate, false)} - {formatDate(experience.endDate, experience.current)}
            </span>
                    </div>
                </div>

                <div className="experience__item-description">
                    {experience.description.map((desc, descIndex) => (
                        <p key={descIndex}>{desc}</p>
                    ))}
                </div>

                <div className="experience__item-technologies">
                    {experience.technologies.map((tech) => (
                        <span key={tech} className="experience__item-tech">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <div className="experience__header">
                    <h2 className="experience__title animate-fade-in-up">Experience & Education</h2>
                    <p className="experience__description animate-fade-in-up animation-delay-200">
                        My professional journey and educational background
                    </p>
                </div>

                <div className="experience__content">
                    <div className="experience__section">
                        <h3 className="experience__section-title animate-fade-in-up animation-delay-400">
                            <Briefcase size={24} />
                            Work Experience
                        </h3>
                        <div className="experience__timeline">
                            {workExperience.map((exp, index) => (
                                <ExperienceCard key={exp.id} experience={exp} index={index} />
                            ))}
                        </div>
                    </div>

                    <div className="experience__section">
                        <h3 className="experience__section-title animate-fade-in-up animation-delay-600">
                            <GraduationCap size={24} />
                            Education
                        </h3>
                        <div className="experience__timeline">
                            {education.map((exp, index) => (
                                <ExperienceCard key={exp.id} experience={exp} index={index + workExperience.length} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;