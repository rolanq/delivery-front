import { Flex, Typography } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";
import { CustomImage } from "@shared/kit/CustomImage/CustomImage";
import Title from "antd/es/typography/Title";
import { StarFilled } from "@ant-design/icons";
import { Restuarant } from "@graphql/graphql";
import { useNavigate } from "react-router-dom";

interface IProps {
  restuarant: Restuarant | null;
}

export const RestuarantCard: FC<IProps> = ({ restuarant }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`r/${restuarant?.id}`);
  };

  return (
    <Flex vertical className={styles.container} onClick={onClick}>
      <CustomImage src={restuarant?.image ?? ""} />
      <Flex vertical className={styles.infoContainer}>
        <Flex justify="space-between" align="center">
          <Title style={{ margin: 0 }} level={5}>
            {restuarant?.name}
          </Title>
          <Flex align="center" gap={2}>
            <StarFilled className={styles.star} />
            <Typography.Text className={styles.rating}>
              {restuarant?.rating}
            </Typography.Text>
          </Flex>
        </Flex>
        <Flex justify="flex-start">
          <Typography.Text>{restuarant?.categories}</Typography.Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
