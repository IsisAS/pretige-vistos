import React from "react";
import * as styles from "./styles.module.scss";
import { useServices } from "../../hooks/useService";
import IconComponent from "../../components/Icon";
import Icons from "../../assets/icons/index.js";

export default function Services(): JSX.Element {
    const { touristVisa, electronicsVisa, tab, changeTab } = useServices();

    return (
        <div className={styles.container}>
            <p className={styles.title}>Serviços</p>

            <div className={styles.containerTabs}>
                {tab.map((item) => (
                    <button
                        key={item.title}
                        className={`${styles.tab} ${item.selected ? styles.selected : styles.unselected}`}
                        onClick={() => changeTab(item)}
                    >
                        {item.title}
                    </button>
                ))}
            </div>

            {tab[0].selected ? (
                <div className={styles.containerServices}>
                    {touristVisa?.map((item) => (
                        <div key={item.title} className={styles.card}>
                            <img src={Icons[item.icon]?.default} alt={item.title} className={styles.icon} />
                            <p className={styles.cardTitle}>{item.title}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.containerServices}>
                    {electronicsVisa?.map((item) => (
                        <div key={item.title} className={styles.card}>
                            <img src={Icons[item.icon]?.default} alt={item.title} className={styles.icon} />
                            <p className={styles.cardTitle}>{item.title}</p>
                        </div>
                    ))}
                </div>
            )}
            <div>

            </div>
            <a href="https://wa.me/5561994530124" target="_blank" rel="noopener noreferrer" className="button-request">
                Solicite seu Visto Agora
                <IconComponent library="fa" name="FaWhatsapp" size={25} color="#1d2647" />
            </a>
        </div>
    )
}