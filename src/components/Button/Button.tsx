import { FC, ReactNode } from "react";
import { StyledButton } from "./Button.styled";

interface ButtonProps {
  text: string | ReactNode;
}

const Button: FC<ButtonProps> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
