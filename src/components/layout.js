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
        </video>
        <div className="container-background"/>
        <Header />
      </div>
    </>
  );
};

export default Layout;
