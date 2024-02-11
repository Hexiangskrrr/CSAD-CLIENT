import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useState } from "react";
import { Button, Card, Paper, Typography } from "@mui/material";
import { useCart } from "react-use-cart";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

const FoodItem = (props) => {
  const { addItem } = useCart();
  const [modal, setModal] = useState(false);

  const addOrder = () => {
    addItem(props);
  };

  return (
    <Card
      component={Paper}
      sx={{
        display: "inline-block",
        width: "250px",
        height: "400px",
        margin: "10px",
        padding: "15px",
      }}
      onClick={() => setModal(true)}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: "8px" }}>
        {props.name}
      </Typography>
      <Typography sx={{ mb: "12px" }}>{props.category}</Typography>
      <Typography sx={{ fontWeight: "bold", color: "#ff5733" }}>
        ${props.price}
      </Typography>
      <PureModal
        header={
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {props.name}
          </Typography>
        }
        footer={
          <Box>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{
                backgroundColor: "white",
                color: "black",
                borderColor: "black",
              }}
              onClick={addOrder}
            >
              Add to Order
            </Button>
          </Box>
        }
        isOpen={modal}
        closeButton="X"
        onClose={() => {
          setModal(false);
          return true;
        }}
        width="30%"
      >
        <Typography sx={{ wordWrap: "break-word" }}>
          {props.description}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>${props.price}</Typography>
      </PureModal>
    </Card>
  );
};

export default FoodItem;
