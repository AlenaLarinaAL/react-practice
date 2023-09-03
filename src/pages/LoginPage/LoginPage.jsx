import React, { useState } from "react";
import { login } from "../../api/api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="email"
            onChange={({ target: { value } }) => setEmail(value)}
            value={email}
          />
        </label>
        <label>
          <input
            type="password"
            onChange={({ target: { value } }) => setPassword(value)}
            value={password}
          />
        </label>
        <button> login</button>
      </form>
    </>
  );
};

export default LoginPage;
