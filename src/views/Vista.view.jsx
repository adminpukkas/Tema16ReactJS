import { useState } from "react";
import LogoutButton from "../components/LogoutButton.component.jsx";
import LoginButton from "../components/LoginButton.component.jsx";

export default function Vista() {
  const [acceso, setAcceso] = useState(true);
  const [mensajesSinLeer, setMensajesSinLeer] = useState(0);

  let addMensajeSinLeer = () => {
    setMensajesSinLeer(mensajesSinLeer + 1);
  };

  let accederLogin = () => {
    setAcceso(true);
  };
  let accederLogout = () => {
    setAcceso(false);
  };

  let boton;

  if (acceso) boton = <LogoutButton onClick={accederLogout} />;
  else boton = <LoginButton onClick={accederLogin} />;

  return (
    <>
      <div> {boton} </div>
      <div>
        {mensajesSinLeer > 0 && <p> Tienes {mensajesSinLeer} mensajes sin leer... </p>}

        {mensajesSinLeer > 0 ?
            (<p> Tienes {mensajesSinLeer} mensajes sin leer... </p>) :
            (<p> No tienes mensajes sin leer... </p>)
        }

        <button onClick={addMensajeSinLeer}>Sumar 1 mensaje</button>
      </div>
    </>
  );
}
