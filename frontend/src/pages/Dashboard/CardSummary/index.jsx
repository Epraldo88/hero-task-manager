import Card from "components/Card";
import React from "react";

const CardSummary = ({ title, value, isLoading }) => {
  return (
    <Card label={title}>
      {isLoading ? (
        <div className="w-20 h-8 rounded-md bg-gray-200 animate-pulse"></div>
      ) : (
        <p className="text-3xl font-bold">{value}</p>
      )}
    </Card>
  );
};

export default CardSummary;
