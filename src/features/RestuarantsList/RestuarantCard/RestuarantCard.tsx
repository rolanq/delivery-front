import { Flex } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";
import { CustomImage } from "@shared/kit/CustomImage/CustomImage";
import { Restuarant } from "@graphql/graphql";
import { useNavigate } from "react-router-dom";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { CustomIcon } from "@shared/kit/CustomIcon/CustomIcon";

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
          <CustomText titleLevel={5}>{restuarant?.name}</CustomText>
          <Flex align="center" gap={2}>
            <CustomIcon icon="StarFilled" size="sm" />
            <CustomText size="sm" className={styles.rating}>
              {restuarant?.rating}
            </CustomText>
          </Flex>
        </Flex>
        <Flex justify="flex-start">
          <CustomText size="sm">{restuarant?.categories}</CustomText>
        </Flex>
      </Flex>
    </Flex>
  );
};
