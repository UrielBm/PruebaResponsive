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
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div>
        <a href="#" className="linkPssword">
          olvide mi contraseña
        </a>
      </div>
      <button type="submit" class="btn btn-primary">
        Entrar
      </button>
    </form>
  );
};

export default Login;
