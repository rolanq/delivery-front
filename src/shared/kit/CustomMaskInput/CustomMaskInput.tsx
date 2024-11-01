import InputMask from "react-input-mask";
import { CustomInput, CustomInputProps } from "../CustomInput/CustomInput";
import { FC } from "react";

const addInput = (props: CustomInputProps) => <CustomInput {...props} />;

interface CustomMaskInputProps extends CustomInputProps {
  mask: string | Array<string | RegExp>;
  maskPlaceholder?: string;
}

export const CustomMaskInput: FC<CustomMaskInputProps> = ({
  mask,
  disabled,
  maskPlaceholder,
  ...props
}) => {
  return (
    <InputMask mask={mask} disabled={disabled} autoComplete="off">
      
    </InputMask>
  );
};
