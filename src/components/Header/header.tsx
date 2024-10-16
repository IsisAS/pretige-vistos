import * as React from "react"
import { Link } from "gatsby"
import Logo from "../../assets/images/logo.png";
import "./styles.scss";

const Header = ({ siteTitle }) => (
  <header className="container">
    <img
      height={40}
      style={{ margin: 0 }}
      src={Logo}
    />
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
  </header>
)

export default Header
