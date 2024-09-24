import { FC } from "react";
import styles from "./Menu.module.css";
import { ICard, MENU_MOCK } from "../../shared/mock";
import { MenuCategory } from "./MenuCategory/MenuCategory";

interface IProps {
  restuarant: ICard;
}

export const Menu: FC<IProps> = () => {
  // const { restuarant } = props;

  return (
    <section className={styles.menuSection}>
      {MENU_MOCK.map((category) => (
        <MenuCategory key={category.id} category={category} />
      ))}
    </section>
  );
};
