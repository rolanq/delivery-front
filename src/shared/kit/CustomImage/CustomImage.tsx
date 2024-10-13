import { FC, useState } from "react";
import styles from "./styles.module.css";
import { Flex } from "antd";
import classNames from "classnames";
import { CustomText } from "../CustomText/CustomText";
import { CustomSkeleton } from "../CustomSkeleton/CustomSkeleton";

interface IProps {
  src?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  withBackground?: boolean;
  imageFullWidth?: boolean;
  imageFullHeight?: boolean;
  className?: string;
}

export const CustomImage: FC<IProps> = ({
  src,
  width = "100%",
  height = "200px",
  borderRadius = "24px",
  withBackground = true,
  imageFullHeight = false,
  imageFullWidth = true,
  className,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Flex
      align="center"
      justify="center"
      className={classNames(
        styles.imageWrapper,
        withBackground && styles.background,
        className
      )}
      style={{ width, height, borderRadius }}
    >
      {src ? (
        <>
          <img
            src={src}
            className={styles.image}
            style={{
              borderRadius,
              width: imageFullWidth ? "100%" : "auto",
              height: imageFullHeight ? "100%" : "auto",
              display: isLoaded ? "inline-block" : "none",
            }}
            onLoad={() => setIsLoaded(true)}
          />
          {!isLoaded && (
            <CustomSkeleton
              height={height}
              width={width}
              borderRadius={borderRadius}
              withMarginBottom={false}
            />
          )}
        </>
      ) : (
        <CustomText>Картинки нет</CustomText>
      )}
    </Flex>
  );
};
