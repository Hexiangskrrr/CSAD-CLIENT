import styles from './FoodItem.module.css'

import {  useCart  } from 'react-use-cart'



const FoodItem = (props) => {

  const { addItem } = useCart();

  return (
    <div className={styles.card}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p className={styles.price}>{props.price}</p>
      <button onClick={() => addItem(props)}>Add to order</button>
    </div>
  )
}

export default FoodItem