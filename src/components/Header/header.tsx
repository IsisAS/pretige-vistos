import * as React from "react";
import { navigate } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

import Logo from "../../assets/images/logo.png";
import "./styles.scss";


const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menus {
            title
            route
          }
        }
      }
    }
  `);

  type Menu = {
    route: string;
    activated: boolean;
    title: string;
  }

  const [menus, setMenus] = React.useState(data.site.siteMetadata.menus);

  React.useEffect(() => {
    setMenus((prevMenus) =>
      prevMenus.map((item) =>
        item.route === "/home"
          ? { ...item, activated: true }
          : { ...item, activated: false }
      )
    );
  }, []);

  const toNavigate = (route: Menu) => {
    setMenus(menus.map((menu) => ({
      ...menu,
      activated: menu.route === route.route,
    })));
    // navigate(route.route);
  };

  return (
    <header className="container">
      <img height={40} style={{ margin: 0 }} src={Logo} alt="Logo" />
      <div className="container-menus">
        {menus.map((menu: Menu, index) => (
          <div
            className={menu.activated ? "title-route-activated" : "title-route"}
            key={index}
            onClick={() => toNavigate(menu)}
          >
            {menu.title}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
