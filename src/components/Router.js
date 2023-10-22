import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage";
export default function Router() {
    let tempRoutes = [
        {
            path: '',
            element: <MainLayout />,
            children: [
                { path: '', element: <HomePage /> },
                { path: '/about', element: <AboutPage /> },
                { path: '/services', element: <ServicePage /> },
                { path: '/projects', element: <ProjectPage /> },
                { path: '/contact', element: <ContactPage /> },
                {
                    path: '*',
                    element: <NotFoundPage />
                }
            ],
        },


    ]

    const routes = useRoutes(tempRoutes);

    return routes;
}
