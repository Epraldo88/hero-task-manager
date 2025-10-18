import Card from "components/Card";
import Title from "components/Title";
import React from "react";
import CardSummary from "./CardSummary";

const Dashboard = () => {
  return (
    <div>
      <Title>Dashboard Task Management</Title>
      <div className="grid grid-cols-4  gap-4">
        <CardSummary title={"Total Tasks"} value={20} />
        <CardSummary title={"On Progress"} value={20} />
        <CardSummary title={"Done"} value={20} />
        <CardSummary title={"Overdue Tasks"} value={20} />
        <div className="col-span-2">5</div>
        <div className="col-span-2 col-start-3">6</div>
        <div className="row-start-3">8</div>
        <div className="col-span-3 row-start-3">9</div>
      </div>
    </div>
  );
};

export default Dashboard;
