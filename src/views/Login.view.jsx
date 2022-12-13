import React from "react";
import "./Login.view.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loggedSession } from "../redux/actions/sesion";
import { PersonAdd, Person } from "react-bootstrap-icons";

//localStorage.setItem('email', 'aa.aa.com');

let initialValues = { email: "", password: "" };

export default function Login() {
  const dispatch = useDispatch();

  let loginUsuario = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log("%cDatos del formulario 📑", "color: green");
      console.log(`Email: ${values.email}`);
      console.log(`Password: ${values.password}`);

      if (localStorage.getItem(values.email) === values.password) {
        console.log("%cUsuario logueado correctamente ✅", "color: green");
        dispatch(loggedSession());
      } else {
        console.log("%cUsuario no logueado ❌", "color: red");
      }

      setSubmitting(false);
    }, 1000);
  };

  let registraUsuario = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log("%cDatos del formulario 📑", "color: green");
      console.log(`Email: ${values.email}`);
      console.log(`Password: ${values.password}`);

      localStorage.setItem(values.email, values.password);

      setSubmitting(false);
    }, 1000);
  };

  const validaciones = Yup.object().shape({
    email: Yup.string().required("Por favor, introduce tu email.").email("Formato de email incorrecto."),
    password: Yup.string().required("Por favor, incluye tu contraseña.").min(5, "Mínimos 5 carácteres."),
  });

  

  return (
      <div className="container">        
        <h1>Login ReactJS</h1>

        <div className="row">
          <div className="col-6">
            <h2>
              Iniciar sesión <Person />
            </h2>
            <Formik validationSchema={validaciones} initialValues={initialValues} onSubmit={loginUsuario}>
              {({ handleChange, handleSubmit, isSubmitting, errors }) => (
                <form onSubmit={handleSubmit} className="Formulario">
                  <div className="grupoForm">
                    <input className="Elemento" placeholder="Email" type="text" name="email" onChange={handleChange} />
                    {errors.email ? <div>{errors.email}</div> : null}
                  </div>
                  <div className="grupoForm">
                    <input className="Elemento" placeholder="Contraseña" type="text" name="password" onChange={handleChange} />
                    {errors.password ? <div>{errors.password}</div> : null}
                  </div>
                  <button className="btn btn-success" type="submit" disabled={isSubmitting}>
                    Login
                  </button>
                </form>
              )}
            </Formik>
          </div>
          <div className="col-6">
            <h2>
              Registro usuario <PersonAdd />
            </h2>

            <Formik validationSchema={validaciones} initialValues={initialValues} onSubmit={registraUsuario}>
              {({ handleChange, handleSubmit, isSubmitting, errors }) => (
                <form onSubmit={handleSubmit} className="Formulario">
                  <div className="grupoForm">
                    <input className="Elemento" placeholder="Email" type="text" name="email" onChange={handleChange} />
                    {errors.email ? <div>{errors.email}</div> : null}
                  </div>
                  <div className="grupoForm">
                    <input className="Elemento" placeholder="Contraseña" type="text" name="password" onChange={handleChange} />
                    {errors.password ? <div>{errors.password}</div> : null}
                  </div>
                  <button className="btn btn-info" type="submit" disabled={isSubmitting}>
                    Registrar
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
  );
}
