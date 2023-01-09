import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import AddCategory from "./AddCategory/AddCategory";
import AddProduct from "./AddProduct/AddProduct";
import "./Dashboard.css";
import MyProducts from "./MyProducts/MyProducts";

function Dashboard(props) {
  return (
    <div className='Dashboard'>
      <DashboardNav
        accentColor={props?.AccentColor}
        contrastColor={props?.ContrastColor}
      />

      <Routes>
        <Route
          path='/products'
          element={
            <MyProducts
              accentColor={props?.AccentColor}
              contrastColor={props?.ContrastColor}
              products={props?.Products}
              categories={props?.Categories}></MyProducts>
          }
        />
        <Route
          path='/addProduct'
          element={
            <AddProduct
              accentColor={props?.AccentColor}
              contrastColor={props?.ContrastColor}
              categories={props?.Categories}
              socket={props?.socket}></AddProduct>
          }
        />
        <Route
          path='/addCategory'
          element={
            <AddCategory
              accentColor={props?.AccentColor}
              contrastColor={props?.ContrastColor}
              socket={props?.socket}></AddCategory>
          }
        />
      </Routes>
    </div>
  );
}

export default Dashboard;
