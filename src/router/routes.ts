import { Categories } from "../page";
import Home from "../page/home";

interface Route {
  to: string;
  path: string;
  Component: () => JSX.Element;
  name: string;
}

export const routes: Route[] = [
  {
    to: "/",
    path: "/",
    Component: Home,
    name: "Lo último",
  },
  {
    to: "/technology",
    path: "technology",
    Component: Categories,
    name: "Tecnología",
  },
  {
    to: "/science",
    path: "science",
    Component: Categories,
    name: "Ciencia",
  },
  {
    to: "/business",
    path: "business",
    Component: Categories,
    name: "Negocios",
  },
  {
    to: "/sports",
    path: "sports",
    Component: Categories,
    name: "Deporte",
  },
  {
    to: "/entertainment",
    path: "entertainment",
    Component: Categories,
    name: "Entretenimiento",
  },
  {
    to: "/health",
    path: "health",
    Component: Categories,
    name: "Salud",
  },
];
