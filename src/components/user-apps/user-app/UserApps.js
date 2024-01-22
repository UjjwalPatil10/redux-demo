import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loadUsers } from "./thunk-actions";
import Swal from "sweetalert2";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { addUsers, deleteUser, selectUser, updateUser } from "./userSlice";

const defaultUser = {
  first_name: "",
  last_name: "",
  email: "",
  avatar: "",
};

const UserApps = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUser); // redux state, got users state
  const [open, setOpen] = useState(false); // to open dialogbox
  const [operation, setOperation] = useState("add");
  const [user, setUser] = useState(defaultUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((state) => ({ ...state, [name]: value }));
  };
  //image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const fr = new FileReader();
    fr.addEventListener("load", () => {
      setUser((state) => ({ ...state, avatar: fr.result }));
    });

    if (file) {
      fr.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log("User: ", user);
    if (operation == "edit") {
      dispatch(updateUser(user));
    } else {
      dispatch(addUsers(user));
    }
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    //load user here..
    dispatch(loadUsers(1));
  }, []);

  const addUser = () => {
    setOperation("add");
    setUser(defaultUser);
    setOpen(true);
  };
  const editUser = (user) => {
    setOperation("edit");
    setUser(user);
    setOpen(true);
  };

  const removeUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const { first_name, last_name, email, avatar } = user;
  return (
    <>
      <h3>User App</h3>
      <Button variant="contained" onClick={addUser}>
        New +
      </Button>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(users) &&
          users?.map(({ id, first_name, last_name, email, avatar }) => (
            <div
              key={id}
              style={{
                border: "1px solid #8888",
                padding: 5,
                margin: 5,
                width: 200,
              }}
            >
              <img src={avatar} style={{ width: "100%", height: 200 }} alt="" />
              <h2>
                {first_name} {last_name}
              </h2>
              <p>{email}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 5,
                }}
              >
                <Button
                  variant="contained"
                  onClick={() =>
                    editUser({ id, first_name, last_name, email, avatar })
                  }
                >
                  EDIT
                </Button>
                <button variant="contained" onClick={() => removeUser(id)}>
                  DELETE
                </button>
              </div>
            </div>
          ))}
      </section>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{operation == "edit" ? "Edit" : "Add"} User</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="First Name"
                name="first_name"
                value={first_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Last Name"
                name="last_name"
                value={last_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Avatar"
                name="avatar"
                type="file"
                onChange={handleImageChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={handleSubmit}>
                {operation == "edit" ? "Update" : "Create"}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserApps;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { loadUsers } from "./thunk-actions";
// import Swal from "sweetalert2";
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import { addUsers, deleteUser, selectUser, updateUser } from "./userSlice";

// const defaultUser = {
//   first_name: "",
//   last_name: "",
//   email: "",
//   avatar: "",
// };

// const UserApps = () => {
//   const dispatch = useDispatch();
//   const users = useSelector(selectUser); // redux state, got users state
//   const [open, setOpen] = useState(false); // to open dialogbox
//   const [operation, setOperation] = useState("add");
//   const [user, setUser] = useState(defaultUser);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((state) => ({ ...state, [name]: value }));
//   };
//   //image change
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const fr = new FileReader();
//     fr.addEventListener("load", () => {
//       setUser((state) => ({ ...state, avatar: fr.result }));
//     });

//     if (file) {
//       fr.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = () => {
//     console.log("User: ", user);
//     if (operation == "edit") {
//       dispatch(updateUser(user));
//     } else {
//       dispatch(addUsers(user));
//     }
//     handleClose();
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   useEffect(() => {
//     //load user here..
//     dispatch(loadUsers(1));
//   }, []);

//   const addUser = () => {
//     setOperation("add");
//     setUser(defaultUser);
//     setOpen(true);
//   };
//   const editUser = (user) => {
//     setOperation("edit");
//     setUser(user);
//     setOpen(true);
//   };

//   const removeUser = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         dispatch(deleteUser(id));
//         Swal.fire("Deleted!", "Your file has been deleted.", "success");
//       }
//     });
//   };

//   const { first_name, last_name, email, avatar } = user;
//   return (
//     <>
//       <h3>User App</h3>
//       <Button variant="contained" onClick={addUser}>
//         New +
//       </Button>
//       <section style={{ display: "flex", flexWrap: "wrap" }}>
//         {Array.isArray(users) &&
//           users?.map(({ id, first_name, last_name, email, avatar }) => (
//             <div
//               key={id}
//               style={{
//                 border: "1px solid #8888",
//                 padding: 5,
//                 margin: 5,
//                 width: 200,
//               }}
//             >
//               <img src={avatar} style={{ width: "100%", height: 200 }} alt="" />
//               <h2>
//                 {first_name} {last_name}
//               </h2>
//               <p>{email}</p>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   padding: 5,
//                 }}
//               >
//                 <Button
//                   variant="contained"
//                   onClick={() =>
//                     editUser({ id, first_name, last_name, email, avatar })
//                   }
//                 >
//                   EDIT
//                 </Button>
//                 <Button variant="contained" onClick={() => removeUser(id)}>
//                   DELETE
//                 </Button>
//               </div>
//             </div>
//           ))}
//       </section>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>{operation == "edit" ? "Edit" : "Add"} User</DialogTitle>
//         <DialogContent>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="First Name"
//                 name="first_name"
//                 value={first_name}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Last Name"
//                 name="last_name"
//                 value={last_name}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Email"
//                 name="email"
//                 value={email}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 label="Avatar"
//                 name="avatar"
//                 type="file"
//                 onChange={handleImageChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button variant="contained" onClick={handleSubmit}>
//                 {operation == "edit" ? "Update" : "Create"}
//               </Button>
//             </Grid>
//           </Grid>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default UserApps;
