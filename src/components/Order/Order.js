import {  useCart  } from 'react-use-cart'
import styles from './Order.module.css'
const Order = () => {

  const {
    isEmpty,
    items,
    updateItemQuantity,
  } = useCart()

  if (isEmpty) return <p>View menu to add order!</p>;

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className={styles.orderItem}>
          <div>{item.name} (${item.price})</div>
          <div>
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
            <p>{item.quantity}</p>
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Order