import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LayoutDashboard, ClipboardList } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={18} /> },
    {
      name: "Task Management",
      path: "/tasks-management",
      icon: <ClipboardList size={18} />,
    },
  ];

  const linkClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-150 ${
      pathname === path
        ? "bg-blue-500 text-white"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
    }`;

  return (
    <div>
      <div
        className={`static z-20 top-0 left-0 h-screen w-64 bg-white shadow-md`}
      >
        {/* Brand */}
        <div className="flex items-center justify-center py-6 border-b">
          <h1 className="font-bold text-xl text-blue-600">Hero Task</h1>
        </div>

        {/* Navigation */}
        <nav className="p-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={linkClass(item.path)}
              onClick={() => setOpen(false)}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
