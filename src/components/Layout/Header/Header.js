import styles from './Header.module.css'
import React from 'react'
import {  useCart  } from 'react-use-cart'
import {  useState  } from 'react'
import PureModal from 'react-pure-modal'
import 'react-pure-modal/dist/react-pure-modal.min.css'
import Order from '../../Order/Order'
import Cost from '../../Order/Cost'

const Header = () => {

  const { totalItems } = useCart()
  const [modal, setModal] = useState(false)

  return (
    <div className={styles.container}>
      <h1>Delicious Food</h1>
      <button onClick={() => setModal(true)}>cart {totalItems}</button>
        <PureModal
          header="Order"
          footer={
            <div>
              <h2>Order Summary</h2>
              <Cost/>
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
          <Order/>
      </PureModal>
    </div>
  )


}

export default Header