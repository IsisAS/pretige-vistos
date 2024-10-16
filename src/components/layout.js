import * as React from "react";
import Header from "./Header/header";
import BackgroundVideo from "../assets/videos/background.mp4";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container-video">
        <video autoPlay muted loop className="video-background">
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container-background"/>
        <Header />
      </div>
      {/* <div
          style={{
            margin: `0 auto`,
            maxWidth: `var(--size-content)`,
            padding: `var(--size-gutter)`,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              marginTop: `var(--space-5)`,
              fontSize: `var(--font-sm)`,
            }}
          >
            © {new Date().getFullYear()} &middot; Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div> */}
    </>
  );
};

export default Layout;
