import FoodItem from "./FoodItem/FoodItem"
import axios from "axios"
import FoodFilterItem from "./FoodFilter/FoodFilterItem"
import styles from './AvailableFood.module.css'
import { useState, useEffect } from 'react'

const AvailableFood = () => {
  const [selectedItem, setSelectedItem] = useState()
  const [foodList, setFoodList] = useState([])

  const selections = ["Drinks", "Dessert", "Seasonal", "Set Meal"]

  const SERVER_URL = 'http://localhost:5003'

  useEffect(() => {
    axios.get(`${SERVER_URL}/menu`)
      .then(response => {
        setFoodList(response.data);
        console.log(foodList)
      })
      .catch(error => {
        console.error("Error fetching data:", error)
      });
  }, []);

  const getSelectionItem = (selection) => {
    setSelectedItem(selection);
  };

  const selectionList = selections.map((selection) => (
    <FoodFilterItem
      key={selection}
      selection={selection}
      isSelected={selection === selectedItem}
      onClick={() => getSelectionItem(selection)}
    />
  ));

  const filteredFood = foodList.filter((food) => food.category === selectedItem);

  const foodItems = filteredFood.map((food) => (
    <FoodItem
      key={food.id}
      id={food.id}
      name={food.name}
      price={food.price}
      description={food.description}
      category={food.category}
    />
  ));

  return (
    <div>
      <div className={styles.container}>{selectionList}</div>
      <div>{foodItems}</div>
    </div>
  );
};

export default AvailableFood;
