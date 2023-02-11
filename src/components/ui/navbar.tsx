import { Subscribe } from ".";
import { NavLink } from "react-router-dom";
import { routes } from "../../router/routes";

import { useState } from "react";

const classes = {
  navbar: "navbar",
  sidebarMenu: "navbar__sidebar-menu",
  menu: "navbar__menu",
  iconMenu: "navbar_menu__icon-menu",
  drawhambur: "navbar__menu__draw",
  hamburgerclose: "navbar__menu__close",
  hamburgerline1: "navbar__menu__line1",
  hamburgerline2: "navbar__menu__line2",
  menuItems: "navbar__menu-items",
  itemToggle: "navbar__item-toggle",
};

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const hiddenSidebar = () => setSidebar(false);

  return (
    <header className={classes.navbar}>
      <Subscribe />
      <nav className={classes.sidebarMenu}>
        <div className={classes.menu} onClick={showSidebar}>
          {sidebar ? (
            <div className={classes.hamburgerclose}>
              <span className={classes.hamburgerline1}></span>
              <span className={classes.hamburgerline2}></span>
            </div>
          ) : (
            <div className={classes.iconMenu}>
              <span className={classes.drawhambur}></span>
            </div>
          )}
        </div>

        <ul
          className={
            sidebar ? `${classes.menuItems} active` : `${classes.menuItems}`
          }
        >
          {routes.map(({ to, name }) => (
            <li key={to} className={classes.itemToggle}>
              <NavLink
                to={to}
                itemProp="url"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                onClick={hiddenSidebar}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
