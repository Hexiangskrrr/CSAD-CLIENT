import FoodItem from "./FoodItem/FoodItem"

import FoodFilterItem from "./FoodFilter/FoodFilterItem"
import styles from './AvailableFood.module.css'
import  {  useState  } from 'react'
import DUMMY_FOOD from "./DUMMY_FOOD" // to be replaced with real data



const selections = ["Drinks", "Dessert", "Seasonal", "Set Meal"]




const AvailableFood = () => {

    const [selectedItem, setSelectedItem] = useState();
  
    const getSelectionItem = (selection) => {
      setSelectedItem(selection)
    };

    const selectionList = selections.map((selection) => (
      <FoodFilterItem
      key={selection}
      selection={selection}
      isSelected={selection === selectedItem}
      onClick={() => getSelectionItem(selection)}
      />
    ))
  

  const filteredFood = DUMMY_FOOD.filter((food) => food.category === selectedItem);

  const foodList = filteredFood.map((food) => (
    <FoodItem
      key = {food.id}
      id  = {food.id}
      name = {food.name}
      price = {food.price}
      description = {food.description}
      category = {food.category}
    />

  ))
  
  return(
    <div>
      <div className={styles.container}>{selectionList}</div>
      <div>{foodList}</div>
    </div>
  )

}

export default AvailableFood