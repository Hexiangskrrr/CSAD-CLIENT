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
} from "@mui/material";

const EditFoodForm = (props) => {
  const [foodDetails, setFoodDetails] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    // Set state based on selected edit
    if (props.foodData) {
      setFoodDetails({
        id: props.foodData.id || "",
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
    axios
      .post(`${SERVER_URL}/editfood`, foodDetails)
      .then((response) => {
        if (response.status === 200) {
          alert("Edited Successfully");
          setFoodDetails({
            //clear form
            id: "",
            name: "",
            price: "",
            category: "",
            description: "",
          });
        } else {
          alert("Something went wrong");
        }
      })
      .catch((error) => {
        console.error("Error while editing", error);
      });
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" sx={{ mt: "4px" }}>
        Edit
      </Typography>
      <Box onSubmit={handleSubmit} component="form">
        <Grid container spacing={2} alignItems="left">
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="Id"
              label="Id"
              size="small"
              value={foodDetails.id}
              onChange={(e) =>
                setFoodDetails({ ...foodDetails, id: e.target.value })
              }
            />
          </Grid>
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
                <MenuItem value="Seasonal">Seasonal</MenuItem>
                <MenuItem value="Sushi">Sushi</MenuItem>
                <MenuItem value="Drinks">Drinks</MenuItem>
                <MenuItem value="Dessert">Dessert</MenuItem>
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
