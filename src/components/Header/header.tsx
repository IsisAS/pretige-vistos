import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Logo from "../../assets/images/logo.png";
import "./styles.scss";

export default function Header(): JSX.Element {
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
  };

  const [menus, setMenus] = React.useState(data.site.siteMetadata.menus);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    setMenus((prevMenus) =>
      prevMenus.map((item) =>
        item.route === "/home"
          ? { ...item, activated: true }
          : { ...item, activated: false }
      )
    );

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toNavigate = (menu: Menu) => {
    setMenus(menus.map((m) => ({
      ...m,
      activated: m.route === menu.route,
    })));

    if (menu.route === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (menu.route === "#contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else if (menu.route.startsWith("#")) {
      const sectionId = menu.route.slice(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };


  return (
    <header className={`container ${isScrolled ? "header-fixed" : ""}`}>
      <div className={isMenuOpen ? "menu-icon-left" : "menu-icon"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className='bx bx-menu icon'></i>
      </div>

      <img height={40} style={{ margin: 0 }} src={Logo} alt="Logo" className="logo" />

      <div className={`container-menus ${isMenuOpen ? "open" : ""}`}>
        <img height={40} style={{ margin: 0 }} src={Logo} alt="Logo" className="logo-mobile" />
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
}
