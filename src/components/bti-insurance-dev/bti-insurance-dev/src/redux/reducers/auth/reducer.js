import types from "./actions";

const initialState = {
  counter: 0,
  userData: {},
  accessToken: "",
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.SET_USER_DATA:
      return {
        ...state,
        userData: actions.userData,
      };
    case types.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: actions.accessToken,
      };
    case types.INCREMENT:
      return {
        ...state,
        counter: actions.counter,
      };
    case types.DECREMENT:
      return {
        ...state,
        counter: actions.counter,
      };
    case types.SELECTED_MENU:
      return {
        ...state,
        selectedMenu: actions.selectedMenu,
      };
    case types.SELECTED_HEADER:
      return {
        ...state,
        selectedHeader: actions.selectedHeader,
      };
    default:
      return state;
  }
}
