import { useCart } from "react-use-cart";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
const Order = () => {
  const { isEmpty, items, updateItemQuantity } = useCart();

  if (isEmpty) return <Typography>View menu to add order!</Typography>;

  return (
    <>
      {items.map((item) => (
        <Typography key={item.id}>
          <Typography>
            {item.name} (${item.price})
          </Typography>
          <Box>
            <Button
              size="small"
              variant="outlined"
              sx={{
                borderRadius: 3,
                padding: "4px 0px",
                backgroundColor: "white",
                color: "black",
                borderColor: "black",
              }}
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </Button>
            <Typography variant="p" marginX={"10px"}>
              {item.quantity}
            </Typography>
            <Button
              size="small"
              variant="outlined"
              sx={{
                borderRadius: 3,
                padding: "4px 0px",
                backgroundColor: "white",
                color: "black",
                borderColor: "black",
              }}
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </Button>
          </Box>
        </Typography>
      ))}
    </>
  );
};

export default Order;
