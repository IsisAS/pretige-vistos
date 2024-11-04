import React from "react";
import { useEvidences } from "../../hooks/useEvidences";

import * as styles from "./styles.module.scss";
import Carousel from "./Carousel";
import IconComponent from "../../components/Icon"

export default function Evidences(): JSX.Element {
    const { evidences } = useEvidences();

    return (
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <p className={styles.title}>Histórias de Aprovação e Confiança</p>
                <p className={styles.subtitle}>Veja como ajudamos nossos clientes a transformar seus sonhos em realidade, com dedicação e cuidado em cada etapa do processo.</p>
                <a href="https://wa.me/5561994530124" target="_blank" rel="noopener noreferrer" className="button-request">
                    Solicite seu Visto Agora
                    <IconComponent library="fa" name="FaWhatsapp" size={25} color="#1d2647" />
                </a>
            </div>
            <Carousel evidences={evidences} />
        </div>
    );
}
