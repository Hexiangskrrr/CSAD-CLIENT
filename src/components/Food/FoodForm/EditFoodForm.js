import { useState, useEffect } from 'react'
import axios from "axios"

const EditFoodForm = (props) => {
  const [foodDetails, setFoodDetails] = useState({
    name: '',
    price: '', 
    category: '',
    description: ''
  });

  useEffect(() => {
    // Set state based on selected edit
    if (props.foodData) {
      setFoodDetails({
        name: props.foodData.name || '',
        price: props.foodData.price || '',
        category: props.foodData.category || '',
        description: props.foodData.description || ''
      });
    }
  }, [props.foodData]);

  const SERVER_URL = 'http://localhost:5003'

  const handleSubmit = (e) => {
    e.preventDefault()

    //parse price as a float
    const parsedPrice = parseFloat(foodDetails.price)

    if (!isNaN(parsedPrice)) {
      axios.put(`${SERVER_URL}/edit`, { ...foodDetails, price: parsedPrice })
        .then(response => {
          if (response.data.authenticated) {
            alert("Edited Successfully")
          } else {
            alert("Something went wrong")
          }
        })
        .catch(error => {
          console.error("Error while editing", error)
        });
    } else {
      alert("Please enter a valid price.")
    }
  };

  return (
    <div>
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <br/> 
        Name: <input type="text" value={foodDetails.name} onChange={(e) => setFoodDetails({ ...foodDetails, name: e.target.value })}></input>
        <br/>
        Price($): <input type="text" value={foodDetails.price} onChange={(e) => setFoodDetails({ ...foodDetails, price: e.target.value })}></input> 
        <br/>
        Category: 
        <select name="category" value={foodDetails.category} onChange={(e) => setFoodDetails({ ...foodDetails, category: e.target.value })}>
          <option value="Drinks">Drinks</option>
          <option value="Dessert">Dessert</option>
          <option value="Seasonal">Seasonal</option>
          <option value="Set Meal">Set Meal</option>
        </select>
        <br/>
        Description: <textarea value={foodDetails.description} onChange={(e) => setFoodDetails({ ...foodDetails, description: e.target.value })}></textarea>
        <br/>
        <input type="submit" value={'Edit'}></input>
      </form>
    </div>
  );
};

export default EditFoodForm;
