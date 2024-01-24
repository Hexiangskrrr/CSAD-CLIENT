import styles from './FoodItem.module.css'
import PureModal from 'react-pure-modal'
import 'react-pure-modal/dist/react-pure-modal.min.css'
import {  useState  } from 'react'

import {  useCart  } from 'react-use-cart'



const FoodItem = (props) => {

  const { addItem } = useCart();
  const [modal, setModal] = useState(false)

  const addOrder = () => {
    addItem(props)
  }

  return (
    <div className={styles.card} onClick={() => setModal(true)}>
      <h3>{props.name}</h3>
      <p>{props.category}</p>
      <p className={styles.price}>${props.price}</p>
        <PureModal
            header={props.name}
            footer={
              <div>
                <button onClick={addOrder}>Add to order</button>
              </div>
            }
            isOpen={modal}
            closeButton="X"
            onClose={() => {
              setModal(false);
              return true;
            }}
            width='auto'
          >
            <div>
              {props.description}
            </div>
            <div>
              ${props.price}
            </div>
            
        </PureModal>
    </div>
  )
}

export default FoodItem