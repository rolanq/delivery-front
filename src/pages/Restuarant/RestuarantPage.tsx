import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Menu } from "../../features/Menu/Menu";
import styles from "./RestuarantPage.module.css";
import arrowLeft from "../../assets/arrow-left.svg";
import { ScrollTop } from "../../features/ScrollTop/ScrollTop";
import { RESTUARANTS_MOCK } from "../../shared/mock";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import { RestuarantBottomSheet } from "./RestuarantBottomSheet/RestuarantBottomSheet";

export const RestuarantPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const restuarant = RESTUARANTS_MOCK.find((card) => card.id === Number(id));

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navBlock}>
          <button className={styles.goBackButton} onClick={() => navigate("/")}>
            <img
              src={arrowLeft}
              alt="go back"
              style={{ width: "20px", height: "20px" }}
            />
          </button>
        </div>
      </nav>

      <header className={styles.header}>
        <div className={styles.headerImage}>
          <img src={restuarant?.image} alt="image" />
        </div>
        <div className={styles.headerGradient} />
        <section className={styles.titleWrapper}>
          <h1 className={styles.title}>{restuarant?.name}</h1>
        </section>
      </header>

      <main className={styles.menu}>
        <Menu restuarant={restuarant!} />
      </main>

      <section
        className={styles.bottomSheet}
        onClick={() => setIsBottomSheetOpen(true)}
      >
        <div className={styles.bottomSheetRoot}>
          <div className={styles.bottomSheetContent}>
            <button className={styles.bottomSheetButton}>
              <div className={styles.bottomSheetContentMain}>
                <span className={styles.bottomSheetContentMainFirst}>
                  Доставка 0–339 ₽ · 80–90 мин
                </span>
                <span className={styles.bottomSheetContentMainSecond}>
                  Дальняя доставка · Подробные условия
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {isBottomSheetOpen && <RestuarantBottomSheet setOpen={setIsBottomSheetOpen} />}
    </>
  );
};
