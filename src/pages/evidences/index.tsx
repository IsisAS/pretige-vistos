import React from "react";
import * as styles from "./styles.module.scss";

export default function Evidences(): JSX.Element {
    return (
        <div>
            <div className={styles.containerTitle}>
                <p className={styles.title}>Histórias de Aprovação e Confiança</p>
                <p className={styles.subtitle}>Veja como ajudamos nossos clientes a transformar seus sonhos em realidade, com dedicação e cuidado em cada etapa do processo.</p>
            </div>
            <div className={styles.card}></div>
        </div>
    );
}
