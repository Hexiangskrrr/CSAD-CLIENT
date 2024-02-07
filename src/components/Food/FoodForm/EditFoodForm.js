import { useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Container,
  Button,
  Grid,
  Box,
  Card,
  Paper,
} from "@mui/material";

const EditFoodForm = (props) => {
  const [foodDetails, setFoodDetails] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    // Set state based on selected edit
    if (props.foodData) {
      setFoodDetails({
        name: props.foodData.name || "",
        price: props.foodData.price || "",
        category: props.foodData.category || "",
        description: props.foodData.description || "",
      });
    }
  }, [props.foodData]);

  const SERVER_URL = "http://localhost:5003";

  const handleSubmit = (e) => {
    e.preventDefault();

    //parse price as a float
    const parsedPrice = parseFloat(foodDetails.price);

    if (!isNaN(parsedPrice)) {
      axios
        .put(`${SERVER_URL}/edit`, { ...foodDetails, price: parsedPrice })
        .then((response) => {
          if (response.status === 200) {
            alert("Edited Successfully");
          } else {
            alert("Something went wrong");
          }
        })
        .catch((error) => {
          console.error("Error while editing", error);
        });
    } else {
      alert("Please enter a valid price.");
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" sx={{ mt: "4px" }}>
        Edit
      </Typography>
      <Box onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="left">
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="Name"
              label="Name"
              size="small"
              value={foodDetails.name}
              onChange={(e) =>
                setFoodDetails({ ...foodDetails, name: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="Price"
              label="Price($)"
              size="small"
              value={foodDetails.price}
              onChange={(e) =>
                setFoodDetails({ ...foodDetails, price: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth size="small">
              <InputLabel id="Category">Category:</InputLabel>
              <Select
                margin="dense"
                label="Category:"
                value={foodDetails.category}
                onChange={(e) =>
                  setFoodDetails({ ...foodDetails, category: e.target.value })
                }
              >
                <MenuItem value="Drinks">Drinks</MenuItem>
                <MenuItem value="Dessert">Dessert</MenuItem>
                <MenuItem value="Seasonal">Seasonal</MenuItem>
                <MenuItem value="Set Meal">Set Meal</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              label="Description"
              size="small"
              value={foodDetails.description}
              onChange={(e) =>
                setFoodDetails({ ...foodDetails, description: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit" variant="contained">
              Edit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default EditFoodForm;
