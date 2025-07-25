import React from 'react';
import {  ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__text">
                        <p>
                            Developed  by Daniel Forson
                        </p>
                        <p className="footer__copyright">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="footer__scroll-top"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;