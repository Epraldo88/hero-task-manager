import Card from "components/Card";
import Title from "components/Title";
import useDashboard from "hooks/useDashboard";
import CardSummary from "./CardSummary";
import { dashboardSummaryKey } from "./constant";
import PerformanceChart from "./PerformanceChart";
import RecentActivitiesTable from "./RecentActivitiesTable";
import StatusSummaryChart from "./StatusSummaryChart";

const Dashboard = () => {
  const {
    summary,
    statusSummary,
    performanceStatus,
    recentActivites,
    loading,
    error,
  } = useDashboard();

  return (
    <div>
      <Title>Dashboard Task Management</Title>
      <div className="grid grid-cols-5 grid-rows-7 gap-4">
        {dashboardSummaryKey.map((res) => (
          <CardSummary
            key={res.key}
            isLoading={loading.summary}
            title={res.title}
            value={summary?.[res.key] || ""}
          />
        ))}
        <Card label={"Status Summary"} className="col-span-2 row-span-3">
          {loading.statusSummary ? (
            <div className="flex justify-center">
              <div className="w-[250px] h-[250px] rounded-md bg-gray-200 animate-pulse" />
            </div>
          ) : (
            <StatusSummaryChart data={statusSummary} />
          )}
        </Card>
        <Card
          label={"Performance Status"}
          className="col-span-3 col-start-3 row-span-3"
        >
          {loading.performanceStatus ? (
            <div className="flex justify-center">
              <div className="w-[250px] h-[250px] rounded-md bg-gray-200 animate-pulse" />
            </div>
          ) : (
            <PerformanceChart data={performanceStatus} />
          )}
        </Card>
        <Card
          label={"Recent Activities"}
          className="col-span-5 row-span-3 row-start-5"
        >
          {loading.recentActivites ? (
            <div className="flex justify-center">
              <div className="w-[250px] h-[250px] rounded-md bg-gray-200 animate-pulse" />
            </div>
          ) : (
            <RecentActivitiesTable datas={recentActivites} />
          )}
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
