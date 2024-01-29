import { useState, useEffect } from 'react'
import axios from "axios"
import FoodTable from '../../components/Food/FoodTable/FoodTable'

const Admin = () => {

  return (
    <div>
      <FoodTable />
    </div>
  )
}

export default Admin