import React, { useState } from "react";
import "./Login.css"; // Import the CSS file for styling
import apiService from "../../api/queryApi";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../storage/loginContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { changeLoginStatus } = useAuth();
  const history = useHistory();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    try {
      const loginStatus = await apiService.loginApi(
        { user: username, pass: password },
        "POST"
      );
      console.log("Login Successful! :: ", loginStatus);
      localStorage.setItem("token", loginStatus.data.token);
      localStorage.setItem("login", true);
      changeLoginStatus();
      setUsername("");
      setPassword("");
      history.push("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username </label>
          <input
            className="form-input"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password </label>
          <input
            className="form-input"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
