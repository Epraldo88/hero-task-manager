import Sidebar from "components/Sidebar";
import Dashboard from "pages/Dashboard";
import Login from "pages/Login";
import Tasks from "pages/Tasks";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/Login";

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {!isLoginPage && <Sidebar />}

      <div className={`${isLoginPage ? "" : "p-8 w-full"}`}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks-management" element={<Tasks />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
