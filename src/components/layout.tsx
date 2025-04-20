import * as React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header/header";
import Background from "../assets/images/background.gif";
import "./layout.css";
import Logo from "../assets/images/logoAzul.png";
import IconComponent from "./Icon";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Prestige Vistos</title>
        <meta name="description" content="Prestige Vistos - Facilite sua renovação e obtenção de visto americano com assessoria completa e especializada." />
        <meta name="keywords" content="renovação visto americano, schultz visto, visto para eua, renovação de visto americano 2024, assessoria consular, Globalvisa, Agencia de vistos, renovar visto americano vencido, renovação de visto americano 2022, formulario para visto americano, visto americano valor, solicitação de visto americano, agendamento de visto, agendamento visto americano datas disponíveis, despachante visto americano, consultoria de visto americano, Vistos america, Tirar visto americano, Visto americano Assessoria, ds 160 visto, renovação visto americano 2024, emitir visto americano, renovação visto americano 2023, solution vistos, Now vistos, consulado americano visto, visto americano turista, solicitar visto americano, renovar visto americano 2024, visto, assessoria para tirar visto, renovar visto, ds 160 visto americano, agendamento de visto eua, visto de turista eua, assessoria de visto, agendamento de visto americano, visto de trabalho eua, consultoria visto, como renovar visto americano antes de vencer, pedido de visto americano, visto turista eua, consultoria visto americano, agendar visto americano, como renovar visto americano, Renovação de visto, casv, esta visto americano, Visto eua, visto americano, assessoria de visto americano, agencia de passaportes, como tirar visto americano, Visto americano em Brasília, Visto estados unidos, formulário visto americano, formulário ds 160, renovação visto eua, america vistos, visto americano 2023, visto em brasília, renovar visto americano 2022, formulario ds 160 visto americano, agencia de visto americano, visto americano passo a passo, agendamento visto americano datas disponíveis 2024, Net vistos, preencher ds 160, visto americano porto alegre" />
      </Helmet>
      <div className="container-video">
        <img src={Background} className="background"></img>

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
          <img src={Logo} className="image-footer" />
          <div className="address-title">Edifício Serra Dourada, SCS Q. 2 BL C Lote Nº 22, Sala 108 - Asa Sul, Brasília - DF, 70300-902</div>
          <div className="social-icons">
            <a href="https://wa.me/5561994530124" target="_blank" rel="noopener noreferrer">
              <IconComponent library="io" name="IoLogoWhatsapp" size={20} color="#1D2647" />
            </a>
            <a href="https://www.instagram.com/prestigevistos/?igsh=MWlidnhndGZ6cDhkdw%3D%3D" target="_blank" rel="noreferrer">
              <IconComponent library="ri" name="RiInstagramFill" size={20} color="#1D2647" />
            </a>
            <a href="https://g.co/kgs/9puvSuL" target="_blank" rel="noopener noreferrer">
              <IconComponent library="md" name="MdLocationOn" size={20} color="#1D2647" />
            </a>
          </div>
          <div className="lineSeparator"></div>
          <p className="title-cop"> © {new Date().getFullYear()} Prestige Vistos. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}