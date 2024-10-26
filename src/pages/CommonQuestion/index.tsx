import React from "react";
import Dropdown from "./Dropdown";
import * as styles from "./styles.module.scss";

export default function CommonQuestion(): JSX.Element {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Perguntas Frequentes</p>
            <Dropdown />
        </div>
    );
}