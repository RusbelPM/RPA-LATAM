import { News, Technology, TheLast, Science, Sports, Business, Entertainment, Health } from "../page";

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
    {
        to:'/tecnology',
        path:'tecnology',
        Component: Technology,
        name:'Tecnología'
    },
    {
        to:'/science',
        path:'science',
        Component: Science,
        name:'Ciencia'
    },
    {
        to:'/business',
        path:'business',
        Component: Business,
        name:'Negocios'
    },
    {
        to:'/sports',
        path:'sports',
        Component: Sports,
        name:'Deporte'
    },
    {
        to:'/entertainment',
        path:'entertainment',
        Component: Entertainment,
        name:'Entretenimiento'
    },
    {
        to:'/health',
        path:'health',
        Component: Health,
        name:'Salud'
    },
]