import React from "react";
import AvailableFood from "../../components/Food/AvailableFood/AvailableFood";
import Header from "../../components/Layout/Header/Header";
import { useEffect } from "react";

import { CartProvider } from "react-use-cart";
import { Container, Box } from "@mui/material";

function Menu() {
  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
  }, []);

  return (
    <CartProvider>
      <Box align="center">
        <Header id="header">
          <Header />
        </Header>
        <Container id="availablefood">
          <AvailableFood />
        </Container>
      </Box>
    </CartProvider>
  );
}

export default Menu;
