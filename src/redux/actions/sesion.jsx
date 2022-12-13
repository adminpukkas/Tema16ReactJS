export const ACTIONS_SESION = {
  LOGGED: "LOGGED_SESION"
};

export const loggedSession = () => {
  return {
    type: ACTIONS_SESION.LOGGED
  };
};
