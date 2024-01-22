import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, selectProducts } from "../../app/product-Slice";
import ProductService from "../../Services/ProductService";

const Product = ({ id, title, thumbnail, brand, price, rating }) => {
  const dispatch = useDispatch();
  const addToCart = (prod) => {
    dispatch(addProduct(prod));
  };

  const products = useSelector(selectProducts);

  const addedToCart = products?.find((p) => p.id == id) ? true : false;
  return (
    <Card variant="elevation" sx={{ padding: 2 }}>
      <img src={thumbnail} style={{ width: 300, height: 200 }} />
      <h4>{title}</h4>
      <p>
        <b>Brand:</b>
        {brand}
      </p>
      <p>
        <b>Price:</b>
        {price}
      </p>
      <p>
        <Rating name="read-only" value={rating} readOnly />
      </p>
      <Button
        variant="contained"
        onClick={() =>
          addToCart({ id, thumbnail, title, brand, price, rating })
        }
        disabled={addedToCart}
      >
        {addedToCart ? "Added" : " Add to cart"}
      </Button>
    </Card>
  );
};

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const response = await ProductService.fetchAllProducts();
    setProducts(response.data?.products);
  };
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <h3>product listing </h3>
      <Grid container spacing={2}>
        {products?.map((prod) => (
          <Grid key={prod.id} xs={12} md={3}>
            <Product {...prod} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductListing;
