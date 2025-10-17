import StatusTag from "components/StatusTag";
import dayjs from "dayjs";

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
    render: (value) => <StatusTag status={value} />,
  },
  {
    header: "Due Date",
    key: "deadline_date",
    render: (value) => <p>{value ? dayjs(value).format("DD-MM-YYYY") : "-"}</p>,
  },
  {
    header: "Performance",
    key: "performance_status",
    render: (value) => <StatusTag status={value} />,
  },
];
