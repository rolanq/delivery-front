import { Flex, Input, Tooltip } from "antd";
import React, { FC, useMemo, useState } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import { CustomText } from "../CustomText/CustomText";

interface IProps {
  value?: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: boolean;
  title?: string;
  tooltip?: {
    overlay: string;
  };
  className?: string;
  type?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  disabled?: boolean;
}

export const CustomInput: FC<IProps> = ({
  placeholder,
  onChange,
  className,
  tooltip,
  error,
  title,
  type,
  fullWidth = false,
  fullHeight = false,
  disabled,
  value,
}) => {
  const [internalValue, setInternalValue] = useState<string | undefined | null>(value);

  const onBlur = () => {
    if (internalValue) onChange(internalValue);
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
  };

  const prepareInput = useMemo(() => {
    return (
      <Tooltip overlay={tooltip?.overlay} color={error ? "red" : undefined}>
        <Input
          disabled={disabled}
          value={internalValue ?? ""}
          onChange={onChangeValue}
          onBlur={onBlur}
          variant="outlined"
          className={classNames(styles.input, className)}
          placeholder={placeholder}
          type={type}
        />
      </Tooltip>
    );
  }, [
    internalValue,
    onChangeValue,
    onBlur,
    placeholder,
    type,
    className,
    tooltip?.overlay,
    error,
    disabled,
  ]);

  if (!title) {
    return prepareInput;
  }

  return (
    <Flex
      vertical
      style={{
        width: fullWidth ? "100%" : "auto",
        height: fullHeight ? "100%" : "auto",
      }}
    >
      {title && (
        <CustomText marginBottom className={styles.title} titleLevel={5}>
          {title}
        </CustomText>
      )}
      {prepareInput}
    </Flex>
  );
};
