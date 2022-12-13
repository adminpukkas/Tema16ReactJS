import './MensajesHeader.component.scss';

export default function MensajesHeader(props) {
  return (
    <div className="MensajesHeader">
      {/*<button onClick={props.clickNuevo} className="Nuevo">Nuevo</button>*/}
      <button className="Nuevo" type="submit" disabled={props.clickNuevo}>
        Nuevo
      </button>
      <button onClick={props.clickEliminar} className="Vaciar">Vaciar</button>  
    </div> 
  );
}