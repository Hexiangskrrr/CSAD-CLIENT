import { useState } from "react";
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
  Box,
  Grid,
} from "@mui/material";

const AddFoodForm = () => {
  const [foodDetails, setFoodDetails] = useState({
    name: "",
    price: "",
    category: "Drinks",
    description: "",
  });

  const SERVER_URL = "http://localhost:5003";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${SERVER_URL}/addfood`, foodDetails)
      .then((response) => {
        if (response.status === 200) {
          alert("Added Successfully");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((error) => {
        console.error("Error while adding", error);
      });
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" sx={{ mt: "4px" }}>
        Add
      </Typography>
      <Box onSubmit={handleSubmit} component="form">
        <Grid container spacing={2} alignItems="left">
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="Name"
              label="Name"
              size="small"
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
              onChange={(e) =>
                setFoodDetails({ ...foodDetails, description: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit" variant="contained">
              Add
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AddFoodForm;
