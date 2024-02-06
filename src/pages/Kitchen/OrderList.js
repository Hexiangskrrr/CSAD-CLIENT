import React, {useState} from 'react';
import KitchenItem from './OrderItem';

function Kitchen() {

    const [kitchenData, setKitchenData] = useState([
        { id: 1, timestamp: "2:00", checkboxes: [{ label: "Food 1" }, { label: "Food 2" }] },
        { id: 2, timestamp: "3:00", checkboxes: [{ label: "Food 3" }, { label: "Food 4" }, { label: "Food 5" }] },
        // Get from firebase - orders
        // Rn the orders table only got timestamp and items, need make
    ]);

    const handleRemoveItem = (orderId) => {
        console.log("Removing order with id:", orderId);
        const updatedKitchenData = kitchenData.filter(kitchen => kitchen.id !== orderId);
        console.log("Updated kitchen data:", updatedKitchenData);
        setKitchenData(updatedKitchenData);
      };

    return (    
        <div>
            {kitchenData.map((kitchen) => (
                <KitchenItem 
                key={kitchen.id} 
                id={kitchen.id} 
                timestamp={kitchen.timestamp} 
                checkboxData={kitchen.checkboxes} 
                //checkboxData={kitchen.items.map(item => ({ label: item.name }))}  //Pass ordered items to OrderItem.js
                onRemoveItem={handleRemoveItem} />
            ))}
        </div>
    );
}

export default Kitchen