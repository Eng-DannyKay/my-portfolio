import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
    const highlights = [
        {
            icon: <Code size={24} />,
            title: 'Clean Code',
            description: 'Writing maintainable, scalable, and efficient code'
        },
        {
            icon: <Palette size={24} />,
            title: 'UI/UX Focus',
            description: 'Creating beautiful and intuitive user experiences'
        },
        {
            icon: <Zap size={24} />,
            title: 'Performance',
            description: 'Optimizing applications for speed and efficiency'
        },
        {
            icon: <Users size={24} />,
            title: 'Collaboration',
            description: 'Working effectively in cross-functional teams'
        }
    ];

    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about__content">
                    <div className="about__text">
                        <h2 className="about__title animate-fade-in-up">About Me</h2>
                        <div className="about__description animate-fade-in-up animation-delay-200">
                            <p>
                                I'm a passionate full-stack developer with over 4 years of experience
                                creating digital solutions that make a difference. My journey in web
                                development started with a curiosity about how things work, and has
                                evolved into a love for crafting exceptional user experiences.
                            </p>
                            <p>
                                I specialize in modern JavaScript frameworks, particularly React and
                                Node.js, and have a keen eye for design and user experience. I believe
                                in writing clean, maintainable code and staying up-to-date with the
                                latest industry trends and best practices.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies,
                                contributing to open-source projects, or enjoying a good book on
                                software architecture.
                            </p>
                        </div>
                    </div>

                    <div className="about__highlights">
                        {highlights.map((highlight, index) => (
                            <div
                                key={highlight.title}
                                className={`about__highlight-card animate-fade-in-up animation-delay-${(index + 3) * 200}`}
                            >
                                <div className="about__highlight-icon">
                                    {highlight.icon}
                                </div>
                                <h3 className="about__highlight-title">{highlight.title}</h3>
                                <p className="about__highlight-description">{highlight.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;