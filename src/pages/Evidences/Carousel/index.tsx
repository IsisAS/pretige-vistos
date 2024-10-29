import React, { useRef } from "react";
import * as styles from "./styles.module.scss";

interface Evidence {
    image: string;
    evidence: string;
    userName: string;
}

interface CarouselProps {
    evidences: Evidence[] | null;
}

const Carousel: React.FC<CarouselProps> = ({ evidences }) => {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    let isDragging = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging = true;
        if (carouselRef.current) {
            startX = e.pageX - carouselRef.current.offsetLeft;
            scrollLeft = carouselRef.current.scrollLeft;
        }
    };

    const handleMouseLeave = () => {
        isDragging = false;
    };

    const handleMouseUp = () => {
        isDragging = false;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            className={styles.container}
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}>
            <div className={styles.carouselTrack}>
                {evidences && evidences.length > 0 ? (
                    evidences.map((evidence, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.headerCard}>
                                <p className={styles.titleGroup}>Prestige Vistos</p>
                                <p className={styles.evidence}>{evidence.evidence}</p>
                            </div>
                            <div className={styles.footerCard}>
                                <img src={evidence.image} className={styles.profileImage} />
                                <div className={styles.containerUserInformation}>
                                    <p className={styles.userName}>{evidence.userName}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : null
                }
            </div>
        </div>
    );
};

export default Carousel;
