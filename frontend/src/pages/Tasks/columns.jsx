import PerformanceTag from "components/PerformanceTag";
import dayjs from "dayjs";
import RowAction from "./components/RowAction";
import CellStatus from "./components/Status/CellStatus";

export const taskColumns = [
  {
    header: "Title",
    key: "title",
  },
  {
    header: "Description",
    key: "description",
  },
  {
    header: "Assigned",
    key: "assignee",
  },
  {
    header: "Status",
    key: "status",
    render: (_, data) => <CellStatus data={data} />,
  },
  {
    header: "Due Date",
    key: "deadline_date",
    render: (value) => <p>{value ? dayjs(value).format("DD-MM-YYYY") : "-"}</p>,
  },
  {
    header: "Performance",
    key: "performance_status",
    render: (value) => <PerformanceTag status={value} />,
  },
  {
    header: "Action",
    key: "action",
    render: (_, data) => <RowAction data={data} />,
  },
];
