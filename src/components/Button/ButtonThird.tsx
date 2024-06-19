import React, { FC } from "react";
import Button, { ButtonProps } from "./Button";

const ButtonThird: FC<ButtonProps> = (props) => {
  return <Button {...props} pattern="third" />;
};

export default ButtonThird;
