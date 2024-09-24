import { FC } from "react";
import { MenuCard } from "../MenuCard/MenuCard";
import { ICategory } from "../../../shared/mock";
import styles from "./MenuCategory.module.css";

interface IProps {
  category: ICategory;
}

export const MenuCategory: FC<IProps> = (props) => {
  const { category } = props;
  return (
    <>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{category.name}</h2>
      </div>
      <div className={styles.menuList}>
        {category.cards.map((card) => (
          <MenuCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};
