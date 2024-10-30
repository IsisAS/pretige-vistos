import * as React from "react";
import Header from "./Header/header";
import BackgroundVideo from "../assets/videos/background.mp4";
import "./layout.css";
import Logo from "../assets/images/logo.png";
import IconComponent from "./Icon";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <div className="container-video">
        <video autoPlay muted loop playsInline className="video-background">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="container-background" />
        <Header />
        <div className="container-title">
          <p className="title">
            O seu sonho de ir para os Estados Unidos está a um clique de
            distância
          </p>
        </div>
      </div>
      <div
        style={{
          margin: "0 auto",
        }}
      >
        <main>{children}</main>
        <footer className="footer">
          <div className="footer-container-logo">
            <img src={Logo} className="image-footer" />
            <p className="title-cop"> © {new Date().getFullYear()} Prestige Vistos. Todos os direitos reservados.</p>
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com/prestigevistos/?igsh=MWlidnhndGZ6cDhkdw%3D%3D" target="_blank" rel="noreferrer">
              <IconComponent library="fa" name="FaInstagram" size={32} color="#fff" />
            </a>
            <a href="https://wa.me/5561994530124" target="_blank" rel="noopener noreferrer">
              <IconComponent library="fa" name="FaWhatsapp" size={32} color="#fff" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}