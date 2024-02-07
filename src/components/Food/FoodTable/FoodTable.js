import { useState, useEffect } from "react";
import axios from "axios";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Table,
  TableContainer,
  Paper,
  Container,
} from "@mui/material";

const FoodTable = (props) => {
  const [foodList, setFoodList] = useState([]);

  const SERVER_URL = "http://localhost:5003";

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/menu`)
      .then((response) => {
        setFoodList(response.data);
        console.log(foodList);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const onEdit = (food) => {
    props.func(food);
  };

  const onDelete = (food) => {
    const foodName = food.name;
    axios
      .delete(`${SERVER_URL}/delete`, { data: { foodName } })
      .then((response) => {
        if (response.status === 200) {
          alert("Item deleted");
        } else {
          console.error("Something went wrong");
        }
      })
      .catch((error) => {
        console.error("Error while deleting", error);
      });
  };

  return (
    <Container margin="5px">
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price ($)</TableCell>
              <TableCell>Category</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {foodList.map((food) => (
              <TableRow key={food.id}>
                <TableCell align="right">{food.id}</TableCell>
                <TableCell align="right">{food.name}</TableCell>
                <TableCell align="right">{food.price}</TableCell>
                <TableCell align="right">{food.category}</TableCell>
                <TableCell align="center">{food.description}</TableCell>
                <TableCell>
                  <Button onClick={() => onEdit(food)}>Edit</Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => onDelete(food)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default FoodTable;
