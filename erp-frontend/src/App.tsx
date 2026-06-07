import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import EmployeesPage from "./pages/EmployeePage";
import LoginPage from "./pages/LoginPage";
import AddEmployeePage from "./pages/AddEmployeePage";
import EditEmployeePage from "./pages/EditEmployeePage";


export default function App() {

  const token = localStorage.getItem("token");

  if (!token) {
    return <LoginPage />;
  }

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/dashboard" />}
        />

        <Route
          element={<DashboardLayout />}
        >

          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="/employees"
            element={<EmployeesPage />}
          />
          <Route
            path="/employees/add"
            element={<AddEmployeePage />}
          />
          <Route
            path="/employees/edit/:id"
            element={<EditEmployeePage />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}