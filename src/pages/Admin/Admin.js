import { useState, useEffect } from 'react'
import FoodTable from '../../components/Food/FoodTable/FoodTable'
import AddFoodForm from '../../components/Food/FoodForm/AddFoodForm'
import EditFoodForm from '../../components/Food/FoodForm/EditFoodForm'

const Admin = () => {

  const [selectedFood, setSelectedFood] = useState(null)

  const pull_data = (data) => {
    setSelectedFood(data)
  }

  return (
    <div>
      <FoodTable 
        func={pull_data}
      />

      <EditFoodForm 
        foodData={selectedFood}
      />

      <AddFoodForm />
    </div>
  )
}

export default Admin