import { detailDateDisplay } from "utils/date";

const TaskLogs = ({ datas }) => {
  const columns = [
    {
      header: "Status",
      key: "status",
    },
    {
      header: "Date",
      key: "timestamp",
    },
  ];

  const Td = ({ children }) => {
    return <td className="px-3 py-2 whitespace-nowrap">{children}</td>;
  };

  return (
    <div className="w-full overflow-x-auto rounded-sm border border-gray-200  bg-white">
      <table className="min-w-full text-sm text-left text-gray-700">
        {/* Table Header */}
        <thead className="bg-gray-100 text-gray-900 font-medium">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 whitespace-nowrap">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {datas.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center text-gray-500 py-6"
              >
                No tasks found.
              </td>
            </tr>
          ) : (
            datas.map((data, idx) => (
              <tr
                key={data.id || idx}
                className={"border-t hover:bg-gray-50 transition"}
              >
                <Td>{data.status}</Td>
                <Td>{detailDateDisplay(data.timestamp)}</Td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskLogs;
