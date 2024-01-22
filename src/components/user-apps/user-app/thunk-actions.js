import axios from "axios";
import { addUsers } from './userSlice';

// to get data/users from server we simply use thunk function and creators to show the data
//  we get dispatch from useDispatch() hook. 
// thunk action creator
export function loadUsers (page = 1){
    // thunk function
    return async (dispatch, getState) =>{
        const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
        dispatch(addUsers(response?.data?.data));
        console.log(response.data);
    };
}