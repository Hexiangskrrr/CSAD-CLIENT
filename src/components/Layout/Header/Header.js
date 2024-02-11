import React from "react";
import { useCart } from "react-use-cart";
import { useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import Order from "../../Order/Order";
import Cost from "../../Order/Cost";
import { Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Container, Stack } from "@mui/system";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Header = () => {
  const { totalItems } = useCart();
  const [modal, setModal] = useState(false);
  const Item = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
  }));

  return (
    <Container>
      <Box sx={{ display: "inline-block" }}>
        <Paper>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Item sx={{ pl: "20px" }}>
              <img src="/favicon-32x32.png" />
            </Item>
            <Item>
              <Typography variant="h3">Delicious Food</Typography>
            </Item>
            <Item>
              <Button
                startIcon={<ShoppingCartIcon />}
                sx={{ color: "black" }}
                onClick={() => setModal(true)}
              >
                {totalItems}
              </Button>
            </Item>
          </Stack>
        </Paper>
      </Box>
      <PureModal
        header="Order"
        footer={
          <Box>
            <Typography variant="h5">Order Summary</Typography>
            <Cost />
          </Box>
        }
        isOpen={modal}
        closeButton="X"
        onClose={() => {
          setModal(false);
          return true;
        }}
        width="auto"
      >
        <Order />
      </PureModal>
    </Container>
  );
};

export default Header;
