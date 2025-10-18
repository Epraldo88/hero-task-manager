import React, { useMemo, useState } from "react";
import Pagination from "./Pagination";

const Table = ({ columns, datas }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const totalItems = datas.length;
  const totalPages = Math.ceil(totalItems / limit);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * limit;
    const end = start + limit;
    return datas.slice(start, end);
  }, [datas, page, limit]);

  const goToPage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };
  return (
    <div className="w-full overflow-x-auto rounded-sm border border-gray-200 shadow-sm bg-white">
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
          {paginatedData.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center text-gray-500 py-6"
              >
                No tasks found.
              </td>
            </tr>
          ) : (
            paginatedData.map((data, idx) => (
              <tr
                key={data.id || idx}
                className={"border-t hover:bg-gray-50 transition"}
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-3 py-2 whitespace-nowrap">
                    {typeof col.render === "function"
                      ? col.render(data[col.key], data)
                      : data[col.key] ?? "-"}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="p-4 flex justify-center">
        <Pagination goToPage={goToPage} page={page} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Table;
