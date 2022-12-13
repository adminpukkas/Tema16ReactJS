import { ACTIONS_SESION } from "../actions/sesion";

const initialState = {
  sesion: [{ loggedIn: false }],
};

export const sesion = (state = initialState.sesion, action) => {
  switch (action.type) {
    case ACTIONS_SESION.LOGGED:
      state.loggedIn = !state.loggedIn;
      console.log("state.loggedIn: " + state.loggedIn);
      return {
        loggedIn: state.loggedIn,
        ...state
    };
    default:
      if (state.loggedIn === undefined) state.loggedIn = false;
      console.log("state.loggedIn: " +  JSON.stringify([...state]));
      return {
        loggedIn: state.loggedIn,
        ...state
    };
  }
};

export default sesion;
