import { useRoutes } from "react-router-dom";
import HomePage from "./HomePage";
import MainLayout from "../components/layouts/MainLayout";
import AboutPage from "./AboutPage";
import ServicePage from "./ServicePage";
import ContactPage from "./ContactPage";
import NotFoundPage from "./NotFoundPage";
import ProjectPage from "./ProjectPage";
import BlogPage from "./BlogPage";
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
                { path: '/blog', element: <BlogPage/>},
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
