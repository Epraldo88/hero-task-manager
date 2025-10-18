import React from "react";
import { detailDateDisplay } from "utils/date";

const RecentActivitiesTable = ({ datas }) => {
  const Th = ({ children }) => {
    return <th className="px-4 py-3 whitespace-nowrap">{children}</th>;
  };

  const Td = ({ children }) => {
    return <td className="px-3 py-2 whitespace-nowrap">{children}</td>;
  };

  return (
    <div className="w-full overflow-x-auto overflow-y-auto max-h-[300px] rounded-sm border border-gray-200  bg-white">
      <table className="min-w-full text-sm text-left text-gray-700">
        {/* Table Header */}
        <thead className="sticky top-0 z-10 bg-gray-100 text-gray-900 font-medium">
          <tr>
            <Th>Time</Th>
            <Th>Name</Th>
            <Th>Status</Th>
            <Th>Task</Th>
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
                No activites found.
              </td>
            </tr>
          ) : (
            datas.map((data, idx) => (
              <tr key={idx} className={"border-t hover:bg-gray-50 transition"}>
                <Td>{detailDateDisplay(data.timestamp)}</Td>
                <Td>{data.assignee}</Td>
                <Td>{data.status}</Td>
                <Td>{data.title}</Td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivitiesTable;
