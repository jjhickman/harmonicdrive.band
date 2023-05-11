// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Follow from "./pages/Follow";
import Live from "./pages/Live";
import Music from "./pages/Music";
import Video from "./pages/Video";
// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'music-route',
        title: 'Music',
        path: '/music',
        enabled: true,
        component: Music
    },
    {
        key: 'live-route',
        title: 'Live',
        path: '/live',
        enabled: true,
        component: Live
    },
    {
        key: 'video-route',
        title: 'Video',
        path: '/video',
        enabled: true,
        component: Video
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About
    },
    {
        key: 'follow-route',
        title: 'Follow',
        path: '/follow',
        enabled: true,
        component: Follow
    },
    {
        key: 'contact-route',
        title: 'Contact',
        path: '/contact',
        enabled: true,
        component: Contact
    },
]