import React, { FC } from "react";
import Button, { ButtonProps } from "./Button";

const ButtonPrimary: FC<ButtonProps> = (props) => {
  return <Button {...props} pattern="primary" />;
};

export default ButtonPrimary;
