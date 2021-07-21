import React from "react";
import "../css/form.scss";
const Login = () => {
  return (
    <form className="form">
      <div className="wrapperTitle">
        <p className="title">
          Iniciar<span>Sesión</span>
        </p>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="wrapperlink">
        <a href="!#" className="linkPssword">
          olvide mi contraseña
        </a>
      </div>
      <div className="wrapperButton">
        <button type="submit" className="btn btn-primary buttonLogin">
          Entrar
        </button>
      </div>
    </form>
  );
};

export default Login;
