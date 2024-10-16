import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
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

  const { menus } = data.site.siteMetadata;

  return (
    <header className="container">
      <img height={40} style={{ margin: 0 }} src={Logo} alt="Logo" />
      <div className="container-menus">
        {menus.map((menu, index) => (
          <Link to={menu.route} className="menu-items" key={index}>
            {menu.title}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
