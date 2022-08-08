import React, { useState } from "react";

const RegisterForm = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log({
      Email,
      password,
    });
  };

  const handleEmailChange = (event) => {
    setEmail(() => event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(() => event.target.value);
  };

  return (
    <div className="form">
      <h1>REGISTRARSE</h1>
      <form>
        <div>
          <label>Username: </label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label>Nombre: </label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div>
          <label>Apellido: </label>
          <input type="text" id="apellido" name="apellido" />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="Email"
            id="email"
            name="email"
            value={Email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button onClick={handleLogin}>Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default RegisterForm;
