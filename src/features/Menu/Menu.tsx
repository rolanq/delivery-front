import { useRestuarantStore } from "@shared/stores/Restuarant";
import { Flex } from "antd";
import styles from "./styles.module.css";
import Title from "antd/es/typography/Title";
import { MenuCard } from "./MenuCard/MenuCard";
import { Categories } from "@features/Categories/Categories";

export const Menu = () => {
  const restuarant = useRestuarantStore((state) => state.restuarant);

  return (
    <>
      <Categories />
      <Flex vertical className={styles.menuList} gap="20px">
        {restuarant?.MenuCategories?.map((category) => (
          <Flex key={category?.id} id={category?.id} vertical>
            <Title style={{ margin: "0 0 8px 8px" }} level={3}>
              {category?.name}
            </Title>
            <Flex wrap>
              {category?.MenuItems?.map((menuItem) => (
                <MenuCard key={menuItem?.id} menuItem={menuItem} />
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </>
  );
};
