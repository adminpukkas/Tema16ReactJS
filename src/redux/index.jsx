import { createStore } from 'redux';
import { sesion } from './reducers/sesion';

// STORE - El estado global de la aplicación.
	
// STORE - El estado global de la aplicación.
let store = createStore(
  sesion,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;