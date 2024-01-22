import axios from "axios";
import { addUsers } from "./userSlice";
// thunk action creator
export function loadUsers(page = 1) {
  //  we don't call thunk function we dispatch() it
  // thunk function
  return async (dispatch, getState) => {
    const response = axios.get(`https://reqres.in/api/users?page=${page}`); //here we give dynamically page no  for that we have to pass that value to function for that we need to call the function but we don't call it  for that we use closure concept
    // in that this function i.e loadUsers() will take or access parent function variables(parameters)for that we make parent of this function

    dispatch(addUsers(response?.data?.data));
  };
}
