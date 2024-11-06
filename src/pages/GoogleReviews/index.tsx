import React from "react";
import * as styles from "./styles.module.scss";

export default function GoogleReviews(): JSX.Element {
    React.useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
      <div className={styles.container}>
          <div
            className="elfsight-app-90bf9cc0-6a12-423a-9cd7-dd7c7cc25743"
            data-elfsight-app-lazy
        ></div>
      </div>
    )
}