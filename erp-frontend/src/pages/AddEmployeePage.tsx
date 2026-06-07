import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function AddEmployeePage() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  async function handleSave() {

    try {

      await api.post("/employees", {
        name,
        email,
        department,
        salary: Number(salary)
      });

      alert("Employee Added Successfully");

      navigate("/employees");

    } catch (error) {

      console.error(error);

      alert("Failed To Add Employee");
    }
  }

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Add Employee
      </h1>

      <div className="grid gap-4 max-w-2xl">

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

        <div className="flex gap-4 mt-4">

          <button
            onClick={() => navigate("/employees")}
            className="px-6 py-3 rounded-xl border border-white/10"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}