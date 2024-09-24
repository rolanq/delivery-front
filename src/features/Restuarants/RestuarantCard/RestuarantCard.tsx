import React, { FC, StyleHTMLAttributes } from "react";
import styles from "./RestuarantCard.module.css";
import star from "../../../assets/star.svg";
import { Link } from "react-router-dom";
import { ICard } from "../../../shared/mock";

interface IProps {
  card: ICard;
}

export const RestuarantCard: FC<IProps> = (props) => {
  const { card } = props;
  return (
    <Link to={`/r/${card.id}`}>
      <section className={styles.section}>
        <div className={styles.imageBlock}>
          {card.image && (
            <img src={card.image} alt="image" className={styles.image} />
          )}
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.firstBlock}>
            <h3 className={styles.naming}>{card.name}</h3>
            <div className={styles.ratingBlock}>
              <img src={star} alt="star" />
              <span>{card.rating}</span>
            </div>
          </div>
          <div className={styles.secondBlock}>
            <span>{card.timing} мин</span>
            <span>{card.categories.join(", ")}</span>
          </div>
        </div>
      </section>
    </Link>
  );
};
