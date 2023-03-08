import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Header from "../../components/Header/Header";

const Login = () => {
  return (
    <section className="login">
      <Header />
      <form className="login__form">
        <h1>Acesse com seu login ou cadastre-se!</h1>
        <h3>Você pode entrar com o seu CPF.</h3>
        <div className="login__input">
          <label htmlFor="name">Digite seu CPF:</label>
          <input
            className="login__input--name"
            id="name"
            type="text"
            placeholder="Nome completo"
          />
          <label htmlFor="password">Senha:</label>
          <input
            className="login__input--password"
            id="password"
            type="password"
            placeholder="*********"
          />
          <button className="login__input--button" type="submit">
            <Link to={'/home'}>Entrar</Link>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
