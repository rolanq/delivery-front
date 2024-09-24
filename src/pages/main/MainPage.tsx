import { FC } from "react";
import styles from "./mainPage.module.css";
import { Restuarants } from "../../features/Restuarants/Restuarants";
import { NavBar } from "../../features/NavBar/NavBar";
import { ScrollTop } from "../../features/ScrollTop/ScrollTop";

export const MainPage: FC = () => {
  return (
    <>
      <NavBar />
      <main className={styles.container}>
        <h1 className={styles.header}>Рестораны</h1>
        <Restuarants />
      </main>
      <ScrollTop />
    </>
  );
};
