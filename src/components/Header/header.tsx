import * as React from "react";
import Logo from "../../assets/images/logo.png";
import "./styles.scss";
import useHeader from "../../hooks/useHeader";

type Menu = {
  route: string
  activated: boolean
  title: string
}
export default function Header(): JSX.Element {
  const { isScrolled, isMenuOpen, setIsMenuOpen,menus, toNavigate } = useHeader();
  
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
