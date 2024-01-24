import {  useCart  } from 'react-use-cart'


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
    <div>
      <p>Total items: {totalItems}</p>
      <h3>Sub Total: ${subTotal.toFixed(2)}</h3>
      <h4>Gst 9%: ${gst(subTotal).toFixed(2)}</h4>
      <h4>Service Charge 10%: ${serviceCharge(subTotal).toFixed(2)}</h4>
      <h2>Grand Total: ${grandTotal(subTotal).toFixed(2)}</h2>
      <button onClick={emptyCart}>clear cart</button>
    </div>
  )
}

export default Cost