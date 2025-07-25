import React, { useState } from 'react';
import { skills, skillCategories } from '../../data/skills';

const Skills: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const filteredSkills = activeCategory === 'all'
        ? skills
        : skills.filter(skill => skill.category === activeCategory);

    const categories = [
        { key: 'all', label: 'All Skills' },
        ...Object.entries(skillCategories).map(([key, label]) => ({ key, label }))
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="skills__header">
                    <h2 className="skills__title animate-fade-in-up">Skills & Technologies</h2>
                    <p className="skills__description animate-fade-in-up animation-delay-200">
                        Here are the technologies and tools I work with
                    </p>
                </div>

                <div className="skills__filters animate-fade-in-up animation-delay-400">
                    {categories.map((category) => (
                        <button
                            key={category.key}
                            className={`skills__filter ${activeCategory === category.key ? 'skills__filter--active' : ''}`}
                            onClick={() => setActiveCategory(category.key)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="skills__grid">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`skills__item animate-fade-in-up animation-delay-${(index % 8 + 1) * 100}`}
                        >
                            <div className="skills__item-header">
                                <h3 className="skills__item-name">{skill.name}</h3>
                                <span className="skills__item-level">{skill.level}%</span>
                            </div>
                            <div className="skills__item-bar">
                                <div
                                    className="skills__item-progress"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;