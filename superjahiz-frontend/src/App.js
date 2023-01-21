import "./App.css";
import StoreFront from "./layouts/StoreFront/StoreFront";
import { useEffect, useState } from "react";
import data from "./assets/testData/testData";
import _ from "lodash";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCategories from "./layouts/AllCategories/AllCategories";
import Products from "./layouts/Products/Products";
import ProductDetails from "./layouts/ProductDetails/ProductDetails";
import { ToastContainer } from "react-toastify";
import Cart from "./layouts/Cart/Cart";
import Dashboard from "./layouts/Dashboard/Dashboard";
import io from "socket.io-client";
import LoginForm from "./components/LoginForm/LoginForm";
import RequireAuth from "./features/RequireAuth";
import Forbidden from "./components/Forbidden/Forbidden";
const socket = io.connect("http://localhost:3001");
function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [accentColor, setAccentColor] = useState([]);
  const [contrastColor, setContrastColor] = useState([]);
  useEffect(() => {
    socket.emit("get-products", {});
    socket.on("receive-products", (data) => {
      setProducts(data);
    });
    socket.emit("get-categories", {});
    socket.on("receive-categories", (data) => {
      setCategories(data);
    });
    socket.emit("get-storeConfig", {});
    socket.on("receive-storeConfig", (data) => {
      setAccentColor(data[0].accentColor);
      setContrastColor(data[0].contrastColor);
    });
  }, [socket]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <StoreFront
              Products={products}
              Categories={categories}
              AccentColor={accentColor}
              ContrastColor={contrastColor}
            ></StoreFront>
          }
        />
        <Route
          path="/home"
          element={
            <StoreFront
              Products={products}
              Categories={categories}
              AccentColor={accentColor}
              ContrastColor={contrastColor}
            ></StoreFront>
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forbidden" element={<Forbidden></Forbidden>}/>
        <Route
          path="/categories"
          element={<AllCategories Categories={categories} />}
        />
        <Route
          path="/products"
          element={
            <Products
              Products={products}
              Categories={categories}
              AccentColor={accentColor}
              ContrastColor={contrastColor}
            />
          }
        />
        <Route
          path="/product"
          element={
            <ProductDetails
              Products={products}
              Categories={categories}
              AccentColor={accentColor}
              ContrastColor={contrastColor}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              Products={products}
              Categories={categories}
              AccentColor={accentColor}
              ContrastColor={contrastColor}
            />
          }
        />
        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route
            path="/dashboard/*"
            element={
              <Dashboard
                Products={products}
                Categories={categories}
                AccentColor={accentColor}
                ContrastColor={contrastColor}
                socket={socket}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

let woman = new Object();
