import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const Pagination = ({ goToPage, page, totalPages }) => {
  const activeStyle = "border-gray-300 cursor-pointer";
  const disabledStyle = "text-gray-400 border-gray-200 cursor-not-allowed";

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => goToPage(page - 1)}
        disabled={page === 1}
        className={`p-1 rounded-md border ${
          page === 1 ? disabledStyle : activeStyle
        }`}
      >
        <ChevronLeft size={16} />
      </button>

      <span className="font-medium text-gray-700">{page}</span>

      <button
        onClick={() => goToPage(page + 1)}
        disabled={page === totalPages || totalPages === 0}
        className={`p-1 rounded-md border ${
          page === totalPages || totalPages === 0 ? disabledStyle : activeStyle
        }`}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
