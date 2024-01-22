import axios from "axios";
const API = axios.create({
  baseURL: "https://dummyjson.com",
});
const ProductService = {
  fetchAllProducts() {
    return API.get("/products");
  },
};

export default ProductService;
