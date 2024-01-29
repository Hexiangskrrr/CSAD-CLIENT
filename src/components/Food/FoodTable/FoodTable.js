import { useState, useEffect } from 'react'
import axios from "axios"

const FoodTable = () => {

  const [foodList, setFoodList] = useState([])

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

  const edit = (food) => {
    console.log(food)
  }


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {foodList.map(food => (
            <tr key={food.id}>
              <td>{food.id}</td>
              <td>{food.name}</td>
              <td>{food.price}</td>
              <td>{food.category}</td>
              <td>{food.description}</td>
              <td><button onClick={() => edit(food)}>edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FoodTable