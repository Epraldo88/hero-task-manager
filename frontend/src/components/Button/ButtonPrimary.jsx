import React from "react";
import Button from ".";

const ButtonPrimary = ({
  className,
  onClick,
  children,
  disabled,
  ...props
}) => {
  const disabledStyle = "bg-gray-400 hover:bg-gray-400";

  return (
    <Button
      className={`bg-blue-500 hover:bg-blue-600 text-white ${
        disabled && disabledStyle
      } ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
