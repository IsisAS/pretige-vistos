import React from "react";
import { useEvidences } from "../../hooks/useEvidences";

import * as styles from "./styles.module.scss";
import Carousel from "./Caroussel";

export default function Evidences(): JSX.Element {
    const { evidences } = useEvidences();

    return (
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <p className={styles.title}>Histórias de Aprovação e Confiança</p>
                <p className={styles.subtitle}>Veja como ajudamos nossos clientes a transformar seus sonhos em realidade, com dedicação e cuidado em cada etapa do processo.</p>
            </div>
            <Carousel evidences={evidences} />
        </div>
    );
}
