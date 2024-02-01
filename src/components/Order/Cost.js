import {  useCart  } from 'react-use-cart'
import { Button, Typography, Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const Cost = () => {

  const {
    items,
    totalItems,
    emptyCart,
  } = useCart()

  const subTotal = items.reduce((curretTotal, item) => {
    return curretTotal + item.quantity * item.price;
  }, 0)
  
  const gst = (subTotal) => {
    return (subTotal * 0.09)
  }
  
  const serviceCharge = (subTotal) => {
    return ((subTotal + gst(subTotal)) * 0.1)
  }
  
  const grandTotal = (subTotal) => {
    return (subTotal + gst(subTotal) + serviceCharge(subTotal))
  }

  return ( 
    <Box>
      <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Total items: {totalItems}</Typography>
      <Typography variant='h6'>Sub Total: ${subTotal.toFixed(2)}</Typography>
      <Typography variant='small'>Gst 9%: ${gst(subTotal).toFixed(2)}</Typography><br></br>
      <Typography variant='small'>Service Charge 10%: ${serviceCharge(subTotal).toFixed(2)}</Typography>
      <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Grand Total: ${grandTotal(subTotal).toFixed(2)}</Typography>
      <Button variant="outlined" startIcon={<DeleteIcon />} sx={{ backgroundColor: 'white', color: 'black' }} onClick={emptyCart}>clear cart</Button>
    </Box>
  )
}

export default Cost