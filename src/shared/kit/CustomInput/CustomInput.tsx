import { Flex, Input, Tooltip } from "antd";
import React, { FC, FocusEvent, useMemo, useState } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import { CustomText } from "../CustomText/CustomText";

export interface CustomInputProps {
  value?: string | null;
  onChange: (event: FocusEvent<HTMLInputElement>, value: string) => void;
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
  name?: string
}

export const CustomInput: FC<CustomInputProps> = ({
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
  name
}) => {
  const [internalValue, setInternalValue] = useState<string | undefined | null>(value);

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (internalValue) onChange(e, internalValue);
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
          name={name}
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
