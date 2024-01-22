import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUsers: (state, { payload }) => {
      let arr = [];
      if (Array.isArray(payload)) {
        arr = payload;
      } else {
        //new user
        //create max id and add it to new user
        // get existing max id
        const maxId = state?.reduce(
          (pId, user) => (pId > user.id ? pId : user?.id),
          0
        );

        payload.id = maxId + 1;
        arr = [payload];
      }
      return [...state, ...arr];
    }, // addUsers
    updateUser: (state, { payload }) => {
      // payload = {id:3, name:"aaaa", mobile:1212};
      const arr = [...state];
      // get a user by id
      const index = arr?.findIndex((u) => u.id == payload.id);
      const updatedUser = { ...arr[index], ...payload };
      arr.splice(index, 1, updatedUser);
      return arr;
    }, // updateUsers
    deleteUser: (state, { payload: id }) => {
      return state.filter((u) => u.id != id);
    }, // deleteUser
  },
});

export const { addUsers, updateUser, deleteUser } = userSlice.actions;
export const selectUser = (state) => state.users;
export default userSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "users",
//   initialState: [],
//   reducers: {
//     addUsers: (state, { payload }) => {
//       let arr = [];
//       if (Array.isArray(payload)) {
//         arr = payload;
//       } else {
//         //new user
//         //create max id and add it to new user
//         //get exixting max id
//         const maxId = state?.reduce(
//           (pId, user) => (pId > user.id ? pId : user?.id),
//           0
//         );
//         payload.id = maxId + 1;
//         arr = [payload];
//       }
//       return [...state, ...arr];
//     }, //addUsers
//     updateUser: (state, { payload }) => {
//       //payload= {id:3,name:"asd",mobile:"1212"}
//       const arr = [...state];
//       //get a user by id
//       const index = state?.findIndex((u) => u.id == payload.id); //use findindex() for taking on the basis of id
//       const updateUser = { ...state[index], ...payload };
//       arr.splice(index, 1, updateUser);
//       return arr;
//     }, //updateUser
//     deleteUser: (state, { payload: id }) => {
//       return state.filter((u) => u.id != id);
//     },
//   },
// });

// export const { addUsers, updateUser, deleteUser } = userSlice.actions;
// export const selectUser = (state) => state.users;
// export default userSlice.reducer;
// -----------------------------------------------------------------------------------
// import { createSlice } from "@reduxjs/toolkit";
// const userSlice = createSlice({
//   name: "users",
//   initialState: [],
//   reducers: {
//     // here we do add ,update,delete
//     addUsers: (state, { payload }) => {
//       let arr = [{}];
//       if (Array.isArray(payload)) {
//         arr = payload;
//       } else {
//         //new user
//         //   create max id and add it to new user
//         const maxId = state?.reduce(
//           (pId, user) => (pId > user.id ? pId : user?.id),
//           0
//         );

//         payload.id = maxId + 1;
//         arr = [payload];
//       }
//       return [...state, ...arr];
//     }, //addUsers
//     updateUser: (state, { payload }) => {
//       //payload= {id:3,name:"asd",mobile:"1212"}
//       const arr = [...state];
//       //get a user by id
//       const index = state?.findIndex((u) => u.id == payload.id); //use findindex() for taking on the basis of id
//       const updateUser = { ...state[index], ...payload };
//       arr.splice(index, 1, updateUser);
//       return arr;
//     }, //updateUser
//     deleteUser: (state, { payload: id }) => {
//       return state.filter((u) => u.id != id);
//     },
//   },
// });
// export const { addUsers, updateUser, deleteUser } = userSlice.actions;
// export const selectUser = (state) => state.users;
// export default userSlice.reducer;
