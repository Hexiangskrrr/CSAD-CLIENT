import React, { useState, useEffect } from "react";
import KitchenItem from "./OrderItem";
import axios from "axios";

function KitchenConsole() {
  const [orderList, setOrderList] = useState([]);

  const SERVER_URL = "http://localhost:5003";

  useEffect(() => {
    const fetchRealTimeData = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/realtime/orders`);
        setOrderList(response.data);
      } catch (error) {
        console.error("Error fetching real-time data:", error);
      }
    };
    fetchRealTimeData();

    const interval = setInterval(fetchRealTimeData, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleRemoveItem = (orderId) => {
    console.log("Successfully Completed Order: ", orderId);
    axios
      .post(`${SERVER_URL}/orders/${orderId}/move`)
      .then((response) => {
        const updatedOrderList = orderList.filter(
          (order) => order.id !== orderId
        );
        setOrderList(updatedOrderList);
      })
      .catch((error) => {
        console.error("Error moving order:", error);
      });
  };

  const kitchenItems = orderList.map((order) => {
    const { seconds, nanoseconds } = order.timestamp;
    const milliseconds = seconds * 1000 + nanoseconds / 1000000;
    const timestampDate = new Date(milliseconds).toLocaleString();
    return (
      <KitchenItem
        key={order.id}
        id={order.id}
        timestamp={timestampDate}
        checkboxData={order.items.map((item) => ({
          label: item.name,
          quantity: item.quantity,
        }))} //Pass ordered items to OrderItem.js
        onRemoveItem={handleRemoveItem}
      />
    );
  });

  return (
    <div>
      <h1>Kitchen Console</h1>
      {kitchenItems}
    </div>
  );
}

export default KitchenConsole;
