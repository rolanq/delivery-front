import { useRestuarantStore } from "@shared/stores/Restuarant";
import { Flex, Typography } from "antd";
import styles from "./styles.module.css";
import Title from "antd/es/typography/Title";
import { MenuCard } from "./MenuCard/MenuCard";
import { Categories } from "@features/Categories/Categories";
import { useState } from "react";
import { MenuItem } from "@graphql/graphql";
import { CustomBottomSheet } from "@shared/kit/CustomBottomSheet/CustomBottomSheet";
import { CustomImage } from "@shared/kit/CustomImage/CustomImage";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";

export const Menu = () => {
  const restuarant = useRestuarantStore((state) => state.restuarant);
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItem | undefined>(
    undefined
  );

  const onClickMenuItem = (item: MenuItem | null) => {
    if (item) {
      setActiveMenuItem(item);
    }
  };

  const onCloseBottomSheet = () => {
    setActiveMenuItem(undefined);
  };

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
                <MenuCard
                  key={menuItem?.id}
                  menuItem={menuItem}
                  onClick={onClickMenuItem}
                />
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>

      <CustomBottomSheet
        open={!!activeMenuItem}
        onDismiss={onCloseBottomSheet}
        footer={
          <Flex className={styles.bottomSheetFooter} justify="space-between">
            <Flex vertical>
              <Typography.Text>{activeMenuItem?.name}</Typography.Text>
              <Title style={{ margin: 0 }} level={4}>
                {activeMenuItem?.price} р
              </Title>
            </Flex>
            <CustomButton label="Добавить в корзину" variant="secondary" />
          </Flex>
        }
      >
        <Flex vertical className={styles.bottomSheet}>
          <CustomImage
            src={activeMenuItem?.image ?? ""}
            width="100%"
            height="300px"
            borderRadius="24px 24px 0 0"
            className={styles.bottomSheetImage}
          />
          <Flex vertical className={styles.bottomSheetContent}>
            <Title level={5}>Здесь будет описание</Title>
          </Flex>
        </Flex>
      </CustomBottomSheet>
    </>
  );
};
