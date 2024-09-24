import { RestuarantCard } from "./RestuarantCard/RestuarantCard";
import styles from "./Restuarants.module.css";
import { RESTUARANTS_MOCK } from "../../shared/mock";

export const Restuarants = () => {
  return (
    <>
      <section className={styles.container}>
        {RESTUARANTS_MOCK.map((card) => (
          <RestuarantCard key={card.id} card={card} />
        ))}
      </section>
    </>
  );
};
