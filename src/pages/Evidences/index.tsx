import React from "react";
import { useEvidences } from "../../hooks/useEvidences";

import * as styles from "./styles.module.scss";
import Carousel from "./Carousel";
import IconComponent from "../../components/Icon"

export default function Evidences(): JSX.Element {
    const { evidences } = useEvidences();

    return (
        <div className={styles.container}>
            <div className={styles.containerHeader}>
                <div className={styles.containerTitle}>
                    <p className={styles.title}>Histórias de Aprovação e Confiança</p>
                    <p className={styles.subtitle}>Veja como ajudamos nossos clientes a transformar seus sonhos em realidade, com dedicação e cuidado em cada etapa do processo.</p>
                </div>
            </div>
            <Carousel evidences={evidences} />
            <div className={styles.containerArrowRight}>
                <p className={styles.titleInfo}>Arraste para o lado</p>
                <IconComponent library="fa6" name="FaArrowRightLong" size={30} color="#c0c0c0" />
            </div>
        </div>
    );
}
