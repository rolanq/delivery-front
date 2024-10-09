import { FC, useState } from "react";
import styles from "./styles.module.css";
import { HeartOutlined, MoreOutlined, StarFilled } from "@ant-design/icons";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { Flex, Typography } from "antd";
import classNames from "classnames";
import Title from "antd/es/typography/Title";
import { useRestuarantStore } from "@shared/stores/Restuarant";
import { useIsScrolled } from "@shared/hooks/useIsScrolled";
import { CustomHeader } from "@shared/kit/CustomHeader/CustomHeader";
import { GoBackButton } from "@features/GoBackButton/GoBackButton";
import { Categories } from "@features/Categories/Categories";
import { CustomBottomSheet } from "@shared/kit/CustomBottomSheet/CustomBottomSheet";

export const RestuarantHeader: FC = () => {
  const isScrolled = useIsScrolled(270, false);
  const restuarant = useRestuarantStore((state) => state.restuarant);
  const [openRating, setOpenRating] = useState(false);
  const [openTiming, setOpenTiming] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  return (
    <>
      <div className={styles.background}>
        <GoBackButton classname={styles.goBackButton} />
        <Flex className={styles.infoBlock} vertical>
          <Title
            className={styles.restuarantName}
            style={{ color: "white" }}
            level={3}
          >
            {restuarant?.name}
          </Title>
          <Flex gap="10px" wrap>
            <Flex vertical justify="space-between" gap="10px">
              <CustomButton
                onClick={() => setOpenTiming(true)}
                fullHeight
                className={classNames(styles.infoBlocks)}
                label={
                  <Flex vertical align="center">
                    <Title style={{ margin: 0 }} level={5}>
                      35-45
                    </Title>
                    <Typography.Text>мин</Typography.Text>
                  </Flex>
                }
                variant="tertiary"
              />
              <CustomButton
                fullWidth
                onClick={() => setOpenMore(true)}
                className={classNames(styles.infoBlocks, styles.moreButton)}
                label={<MoreOutlined className={styles.more} />}
                variant="tertiary"
              />
            </Flex>
            <Flex align="flex-end">
              <CustomButton
                onClick={() => setOpenRating(true)}
                className={styles.infoBlocks}
                label={
                  <Flex align="center" justify="center" gap="5px">
                    <StarFilled className={styles.star} />
                    <Title style={{ margin: 0 }} level={4}>
                      {restuarant?.rating}
                    </Title>
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
              <GoBackButton classname={styles.goBackButtonHeader} />
              <Title level={4}>{restuarant?.name}</Title>
              <HeartOutlined className={styles.favorites} />
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
          <Title level={3}>Рейтинг ресторана: {restuarant?.rating}</Title>
          <Typography>
            Рейтинг основан на оценках пользователей. Обновляется каждый день
          </Typography>
        </Flex>
      </CustomBottomSheet>
      <CustomBottomSheet
        snap={20}
        open={openTiming}
        onDismiss={() => setOpenTiming(false)}
      >
        <Flex vertical className={styles.bottomSheet}>
          <Title level={3}>Примерное время доставки: 35 минут</Title>
        </Flex>
      </CustomBottomSheet>
      <CustomBottomSheet
        snap={20}
        open={openMore}
        onDismiss={() => setOpenMore(false)}
      >
        <Flex vertical className={styles.bottomSheet}>
          <Title level={3}>Здесь тоже что-то будет</Title>
        </Flex>
      </CustomBottomSheet>
    </>
  );
};
