const actions = {
  INCREMENT: 'auth/INCREMENT',
  DECREMENT: 'auth/DECREMENT',
  SET_ACCESS_TOKEN: 'auth/SET_ACCESS_TOKEN',
  SET_USER_DATA: "auth/SET_USER_DATA",
  SELECTED_MENU: "auth/SELECTED_MENU",
  SELECTED_HEADER: "auth/SELECTED_HEADER",

  setAccessToken: (accessToken) => (dispatch) => dispatch({
    type: actions.SET_ACCESS_TOKEN,
    accessToken,
  }),

  setUserData: (data) => {
    console.log("data=====>> ", data);
    let uData = {};
    if (data !== undefined && data !== null && Object.keys(data).length > 0) {
      uData = data;
    }

    return (dispatch) =>
      dispatch({
        type: actions.SET_USER_DATA,
        userData: uData,
      });
  },
  setIncrement: (counter) => (dispatch) =>
    dispatch({
      type: actions.INCREMENT,
      counter: counter,
    }),
  setDecrement: (counter) => (dispatch) =>
    dispatch({
      type: actions.DECREMENT,
      counter: counter,
    }),
  setSelectedMenu: (menu) => (dispatch) =>
    dispatch({
      type: actions.SELECTED_MENU,
      selectedMenu: menu,
    }),
  setSelectedHeader: (header) => (dispatch) =>
    dispatch({
      type: actions.SELECTED_HEADER,
      selectedHeader: header,
    }),
};

export default actions;
