import FoodItem from "./FoodItem/FoodItem"

const DUMMY_FOOD = [
  {
    "id": 1,
    "name": "Classic Burger",
    "price": 12.99
  },
  {
    "id": 2,
    "name": "Grilled Chicken Caesar Salad",
    "price": 9.99
  },
  {
    "id": 3,
    "name": "Spaghetti Bolognese",
    "price": 14.99
  },
  {
    "id": 4,
    "name": "Margherita Pizza",
    "price": 10.99
  },
  {
    "id": 5,
    "name": "New York Strip Steak",
    "price": 24.99
  },
  {
    "id": 6,
    "name": "BBQ Pulled Pork Sandwich",
    "price": 11.99
  },
  {
    "id": 7,
    "name": "Caesar Wrap",
    "price": 8.99
  },
  {
    "id": 8,
    "name": "Vegetarian Quinoa Bowl",
    "price": 13.99
  },
  {
    "id": 9,
    "name": "Fish and Chips",
    "price": 15.99
  },
  {
    "id": 10,
    "name": "Chicken Alfredo Pasta",
    "price": 16.99
  },
  {
    "id": 11,
    "name": "Cheese Stuffed Mushrooms",
    "price": 8.49
  },
  {
    "id": 12,
    "name": "Shrimp Scampi",
    "price": 18.99
  },
  {
    "id": 13,
    "name": "Caprese Salad",
    "price": 7.99
  },
  {
    "id": 14,
    "name": "Hawaiian Pizza",
    "price": 12.49
  },
  {
    "id": 15,
    "name": "Filet Mignon",
    "price": 29.99
  },
  {
    "id": 16,
    "name": "Turkey Club Sandwich",
    "price": 10.79
  },
  {
    "id": 17,
    "name": "Mango Avocado Salad",
    "price": 9.29
  },
  {
    "id": 18,
    "name": "Stuffed Chicken Breast",
    "price": 14.79
  },
  {
    "id": 19,
    "name": "Lobster Mac and Cheese",
    "price": 22.99
  },
  {
    "id": 20,
    "name": "Penne alla Vodka",
    "price": 15.49
  },
  {
    "id": 21,
    "name": "Cajun Blackened Salmon",
    "price": 17.89
  },
  {
    "id": 22,
    "name": "BLT Salad",
    "price": 8.99
  },
  {
    "id": 23,
    "name": "Vegetable Stir-Fry",
    "price": 11.49
  },
  {
    "id": 24,
    "name": "Crispy Chicken Tenders",
    "price": 9.99
  },
  {
    "id": 25,
    "name": "Mushroom Risotto",
    "price": 16.29
  },
  {
    "id": 26,
    "name": "Buffalo Chicken Wrap",
    "price": 10.99
  },
  {
    "id": 27,
    "name": "Grilled Mushroom Burger",
    "price": 13.49
  },
  {
    "id": 28,
    "name": "Shrimp and Grits",
    "price": 19.79
  },
  {
    "id": 29,
    "name": "Chicken Pesto Panini",
    "price": 11.99
  },
  {
    "id": 30,
    "name": "Margherita Flatbread",
    "price": 9.99
  }
]


const AvailableFood = () => {

  const foodList = DUMMY_FOOD.map((food) => (
    <FoodItem
      key = {food.id}
      id  = {food.id}
      name = {food.name}
      price = {food.price}
      description = {food.id}
    />

  ))
  
  return(
    <div>
      <div>{foodList}</div>
    </div>
  )

}

export default AvailableFood