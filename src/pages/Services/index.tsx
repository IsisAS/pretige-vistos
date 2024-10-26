import React from "react";
import * as styles from "./styles.module.scss";
import { useServices } from "../../hooks/useService";
import IconComponent from "../../components/Icon";

export default function Services(): JSX.Element {
    const { services } = useServices();

    return (
        <div className={styles.container}>
            <p className={styles.title}>Serviços</p>
            <div className={styles.containerServices}>
                {services && services.map((service) => (
                    <div key={service.title} className={styles.service}>
                        <div className={styles.containerIconTitle}>
                            <div className={styles.containerIcon}>
                                {IconComponent && <IconComponent library={service.library} size={22} color="#ffffff" name={service.icon} />}
                            </div>
                            <p className={styles.titleService}>{service.title}</p>
                        </div>
                        <p className={styles.descriptionService}>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}