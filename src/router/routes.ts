import { News, TheLast, } from "../page";

interface Route {
    to:string;
    path:string;
    Component:() => JSX.Element;
    name:string;
}

export const routes:Route[]= [
    {
        to:'/',
        path:'/',
        Component: TheLast,
        name:'Lo último'
    },
    {
        to:'/news',
        path:'news',
        Component: News,
        name:'Noticias'
    },

]