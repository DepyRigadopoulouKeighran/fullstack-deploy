import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setToken, setUser, token } = useUser();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      };

      const request = await fetch("http://localhost:5000/auth/login", config);
      const result = await request.json();
      console.log(result);
      if (!result.error) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
        setToken(result.token);
        setUser(result.user);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        name="usernname"
        id=""
        placeholder="username"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        name="password"
        id=""
        placeholder="password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
