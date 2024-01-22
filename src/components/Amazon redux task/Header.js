import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/ShoppingBag";
import AccountCircle from "@mui/icons-material/ShoppingCart";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { getTotal } from "../../app/product-Slice";
import { useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Header = () => {
  //   const [auth, setAuth] = React.useState(true);
  //   const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();
  const totalProducts = useSelector(getTotal);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Topper Skills
          </Typography>
          <div>
            <IconButton aria-label="cart" onClick={() => navigate("/Checkout")}>
              <StyledBadge badgeContent={totalProducts} color="secondary">
                <ShoppingCartIcon sx={{ color: "#fff" }} />
              </StyledBadge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
