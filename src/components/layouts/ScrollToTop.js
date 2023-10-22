import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link, useLocation } from 'react-router-dom';


const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname]);
    useEffect(() => {

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const documentHeight = document.body.scrollHeight;

            // Calculate the scroll progress as a percentage
            const progress = (scrollY / (documentHeight - windowHeight)) * 100;
            setScrollProgress(progress);

            if (scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backToTop = () => {
        const duration = 0; // Duration of the scroll animation in milliseconds
        const startTime = performance.now();
        const startTop = window.scrollY;

        const animateScroll = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < duration) {
                const easeInOut = 0.5 - 0.5 * Math.cos(Math.PI * (elapsedTime / duration));
                window.scrollTo(0, startTop * (1 - easeInOut));
                requestAnimationFrame(animateScroll);
            } else {
                window.scrollTo(0, 0);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    return (
        <Link onClick={backToTop}>
            <div className={`back-to-top-button ${isVisible ? 'visible' : ''}`}>
                <div className="progress-barx" style={{ width: 50 }}>
                    <CircularProgressbarWithChildren
                        value={scrollProgress}
                        text={`${Math.round(scrollProgress)}%`}
                        styles={buildStyles({
                            textColor: '#fff',
                            pathColor: '#000',
                            trailColor: 'transparent',
                            textSize: '0px',
                        })}
                    >
                        <Icon style={{ fontSize: 25, color: '#000' }} icon={'ph:arrow-up-bold'}></Icon>
                        {/* <button onClick={backToTop}>Back to Top</button> */}
                    </CircularProgressbarWithChildren>

                </div>

            </div>
        </Link>

    )
}

export default BackToTopButton;
