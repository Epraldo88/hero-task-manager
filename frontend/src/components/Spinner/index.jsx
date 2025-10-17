import { LoaderCircle } from "lucide-react";
import React from "react";

const Spinner = ({ className, size }) => {
  return (
    <LoaderCircle className={`animate-spin ${className}`} size={size || 16} />
  );
};

export default Spinner;
