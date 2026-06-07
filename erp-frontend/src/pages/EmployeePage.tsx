import { useEffect, useState } from "react";
import api from "../services/api";
import type { Employee } from "../types/Employee";
import { useNavigate } from "react-router-dom";

export default function EmployeesPage() {

  const [employees, setEmployees] = useState<Employee[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  async function fetchEmployees() {
    try {
      const response = await api.get("/employees");
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id: number) {

    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmed) {
      return;
    }

    try {

      await api.delete(`/employees/${id}`);

      await fetchEmployees();

      alert("Employee Deleted Successfully");

    } catch (error) {

      console.error(error);

      alert("Failed To Delete Employee");
    }
  }

  return (
    <div>

      <div className="flex items-center justify-between mb-8">

        <h1 className="text-4xl font-bold">
          Employees
        </h1>

        <button
          onClick={() => navigate("/employees/add")}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500"
        >
          + Add Employee
        </button>

      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10">

        <table className="w-full">

          <thead className="bg-white/5">

            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Department</th>
              <th className="p-4 text-left">Salary</th>
              <th className="p-4 text-left">Actions</th>
            </tr>

          </thead>

          <tbody>

            {employees.map((employee) => (

              <tr
                key={employee.id}
                className="border-t border-white/10"
              >
                <td className="p-4">{employee.id}</td>

                <td className="p-4">{employee.name}</td>

                <td className="p-4">{employee.email}</td>

                <td className="p-4">{employee.department}</td>

                <td className="p-4">
                  ₹ {employee.salary}
                </td>

                <td className="p-4 flex gap-2">

                  <button
                    onClick={() =>
                      navigate(`/employees/edit/${employee.id}`)
                    }
                    className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(employee.id)
                    }
                    className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}