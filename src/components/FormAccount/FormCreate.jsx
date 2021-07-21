import React from "react";
import "../css/Cuenta.scss";
import SearchIcon from "../../assets/img/searchIcon.png";
import PincelIcon from "../../assets/img/PincelIcon.png";
const FormCreate = () => {
  return (
    <>
      <div className="wrapperTitle">
        <p className="title">
          Crear<span>cuenta</span>
        </p>
      </div>
      <div className="wrapperForms">
        <form className="form">
          <div className="wrapperIcon">
            <img alt="iconSeach" src={SearchIcon} className="icon" />
          </div>
          <div className="wrapperSubtitle">
            <h3>
              Soy <span>coleccionista</span>
            </h3>
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
          <div className="wrapperlink">
            <a href="!#" className="linkPssword">
              olvide mi contraseña
            </a>
          </div>
          <div className="wrapperButton">
            <button type="submit" class="btn btn-primary buttonLogin">
              Entrar
            </button>
          </div>
        </form>
        <div>
          <div className="wrapperSubTitle">
            <h3>
              Soy <span>artista</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCreate;