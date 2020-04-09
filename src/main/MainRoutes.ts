import { RouteProps } from "react-router";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Skills from "../pages/skills/Skills";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";

const MainRoutes : RouteProps[] = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/skills',
        component: Skills
    },
    {
        path: '/projects',
        component: Projects
    },
    {
        path: '/contact',
        component: Contact
    }
]

export default MainRoutes;