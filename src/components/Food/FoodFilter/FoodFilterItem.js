import styles from './FoodFilterItem.module.css'

const SelectionItem = (props) => {

  const clickSelection = () => {
    console.log(props.selection)
    props.onClick()
  }

  return (
    <div onClick={clickSelection} className={`${styles.card} ${props.isSelected ? styles.selected : ''}`}>
      {props.selection}
    </div>
  )
}

export default SelectionItem