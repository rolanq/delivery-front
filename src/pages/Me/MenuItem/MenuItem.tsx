import { FC } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";

interface IProps {
  path: string;
  name: string;
}

export const MenuItem: FC<IProps> = ({ name, path }) => {
  return (
    <Link to={path}>
      <CustomButton label={name} />
    </Link>
  );
};
