import { useEffect, useState } from "react";
import api from "../services/api";
import { Employee } from "../types/Employee";

export default function EmployeesPage() {

  const [employees, setEmployees] = useState<Employee[]>([]);

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

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Employees
      </h1>

      <div className="space-y-4">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="p-5 rounded-2xl bg-white/5 border border-white/10"
          >
            <h3>{employee.name}</h3>
            <p>{employee.email}</p>
            <p>{employee.department}</p>
            <p>₹ {employee.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}