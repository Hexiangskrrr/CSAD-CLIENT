import {  useCart  } from 'react-use-cart'
import styles from './Order.module.css'
import { Typography, Button } from '@mui/material';
const Order = () => {

  const {
    isEmpty,
    items,
    updateItemQuantity,
  } = useCart()

  if (isEmpty) return <Typography>View menu to add order!</Typography>;

  return (
    <>
      {items.map((item) => (
        <Typography key={item.id} align='centre' >
          <div>{item.name} (${item.price})</div>
          <div>
            <Button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</Button>
            <Typography variant='p'>{item.quantity}</Typography>
            <Button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</Button>
          </div>
        </Typography>
      ))}
    </>
  );
}

export default Order