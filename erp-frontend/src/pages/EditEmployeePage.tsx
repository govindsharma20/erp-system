import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

export default function EditEmployeePage() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  useEffect(() => {
    fetchEmployee();
  }, []);

  async function fetchEmployee() {
    try {

      const response = await api.get(`/employees/${id}`);

      setName(response.data.name);
      setEmail(response.data.email);
      setDepartment(response.data.department);
      setSalary(response.data.salary);

    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateEmployee() {

    try {

      await api.put(`/employees/${id}`, {
        name,
        email,
        department,
        salary,
      });

      alert("Employee Updated Successfully");

      navigate("/employees");

    } catch (error) {

      console.error(error);

      alert("Failed To Update Employee");
    }
  }

  return (
    <div className="max-w-4xl">

      <h1 className="text-4xl font-bold mb-8">
        Edit Employee
      </h1>

      <div className="grid grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-4 rounded-xl bg-white/5 border border-white/10"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-4 rounded-xl bg-white/5 border border-white/10"
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="p-4 rounded-xl bg-white/5 border border-white/10"
        />

        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="p-4 rounded-xl bg-white/5 border border-white/10"
        />

      </div>

      <div className="flex gap-4 mt-8">

        <button
          onClick={handleUpdateEmployee}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500"
        >
          Update
        </button>

        <button
          onClick={() => navigate("/employees")}
          className="px-6 py-3 rounded-xl bg-red-500"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}