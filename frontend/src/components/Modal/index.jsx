import { useEffect } from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children, footer }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3">
          <h2 className="text-lg text-gray-800 font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="cursor-pointer p-1 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 max-h-[400px] overflow-auto">{children}</div>

        {/* Footer */}
        {footer && <div className="p-4">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
