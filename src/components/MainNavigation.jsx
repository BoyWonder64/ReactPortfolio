import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import BannerImage from "../../src/assets/UI_Flat_Banner01a.png";

function MainNavigation() {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact Me" },
  ];

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <div
                  className={classes.navBanner}
                  style={{ backgroundImage: `url(${BannerImage})` }}
                >
                  <span className={classes.navText}>{item.label}</span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
