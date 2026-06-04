import { useState } from "react";
import api from "../services/api";

export default function LoginPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await api.post(
        "/auth/login",
        {
          username,
          password
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Successful!");

      console.log(response.data);

    } catch (error) {

      console.error(error);

      alert("Login Failed");

    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="w-[400px] p-8 rounded-3xl bg-white/5 border border-white/10">

        <h1 className="text-white text-4xl font-bold mb-8">
          ERP Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="w-full p-4 mb-4 rounded-xl"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-4 mb-6 rounded-xl"
        />

        <button
          onClick={handleLogin}
          className="w-full p-4 rounded-xl bg-cyan-500 text-white"
        >
          Login
        </button>

      </div>

    </div>
  );
}