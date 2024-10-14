import { FC, useState } from "react";
import styles from "./styles.module.css";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { Flex } from "antd";
import classNames from "classnames";
import { useRestuarantStore } from "@shared/stores/Restuarant";
import { useIsScrolled } from "@shared/hooks/useIsScrolled";
import { CustomHeader } from "@shared/kit/CustomHeader/CustomHeader";
import { GoBackButton } from "@features/GoBackButton/GoBackButton";
import { Categories } from "@features/Categories/Categories";
import { CustomBottomSheet } from "@shared/kit/CustomBottomSheet/CustomBottomSheet";
import { CustomBr } from "@shared/kit/CustomBr/CustomBr";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { CustomIcon } from "@shared/kit/CustomIcon/CustomIcon";

export const RestuarantHeader: FC = () => {
  const isScrolled = useIsScrolled(270, false);
  const restuarant = useRestuarantStore((state) => state.restuarant);
  const [openRating, setOpenRating] = useState(false);
  const [openTiming, setOpenTiming] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  const restuarantCategories = restuarant?.categories?.split(", ");

  return (
    <>
      <div className={styles.background}>
        <GoBackButton className={styles.goBackButton} />
        <Flex className={styles.infoBlock} vertical>
          <CustomText
            className={styles.restuarantName}
            marginBottom
            titleLevel={3}
            variant="secondary"
          >
            {restuarant?.name}
          </CustomText>
          <Flex gap="10px" wrap>
            <Flex vertical justify="space-between" gap="10px">
              <CustomButton
                onClick={() => setOpenTiming(true)}
                fullHeight
                className={classNames(styles.infoBlocks)}
                label={
                  <Flex vertical align="center">
                    <CustomText titleLevel={5}>~35</CustomText>
                    <CustomText>мин</CustomText>
                  </Flex>
                }
                variant="tertiary"
              />
              <CustomButton
                fullWidth
                onClick={() => setOpenMore(true)}
                className={classNames(styles.infoBlocks, styles.moreButton)}
                label={
                  <CustomIcon icon="MoreOutlined" className={styles.more} />
                }
                variant="tertiary"
              />
            </Flex>
            <Flex align="flex-end">
              <CustomButton
                onClick={() => setOpenRating(true)}
                className={styles.infoBlocks}
                label={
                  <Flex align="center" justify="center" gap="5px">
                    <CustomIcon icon="StarFilled" />
                    <CustomText titleLevel={4}>{restuarant?.rating}</CustomText>
                  </Flex>
                }
                variant="tertiary"
              />
            </Flex>
          </Flex>
        </Flex>
        <img src={restuarant?.image ?? ""} alt="restuarant image" />
      </div>
      {isScrolled && (
        <CustomHeader>
          <Flex vertical>
            <Flex
              align="center"
              justify="space-between"
              className={styles.droppingHeaderWrapper}
            >
              <GoBackButton className={styles.goBackButtonHeader} />
              <CustomText titleLevel={4}>{restuarant?.name}</CustomText>
              <CustomIcon size="lg" icon="HeartOutlined" />
            </Flex>
            <Flex className={styles.categoriesWrapper}>
              <Categories />
            </Flex>
          </Flex>
        </CustomHeader>
      )}
      <CustomBottomSheet
        snap={20}
        open={openRating}
        onDismiss={() => setOpenRating(false)}
      >
        <Flex vertical className={styles.bottomSheet}>
          <CustomText titleLevel={3}>
            Рейтинг ресторана: {restuarant?.rating}
          </CustomText>
          <CustomText>
            Рейтинг основан на оценках пользователей. Обновляется каждый день
          </CustomText>
        </Flex>
      </CustomBottomSheet>
      <CustomBottomSheet
        snap={20}
        open={openTiming}
        onDismiss={() => setOpenTiming(false)}
      >
        <Flex vertical className={styles.bottomSheet}>
          <CustomText titleLevel={3}>
            Время доставки: ~35 минут
          </CustomText>
        </Flex>
      </CustomBottomSheet>
      <CustomBottomSheet
        snap={25}
        open={openMore}
        onDismiss={() => setOpenMore(false)}
      >
        <Flex vertical align="center" className={styles.bottomSheet}>
          <Flex vertical className={styles.restuarantInfoBlock}>
            <CustomText titleLevel={3}>{restuarant?.name}</CustomText>
          </Flex>
          <Flex vertical className={styles.restuarantInfoBlock}>
            <CustomText>{restuarant?.address}</CustomText>
            <CustomText>
              Режим работы: с {restuarant?.startWorkingDay} до{" "}
              {restuarant?.endWorkingDay}
            </CustomText>
          </Flex>
          <CustomBr className={styles.br} />
          <Flex className={styles.restuarantInfoBlock} gap="5px">
            {restuarantCategories?.map((category, index) => (
              <Flex key={category}>
                <CustomText>{category}</CustomText>
                {index !== restuarantCategories.length - 1 && (
                  <CustomText>•</CustomText>
                )}
              </Flex>
            ))}
          </Flex>
          <Flex
            className={classNames(
              styles.restuarantInfoBlock,
              styles.restuarantDescription
            )}
          >
            <CustomText>{restuarant?.description}</CustomText>
          </Flex>
        </Flex>
      </CustomBottomSheet>
    </>
  );
};
