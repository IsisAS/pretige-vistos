import * as React from "react";
import Header from "./Header/header";
import BackgroundVideo from "../assets/videos/background.mp4";
import "./layout.css";

const Layout = () => {
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
    </>
  );
};

export default Layout;
