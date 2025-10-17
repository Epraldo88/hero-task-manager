import React from "react";

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`px-4 py-2 cursor-pointer rounded-sm text-sm transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
