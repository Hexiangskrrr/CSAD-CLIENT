import { Button, Card } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { CheckBox } from '@mui/icons-material';
import { Box } from '@mui/system';

const KitchenItem = (props) => {

  const SERVER_URL = 'http://localhost:5003'

  const [checkboxes, setCheckboxes] = useState(() => {
    const initialCheckboxes = {};
    props.checkboxData.forEach((_item, index) => {
        initialCheckboxes[`checkbox${index + 1}`] = false;
    });
    return initialCheckboxes;
  });

  const handleCheckboxChange = (position) => {
      const updatedCheckboxes = { ...checkboxes };
      const checkboxKey = `checkbox${position + 1}`;
      updatedCheckboxes[checkboxKey] = !updatedCheckboxes[checkboxKey];
      setCheckboxes(updatedCheckboxes);
  };
    

  const ordercomplete = () => {
      for (const key in checkboxes) {
        if (!checkboxes[key]) {
          return false;
        }
      }
      return true;
  };

  const handleRemoveItem = () => {
    axios.post(`${SERVER_URL}/orders/${props.id}/move`)
    props.onRemoveItem(props.id);
  };

  return (
    <Card sx={{
      display: "inline-block",
      width: "250px",
      height: "350px",
      margin: "10px",
      padding: "15px",
    }}>
      <div key={props.id}>
      <div>Order ID: {props.id}</div>
        <label key={props.id}>
          Order Time: {props.timestamp}  
          {props.checkboxData.map((item, index) => (
            <div key={index}>
              <input
                type='checkbox'
                checked={checkboxes[`checkbox${index + 1}`]}
                onChange={() => handleCheckboxChange(index)}
              />
              {item.label} , Quantity: {item.quantity}
            </div>
          ))}
        </label>
      </div>
      <Box display="flex" justifyContent="center" mt={1}>
    <Button variant="contained" sx={{align: "center"}} disabled={!ordercomplete()} onClick={handleRemoveItem}>Complete Order</Button>
    </Box>
  </Card>

  );
}

export default KitchenItem