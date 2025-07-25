import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import dannyImage from '../../../assets/danny.jpg';

const Hero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToAbout = () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="hero__content">
                    <div className={`hero__text ${isVisible ? 'animate-fade-in-up' : ''}`}>
                        <h1 className="hero__title">
                            Hi, I'm <span className="text-gradient">Daniel Forson</span>
                        </h1>
                        <p className="hero__subtitle animation-delay-200">
                            Full-Stack Developer & AI Enthusiast
                        </p>
                        <p className="hero__description animation-delay-400">
                            I create beautiful, responsive web applications with modern technologies.
                            Passionate about clean code, user experience, and solving complex problems.
                        </p>

                        <div className="hero__actions animation-delay-600">
                            <button
                                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn btn--primary"
                            >
                                Get In Touch
                            </button>
                            <a
                                href="my-cv.pdf"
                                download="./my-cv.pdf"
                                className="btn btn--secondary"
                            >
                                <Download size={18} />
                                Download CV
                            </a>
                        </div>

                        <div className="hero__social animation-delay-800">
                            <a href="https://github.com/Eng-DannyKay" target="_blank" rel="noopener noreferrer" className="hero__social-link">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/daniel-forson-394b04223/" target="_blank" rel="noopener noreferrer" className="hero__social-link">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:danielkojoforson27@gmail.com" className="hero__social-link">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div className={`hero__image ${isVisible ? 'animate-slide-in-right' : ''} animation-delay-400`}>
                        <div className="hero__image-container">
                            <img
                                src={dannyImage}
                                alt="Daniel Forosn - Full Stack Developer"
                                className="hero__image-photo"
                            />
                            <div className="hero__image-decoration"></div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={scrollToAbout}
                    className="hero__scroll-indicator animate-pulse"
                    aria-label="Scroll to about section"
                >
                    <ChevronDown size={24} />
                </button>
            </div>
        </section>
    );
};

export default Hero;