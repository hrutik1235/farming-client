import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/api";

const Login = () => {
  const [name, setName] = useState("Hrutik");
  const [email, setEmail] = useState("hrutik@gmail.com");
  const [username, setUsername] = useState("blaster");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      email,
      username,
    };
    axiosInstance
      .post("/user/register", body)
      .then((res) => {
        const data = res.data;

        console.log(data);

        localStorage.setItem("user_id", data.data);

        navigate("/");
      })
      .catch((err) => {
        if (err.data.status === 401) {
          console.log("Unautorized");
        }
      });
  };

  return (
    <Wrapper>
      <div className="p-5 rounded-md border w-1/2 border-gray-200 shadow-sm bg-white">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;
