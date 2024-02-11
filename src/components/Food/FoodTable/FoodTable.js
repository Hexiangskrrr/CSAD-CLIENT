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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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
  }, [props.refreshFoodTable]);

  const onEdit = (food) => {
    props.func(food);
  };

  const onDelete = (food) => {
    const foodId = food.id;
    axios
      .delete(`${SERVER_URL}/delete`, { data: { foodId } })
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
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="right">Price($)</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {foodList.map((food) => (
              <TableRow key={food.id}>
                <TableCell align="center">{food.id}</TableCell>
                <TableCell align="center">{food.name}</TableCell>
                <TableCell align="center">{food.price}</TableCell>
                <TableCell align="center">{food.category}</TableCell>
                <TableCell align="center">{food.description}</TableCell>
                <TableCell>
                  <Button
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                    }}
                    startIcon={<EditIcon />}
                    onClick={() => onEdit(food)}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    startIcon={<DeleteIcon />}
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                    }}
                    onClick={() => onDelete(food)}
                  >
                    Delete
                  </Button>
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
