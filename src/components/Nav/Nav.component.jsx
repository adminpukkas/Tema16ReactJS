import './Nav.component.scss';
import { Link } from 'react-router-dom';
import { Moon, Sun } from "react-bootstrap-icons";
import { useState } from "react";


export default function Nav() {

  const [esDeDia, setDia] = useState(true);

  let texto = esDeDia ? (
    <div>
      Cambiar a modo nocturno <Moon />
    </div>
  ) : (
    <div>
      Cambiar a modo diurno <Sun />
    </div>
  );
 //className={esDeDia ? "LoginDia" : "Login"}
  return (
    <div className={`Nav ${esDeDia ? "Dia": "Noche"}`}>
        <Link className="Nav-link" to='/'>Home</Link>
        <Link className="Nav-link" to='/login'>Login</Link>
        <Link className="Nav-link" to='/mensajes'>Mensajes</Link>
        <Link className="Nav-link" to='/store'>Store</Link>
        <button className="btn btn-primary " onClick={() => setDia(!esDeDia)}>
          {texto}
        </button>
    </div>
  );
}