import { Flex } from "antd";
import { FC, useEffect, useState } from "react";
import { CustomIcon } from "../CustomIcon/CustomIcon";
import { CustomButton } from "../CustomButton/CustomButton";
import styles from "./styles.module.css";
import { CustomText } from "../CustomText/CustomText";
import classNames from "classnames";

interface IProps {
  value?: number;
  onChange: (value: number) => void;
  onMinValue?: () => void;
  minValue: number;
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  className?: string;
  fullWidth?: boolean;
}

export const CustomCounter: FC<IProps> = ({
  onChange,
  onMinValue,
  value,
  minValue,
  size,
  loading,
  fullWidth,
  className,
}) => {
  const [internalValue, setInternalValue] = useState(value ?? minValue);

  const onIncrease = (e?: React.MouseEvent<HTMLElement>) => {
    e?.stopPropagation();
    setInternalValue((prev) => prev + 1);
  };

  const onDecrease = (e?: React.MouseEvent<HTMLElement>) => {
    e?.stopPropagation();
    setInternalValue((prev) => {
      if (minValue < prev - 1) {
        return prev - 1;
      } else {
        if (onMinValue) {
          onMinValue();
        }

        return prev;
      }
    });
  };

  useEffect(() => {
    onChange(internalValue);
  }, [internalValue]);

  return (
    <Flex
      className={classNames(
        styles.container,
        fullWidth && styles.fullWidth,
        className
      )}
      align="center"
    >
      <CustomButton
        className={classNames(styles.button, styles.leftButton)}
        onClick={onDecrease}
        size={size}
        variant="transparent"
        label={<CustomIcon icon="MinusOutlined" size={size} />}
      />
      <Flex className={styles.textContainer} align="center" justify="center">
        {loading ? (
          <CustomIcon variant="primary" icon="LoadingOutlined" />
        ) : (
          <CustomText className={styles.text} titleLevel={5} size={size}>
            {internalValue}
          </CustomText>
        )}
      </Flex>
      <CustomButton
        className={classNames(styles.button, styles.rightButton)}
        onClick={onIncrease}
        size={size}
        variant="transparent"
        label={<CustomIcon icon="PlusOutlined" />}
      />
    </Flex>
  );
};
