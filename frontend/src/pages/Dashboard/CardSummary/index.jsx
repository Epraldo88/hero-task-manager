import Card from "components/Card";
import React from "react";

const CardSummary = ({ title, value }) => {
  return (
    <Card label={title}>
      <p className="text-3xl font-bold">{value}</p>
    </Card>
  );
};

export default CardSummary;
