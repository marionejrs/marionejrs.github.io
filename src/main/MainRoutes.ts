import { RouteProps } from "react-router";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Skills from "../pages/skills/Skills";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";
import Experience from "../pages/experience/Experience";

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
        path: '/experience',
        component: Experience
    },
    // {
    //     path: '/skills',
    //     component: Skills
    // },
    // {
    //     path: '/projects',
    //     component: Projects
    // },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '*',
        component: Home
    }
]

export default MainRoutes;