import { ICard } from "@shared/mock";
import { Flex, Typography } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";
import { CustomImage } from "@shared/kit/CustomImage/CustomImage";
import Title from "antd/es/typography/Title";
import { StarFilled } from "@ant-design/icons";

interface IProps {
  restuarant: ICard;
}

export const RestuarantCard: FC<IProps> = ({ restuarant }) => {

  return (
    <Flex vertical className={styles.container}>
      <CustomImage src={restuarant.image} />
      <Flex justify="space-between" className={styles.infoContainer}>
        <Title level={5}>{restuarant.name}</Title>
        <Flex align="center" gap={2}>
          <StarFilled className={styles.star} />
          <Typography.Text className={styles.rating}>
            {restuarant.rating}
          </Typography.Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
