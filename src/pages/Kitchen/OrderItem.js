import { Button } from '@mui/material';
import React, { useState } from 'react';

const KitchenItem = (props) => {

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
    props.onRemoveItem(props.id);
  }


  return (
    <div>
      <div key={props.id}>
      <div>Order No. {props.id}</div>
        <label key={props.id}>
          Order Time: {props.timestamp}  
          {props.checkboxData.map((item, index) => (
            <div key={index}>
              <input
                type="checkbox"
                checked={checkboxes[`checkbox${index + 1}`]}
                onChange={() => handleCheckboxChange(index)}
              />
              {item.label}
            </div>
          ))}
        </label>
      </div>
    <Button variant="contained" disabled={!ordercomplete()} onClick={handleRemoveItem}>Complete Order</Button>
  </div>

  );
}

export default KitchenItem