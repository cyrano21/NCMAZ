import React, { FC } from "react";
import Button, { ButtonProps } from "./Button";

const ButtonSecondary: FC<ButtonProps> = (props) => {
  return <Button {...props} pattern="secondary" />;
};

export default ButtonSecondary;
