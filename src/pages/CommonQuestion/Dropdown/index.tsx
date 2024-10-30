import React from "react";
import * as styles from "./styles.module.scss";
import * as FaIcons from "react-icons/fa";
import useDropdown from "../../../hooks/useDropdown";
import useCommonQuestion from "../../../hooks/useCommonQuestion";

export default function Dropdown(): JSX.Element {
    const { openDropdown, setOpenDropdown } = useDropdown();
    const { commonQuestions } = useCommonQuestion();

    return (
        <div className={styles.container}>
            {commonQuestions && commonQuestions.map((question, index) => (
                <div key={index}>
                    <div className={styles.card} onClick={() => setOpenDropdown(index)}>
                        <p className={styles.title}>{question.question}</p>
                        {openDropdown(index) ? (
                            <FaIcons.FaAngleUp size={24} color="black" />
                        ) : (
                            <FaIcons.FaAngleDown size={24} color="black" />
                        )}
                    </div>
                    {openDropdown(index) && (
                        <div className={styles.cardAnswer}>
                            <p className={styles.answer}>{question.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
