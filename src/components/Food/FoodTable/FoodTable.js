import { useState, useEffect } from 'react'
import axios from "axios"

const FoodTable = (props) => {


  const [foodList, setFoodList] = useState([])

  const SERVER_URL = 'http://localhost:5003'

  useEffect(() => {
    axios.get(`${SERVER_URL}/menu`)
      .then(response => {
        setFoodList(response.data)
        console.log(foodList)
      })
      .catch(error => {
        console.error("Error fetching data:", error)
      });
  }, []);

  const onEdit = (food) => {
    props.func(food)
  }

  const onDelete = (food) => {
    axios.delete(`${SERVER_URL}/delete`, food)
      .then(response => {
        if (response.data.authenticated) {
          alert('Item deleted')
        } else {
          console.error("Something went wrong")
        }
      })
      .catch(error => {
        console.error("Error while deleting", error)
      })
  }


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Category</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
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
              <td><button onClick={() => onEdit(food)}>Edit</button></td>
              <td><button onClick={() => onDelete(food)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FoodTable