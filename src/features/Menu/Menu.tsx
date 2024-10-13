import { useRestuarantStore } from "@shared/stores/Restuarant";
import { Flex } from "antd";
import styles from "./styles.module.css";
import { MenuCard } from "./MenuCard/MenuCard";
import { Categories } from "@features/Categories/Categories";
import { useState } from "react";
import { MenuItem } from "@graphql/graphql";
import { CustomBottomSheet } from "@shared/kit/CustomBottomSheet/CustomBottomSheet";
import { CustomImage } from "@shared/kit/CustomImage/CustomImage";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { useAppStore } from "@shared/stores/App";
import { useUserStore } from "@shared/stores/User";

export const Menu = () => {
  const restuarant = useRestuarantStore((state) => state.restuarant);
  const user = useUserStore((state) => state.user);
  const triggerAuthBottomSheet = useAppStore(
    (state) => state.triggerAuthBottomSheet
  );
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

  const onAddToCart = () => {
    if (!user?.id) {
      triggerAuthBottomSheet(true);
    }
  };
  if (
    !restuarant?.MenuCategories?.map((category) => category?.MenuItems).flatMap(
      (menuItem) => menuItem
    ).length
  ) {
    return (
      <Flex vertical className={styles.menuList} gap="20px">
        <CustomText titleLevel={3}>Ой, у ресторана пока нет товаров.</CustomText>
      </Flex>
    );
  }

  return (
    <>
      <Categories />
      <Flex vertical className={styles.menuList} gap="20px">
        {restuarant?.MenuCategories?.map((category) => (
          <Flex key={category?.id} id={category?.id} vertical>
            <CustomText titleLevel={3}>{category?.name}</CustomText>
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
        snap={90}
        open={!!activeMenuItem}
        onDismiss={onCloseBottomSheet}
        footer={
          <Flex
            className={styles.bottomSheetFooter}
            vertical
            justify="space-between"
            gap="15px"
          >
            <Flex align="center" justify="space-between">
              <Flex gap="5px" align="center">
                <CustomText size="md">{activeMenuItem?.name}</CustomText>
                <CustomText variant="tertiary" size="sm">
                  {activeMenuItem?.weight} гр.
                </CustomText>
              </Flex>
              <Flex gap="10px">
                <CustomText titleLevel={4}>
                  {activeMenuItem?.price} р
                </CustomText>
              </Flex>
            </Flex>
            <CustomButton
              onClick={onAddToCart}
              fullWidth
              label="Добавить в корзину"
              variant="secondary"
            />
          </Flex>
        }
      >
        <Flex vertical className={styles.bottomSheet}>
          <CustomImage
            src={activeMenuItem?.image ?? ""}
            width="100%"
            height="100%"
            borderRadius="24px 24px 0 0"
            className={styles.bottomSheetImage}
          />
          <Flex vertical className={styles.bottomSheetContent}>
            <CustomText size="sm">{activeMenuItem?.description}</CustomText>
          </Flex>
        </Flex>
      </CustomBottomSheet>
    </>
  );
};
