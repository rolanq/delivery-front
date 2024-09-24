import React, { useEffect, useState } from "react";
import styles from "./ScrollTop.module.css";
import arrowUp from "../../assets/arrow-up.svg";
import classNames from "classnames";

export const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <section className={styles.bottomSection}>
      <div className={styles.bottomSectionContainer}>
        <div className={styles.bottomSectionRoot}>
          <div className={styles.bottomSectionFrame}>
            <button
              className={classNames(styles.goUpButton, visible ? styles.goUpButtonVisible : styles.goUpButtonInvisible)}
              onClick={scrollToTop}
            >
              <img
                src={arrowUp}
                alt="go up"
                style={{ width: "20px", height: "20px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
