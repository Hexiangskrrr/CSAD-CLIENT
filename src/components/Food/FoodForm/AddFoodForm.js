import { useState } from 'react'
import axios from "axios"

const AddFoodForm = () => {
  const [foodDetails, setFoodDetails] = useState({
    name: '',
    price: '',  
    category: 'Drinks',
    description: ''
  });

  const SERVER_URL = 'http://localhost:5003'

  const handleSubmit = (e) => {
    e.preventDefault()

    //parse price as a float
    const parsedPrice = parseFloat(foodDetails.price)

    if (!isNaN(parsedPrice)) {
      axios.post(`${SERVER_URL}/add`, { ...foodDetails, price: parsedPrice })
        .then(response => {
          if (response.data.authenticated) {
            alert("Added Successfully")
          } else {
            alert("Something went wrong")
          }
        })
        .catch(error => {
          console.error("Error while adding", error)
        })
    } else {
      alert("Please enter a valid price.")
    }
  };

  return (
    <div>
      <h1>Add</h1>
      <form onSubmit={handleSubmit}>
        <br/> 
        Name: <input type="text" onChange={(e) => setFoodDetails({ ...foodDetails, name: e.target.value })}></input>
        <br/>
        Price($): <input type="text" onChange={(e) => setFoodDetails({ ...foodDetails, price: e.target.value })}></input> 
        <br/>
        Category: 
        <select name="category" onChange={(e) => setFoodDetails({ ...foodDetails, category: e.target.value })}>
          <option value="Drinks">Drinks</option>
          <option value="Dessert">Dessert</option>
          <option value="Seasonal">Seasonal</option>
          <option value="Set Meal">Set Meal</option>
        </select>
        <br/>
        Description: <textarea onChange={(e) => setFoodDetails({ ...foodDetails, description: e.target.value })}></textarea>
        <br/>
        <input type="submit" value={'Add'}></input>
      </form>
    </div>
  );
};

export default AddFoodForm
