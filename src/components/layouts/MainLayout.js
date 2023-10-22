import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 576)
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, []);
    useEffect(() => {
        const handleWindowResize = () => {
            setIsMobile(window.innerWidth < 576)
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <>
            <Header isMobile={isMobile} />
            <Outlet context={[isMobile, setIsMobile]} />
            <Footer isMobile={isMobile} />
        </>
    )
}