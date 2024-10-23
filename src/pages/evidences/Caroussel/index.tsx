import React from "react";
import * as styles from "./styles.module.scss";

interface Evidence {
    title: string;
    evidence: string;
}

interface CarouselProps {
    evidences: Evidence;
}

const Carousel: React.FC<CarouselProps> = ({ evidences }) => {
    return (
        <div>
            <div className={styles.card}>
                <h3>{evidences?.title}</h3>
                <p>{evidences?.evidence}</p>
            </div>
        </div>
    );
};

export default Carousel;
