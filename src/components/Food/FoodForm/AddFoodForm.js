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
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const AddFoodForm = () => {
  const [foodDetails, setFoodDetails] = useState({
    name: "",
    price: "",
    category: "Drinks",
    description: "",
    image: null,
  });

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (e) => {
    const img = e.target.files[0];
    if (img) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(img);
      setFoodDetails({
        ...foodDetails,
        image: {
          preview: URL.createObjectURL(img),
          data: img,
        },
      });
    }
  };

  const SERVER_URL = "http://localhost:5003";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", foodDetails.name);
      formData.append("price", foodDetails.price);
      formData.append("category", foodDetails.category);
      formData.append("description", foodDetails.description);
      formData.append("image", foodDetails.image.data);

      console.log(foodDetails.image);

      axios
        .post(`${SERVER_URL}/addfood`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            alert("Added Successfully");
            setFoodDetails({
              name: "",
              price: "",
              category: "Drinks",
              description: "",
              image: null,
            });
          } else {
            alert("Something went wrong");
          }
        })
        .catch((error) => {
          console.error("Error while adding", error);
        });
    } catch (error) {
      console.error("Error while adding", error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" sx={{ mt: "4px" }}>
        Add Item
      </Typography>
      <Box onSubmit={handleSubmit} component="form">
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
                <MenuItem value="Promotion">Promotion</MenuItem>
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
            <Button
              variant="contained"
              fullWidth
              component="label"
              type="file"
              id="img"
              name="img"
              onChange={handleFileChange}
            >
              Select Image
              <VisuallyHiddenInput type="file" />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit" variant="contained">
              Add Item
            </Button>
          </Grid>
          {previewImage && (
            <Grid item xs={12}>
              <Typography variant="subtitle1">Preview:</Typography>
              <img
                src={previewImage}
                alt="Preview"
                style={{ width: "100%", aspectRatio: "1/1" }}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default AddFoodForm;
