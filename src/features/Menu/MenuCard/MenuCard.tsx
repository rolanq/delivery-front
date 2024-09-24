import { FC } from "react";
import { IMenuCard } from "../../../shared/mock";
import styles from "./MenuCard.module.css";
import plus from "../../../assets/plus.svg";

interface IProps {
  card: IMenuCard;
}

export const MenuCard: FC<IProps> = (props) => {
  const { card } = props;

  return (
    <div className={styles.menuItemWrapper}>
      <div className={styles.menuItemPictureWrapper}>
        {card.image ? (
          <img
            src={card.image}
            alt="image"
            className={styles.menuItemPicture}
          />
        ) : (
          <h3>Картинки нет</h3>
        )}
      </div>
      <div className={styles.menuItemInfoWrapper}>
        <span className={styles.menuItemPrice}>{card.price}&thinsp;₽</span>
        <span className={styles.menuItemName}>{card.name}</span>
      </div>
      <div className={styles.menuItemAddButtonWrapper}>
        <button className={styles.menuItemAddButton}>
          <img src={plus} alt="plus" className={styles.menuItemAddButtonPlus} />
        </button>
      </div>
    </div>
  );
};
