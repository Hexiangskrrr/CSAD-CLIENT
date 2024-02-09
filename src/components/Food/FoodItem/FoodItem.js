import styles from "./FoodItem.module.css";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useCart } from "react-use-cart";
import AddIcon from "@mui/icons-material/Add";

const FoodItem = (props) => {
  const { addItem } = useCart();
  const [modal, setModal] = useState(false);

  const addOrder = () => {
    addItem(props);
  };

  return (
    <div className={styles.card} onClick={() => setModal(true)}>
      <h3>{props.name}</h3>
      <p>{props.category}</p>
      <p className={styles.price}>${props.price}</p>
      <img src={props.imageUrl} alt={props.name} />
      <PureModal
        header={
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {props.name}
          </Typography>
        }
        footer={
          <div>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{ backgroundColor: "white", color: "black" }}
              onClick={addOrder}
            >
              Add to Order
            </Button>
          </div>
        }
        isOpen={modal}
        closeButton="X"
        onClose={() => {
          setModal(false);
          return true;
        }}
        width="auto"
      >
        <div>{props.description}</div>
        <div>${props.price}</div>
        <img
          src={props.imageUrl}
          alt={props.name}
          className={styles.modalImg}
        />
      </PureModal>
    </div>
  );
};

export default FoodItem;
