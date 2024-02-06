import { useState, useEffect } from "react";
import FoodTable from "../../components/Food/FoodTable/FoodTable";
import AddFoodForm from "../../components/Food/FoodForm/AddFoodForm";
import EditFoodForm from "../../components/Food/FoodForm/EditFoodForm";
import { Container } from "@mui/material";

const Admin = () => {
  const [selectedFood, setSelectedFood] = useState(null);

  const pull_data = (data) => {
    setSelectedFood(data);
  };

  return (
    <Container component="main">
      <FoodTable func={pull_data} />

      <EditFoodForm foodData={selectedFood} />

      <AddFoodForm />
    </Container>
  );
};

export default Admin;
