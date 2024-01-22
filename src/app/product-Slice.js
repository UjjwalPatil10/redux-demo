// import { createSlice } from "@reduxjs/toolkit";

// const productSlice = createSlice({
//   name: "products",
//   initialState: [],
//   reducers: {
//     addProduct: (state, { payload }) => {
//       //if new product is already available in the cart then increment quantity otherwise add
//       const index = state?.findIndex((p) => p?.id == payload?.id);
//       if (index != -1) {
//         //increase quantity
//         const prods = [...state];
//         const existingPro = prods[index];
//         existingPro.qty += 1;
//         prods.splice(index, 1, existingPro);
//         //return prods
//       } else {
//         //add new
//         return [...state, { ...payload, qty: 1 }];
//       }
//     },

//     removeProduct: (state, { payload }) => {
//       const prods = [...state];
//       const index = prods?.findIndex((p) => p?.id == payload?.id);

//       if (payload.qty == 0) {
//         return prods.filter((p) => p.id != payload?.id);
//       } else {
//         const existingPro = prods[index];
//         existingPro.qty = payload.qty;
//         prods.splice(index, 1, existingPro);
//       }
//     },
//   },
// });

// export const { addProduct, removeProduct } = productSlice.actions;
// export const selectProducts = (state) => state.products;
// export const getTotal = (state) => state?.products?.length;
// export default productSlice.reducer;
