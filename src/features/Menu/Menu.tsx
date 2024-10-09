import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { useRestuarantStore } from "@shared/stores/Restuarant";
import { Flex, Typography } from "antd";
import styles from "./styles.module.css";
import Title from "antd/es/typography/Title";
import { MenuCard } from "./MenuCard/MenuCard";

export const Menu = () => {
  const restuarant = useRestuarantStore((state) => state.restuarant);

  const onClickCategory = (id: string | undefined) => {
    if (id) {
      const section = document.getElementById(id);

      section?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <div className={styles.categoriesListContainer}>
        <Flex className={styles.categoriesList} gap="5px">
          {restuarant?.MenuCategories?.map((category) => (
            <CustomButton
              key={category?.id}
              variant="transparent"
              onClick={() => onClickCategory(category?.id)}
              label={<Typography.Text>{category?.name}</Typography.Text>}
            />
          ))}
        </Flex>
      </div>
      <Flex vertical className={styles.menuList} gap="20px">
        {restuarant?.MenuCategories?.map((category) => (
          <Flex id={category?.id} vertical>
            <Title style={{margin: "0 0 8px 8px"}} level={3}>{category?.name}</Title>
            <Flex wrap>
              {category?.MenuItems?.map((menuItem) => (
                <MenuCard menuItem={menuItem} />
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </>
  );
};
