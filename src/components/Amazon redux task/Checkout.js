import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  removeProduct,
  selectProducts,
} from "../../app/product-Slice";
import { Button, Card, Container, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
const Checkout = () => {
  const products = useSelector(selectProducts);

  const [totalAmount, setTotalAmount] = useState(0);

  const dispatch = useDispatch();

  const incQty = (prod) => {
    dispatch(addProduct(prod));
  };

  const decQty = (prod) => {
    dispatch(removeProduct(prod));
  };

  useEffect(() => {
    const total = products?.reduce((pa, { price, qty }) => pa + price * qty, 0);
    setTotalAmount(total);
  }, products);

  return (
    <Container>
      <h3>Checkout</h3>
      <Link to="/">Continue Shopping</Link>
      <Grid container spacing={2}>
        {Array.isArray(products) &&
          products?.map(
            ({ id, thumbnail, title, brand, price, rating, qty }) => (
              <Grid item xs={12}>
                <Card variant="elevation">
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={3}>
                      <img src={thumbnail} style={{ width: "100%" }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <h3>{title}</h3>
                      <p>Brand:{brand}</p>
                      <Box>
                        <Button
                          onClick={() => decQty({ id, qty: qty - 1 })}
                          variant="contained"
                        >
                          -
                        </Button>
                        <span style={{ fontSize: "1.5em", margin: "0 10px" }}>
                          {qty}
                        </span>
                        <Button
                          onClick={() => incQty({ id })}
                          variant="contained"
                        >
                          +
                        </Button>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <p>Price:{price}</p>
                      <h3>Total:{price * qty}</h3>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            )
          )}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <h3>Total:{totalAmount}</h3>
      </Box>
    </Container>
  );
};

export default Checkout;
