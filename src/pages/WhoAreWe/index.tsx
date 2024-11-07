import React from "react";
import * as styles from "./styles.module.scss";
import Background from "../../assets/images/backgrounPassport.png";

export default function WhoAreWe(): JSX.Element {
    return (
        <div className={styles.container}>
            <img src={Background} className={styles.background} />
            <div className={styles.containerPresentation}>
                <div className={styles.containerHeader}>
                    <p className={styles.title}>Prestige Vistos</p>
                    <p className={styles.subtitle}>Quem somos nós</p>
                </div>
                <div>
                    <div className={styles.textPresentation}>
                        ✔ Estamos localizados em Brasília -DF
                    </div>
                    <div className={styles.textPresentation}>
                        ✔ Com mais de 4 anos de experiência, nossa missão é facilitar sua viagem internacional.
                        Cuidamos de toda a burocracia para você não ter estresse.
                    </div>
                    <div className={styles.textPresentation}>
                        ✔ Propósito: Sempre fazer algo a mais para garantir a aprovação dos nossos clientes
                        através das melhores soluções
                    </div>
                    <div className={styles.textPresentation}>
                        ✔ Atender as necessidades dos clientes com cuidado, compromisso e confiança.
                    </div>
                    <div className={styles.textPresentation}>
                        ✔ Cuidar de cada caso levando em conta sua particularidade, valorizando sua história e
                        sonho.
                    </div>
                    <div className={styles.textPresentation}>
                        ✔ Oferecer as melhores soluções e fazer com que nossos clientes tenham sucesso na
                        aprovação do visto.
                    </div>
                    <div className={styles.textPresentation}>
                        ✔ Ter total precaução e segurança com a proteção de dados dos nossos clientes.
                    </div>
                </div>
            </div>
        </div>
    );
}