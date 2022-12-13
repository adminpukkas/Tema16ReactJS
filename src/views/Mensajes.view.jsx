import { useState } from "react";
import MensajesHeader from "../components/MensajesHeader/MensajesHeader.component";
import MensajesTable from "../components/MensajesTable/MensajesTable.component";
import "./Mensajes.view.scss";
import { Formik } from "formik";
import * as Yup from "yup";

let initialValues = { asunto: "", email: "", mensaje: "" };

export default function Mensajes() {
  const [mensajes, setMensajes] = useState([]);

  let manejarEnvio = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log("%cDatos del formulario 📑", "color: green");
      console.log(`Asunto: ${values.asunto}`);
      console.log(`Email: ${values.email}`);
      console.log(`Mensaje: ${values.mensaje}`);

      let nuevo = {
        asunto: values.asunto,
        email: values.email,
        mensaje: values.mensaje,
        leido: false,
      };

      setMensajes((mensajes) => [...mensajes, nuevo]);

      setSubmitting(false);
    }, 1000);
  };

  /* Eliminamos todos los mensajes del listado mensajes,
   * estableciendo su valor como una lista vacía.
   * */
  let eliminarMensajes = () => {
    setMensajes([]);
  };

  /* Pasándole el índice como argumento,
   * eliminamos el mensaje concreto de la lista y
   * actualizamos su valor en el estado. */
  let eliminarMensaje = (index) => {
    mensajes.splice(index, 1);
    setMensajes([...mensajes]);
  };

  let leerMensaje = (index) => {
    mensajes[index].leido = !mensajes[index].leido;
    setMensajes([...mensajes]);
  };

  const validaciones = Yup.object().shape({
    asunto: Yup.string().required("Por favor, escribe tu asunto.").min(3, "Mínimos 3 carácteres."),
    email: Yup.string().required("Por favor, introduce tu email.").email('Formato de email incorrecto.'),
    mensaje: Yup.string().required("Por favor, incluye tu mensaje").min(10, "Mínimos 10 carácteres."),
  });

  return (
    <div className="Mensajes">
      <Formik validationSchema={validaciones} initialValues={initialValues} onSubmit={manejarEnvio}>
        {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
          <form onSubmit={handleSubmit} className="Formulario">
            <div className="grupoForm">
              <input className="Elemento" placeholder="Asunto" type="text" name="asunto" onChange={handleChange} value={values.nombre} />
              {errors.asunto ? <div class="erroresForm">{errors.asunto}</div> : null}
            </div>
            <div className="grupoForm">
              <input className="Elemento" placeholder="Email" type="text" name="email" onChange={handleChange} value={values.nombre} />
              {errors.email ? <div class="erroresForm">{errors.email}</div> : null}
            </div>
            <div className="grupoForm">
              <input className="Elemento" placeholder="Mensaje" type="text" name="mensaje" onChange={handleChange} value={values.nombre} />
              {errors.mensaje ? <div class="erroresForm">{errors.mensaje}</div> : null}
            </div>

            <MensajesHeader clickNuevo={isSubmitting} clickEliminar={eliminarMensajes}></MensajesHeader>
          </form>
        )}
      </Formik>

      <MensajesTable mensajes={mensajes} clickEliminarUno={eliminarMensaje} clickMarcarLeido={leerMensaje}></MensajesTable>
    </div>
  );
}
