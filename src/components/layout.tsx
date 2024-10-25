import * as React from "react";
import Header from "./Header/header";
import BackgroundVideo from "../assets/videos/background.mp4";
import "./layout.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <div className="container-video">
        <video autoPlay muted loop className="video-background">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="container-background" />
        <Header />
        <div className="container-title">
          <p className="title">
            O seu sonho de ir para os Estados Unidos está a um clique de
            distância
          </p>
          <button className="button-request">Solicite seu Visto Agora</button>
        </div>
      </div>
      <div
        style={{
          margin: "0 auto",
        }}
      >
        <main>{children}</main>
        {/* <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      </div>
    </>
  );
}