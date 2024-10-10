import { Flex, Input, Tooltip } from "antd";
import React, { FC, useState } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import { CustomText } from "../CustomText/CustomText";

interface IProps {
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: boolean;
  title?: string;
  tooltip?: {
    overlay: string;
  };
  className?: string;
  type?: string;
}

export const CustomInput: FC<IProps> = ({
  placeholder,
  onChange,
  className,
  tooltip,
  error,
  title,
  type,
}) => {
  const [internalValue, setInternalValue] = useState("");
  const onBlur = () => {
    onChange(internalValue);
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
  };

  return (
    <Flex vertical>
      {title && (
        <CustomText marginBottom className={styles.title} titleLevel={5}>
          {title}
        </CustomText>
      )}
      <Tooltip overlay={tooltip?.overlay} color={error ? "red" : undefined}>
        <Input
          value={internalValue}
          onChange={onChangeValue}
          onBlur={onBlur}
          variant="outlined"
          className={classNames(styles.input, className)}
          placeholder={placeholder}
          type={type}
        />
      </Tooltip>
    </Flex>
  );
};
