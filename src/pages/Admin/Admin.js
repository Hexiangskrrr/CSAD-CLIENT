import { useState, useEffect } from 'react'
import axios from "axios"
import FoodTable from '../../components/Food/FoodTable/FoodTable'
import FoodForm from '../../components/Food/FoodForm/FoodForm'

const Admin = () => {

  return (
    <div>
      <FoodTable />
      <FoodForm />
    </div>
  )
}

export default Admin