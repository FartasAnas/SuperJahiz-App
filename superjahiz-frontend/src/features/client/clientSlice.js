import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../app/http-common";

export const addOrderLine = createAsyncThunk("client/orderLine", async () => {
  // get the data from localStorage
  const data = JSON.parse(localStorage.getItem("superJahiz.cart"));
  // get the userId from localStorage
  const userId = JSON.parse(localStorage.getItem("user")).userId;
  // format the data as required by the backend
  const payload = {
    userId: {
      id: userId,
    },
    orderLines: data.map((line) => ({
      product: {
        id: line.id,
      },
      quantity: line.quantity,
    })),
  };

  // send the request
  const response = await http.post("/userOrder/add", payload);
  console.log(payload)
  return response.data;
});