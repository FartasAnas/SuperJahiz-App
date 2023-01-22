import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartProduct from "../../../components/CartProduct/CartProduct";
import SearchBar from "../../../components/SearchBar/SearchBar";
import "./MyProducts.css";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import http from "../../../app/http-common";
import io from "socket.io-client";
function MyProducts(props) {
  function saveItem(id) {}
  async function handleDelete(id) {
    try {
      await http.delete(`/product/delete/${id}`);
      props.setProducts(props.products.filter((product) => product.id !== id));
      window.location.reload();
    } catch (err) {
      console.log("Error");
    }
  }
  function renderCartProducts() {
    return props?.products?.map((item) => {
      return (
        <tr className="Cart-row" key={item.id}>
          <td>
            <Link to={"/product/?id=" + item.id}>
              <CartProduct prod={item} />
            </Link>
          </td>
          <td>
            <select Defaultvalue={item.category} className="MyProduct-select">
              {props.categories.map((category) => {
                return (
                  <option
                    value={category.id}
                    selected={
                      item?.category?.name?.toUpperCase() ===
                      category.name.toUpperCase()
                    }
                  >
                    {category.name}
                  </option>
                );
              })}
            </select>
          </td>
          <td>{item.price + "$"}</td>
          <td className="Cart-row-deleteButton" onClick={() => {}}>
            <button
              className="MyProduct-button"
              onClick={() => handleDelete(item.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className="MyProduct-button">
              <FontAwesomeIcon icon={faSave} />
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="MyProducts">
      <div className="MyProducts-header">
        <div className="MyProducts-header-right">
          <div className="MyProducts-header-title">Product List</div>
          <div className="MyProducts-header-product-count">
            {props?.products?.length}
          </div>
          <div className="MyProducts-header-search">
            <SearchBar />
          </div>
        </div>
        <div className="MyProducts-header-left">
          <div className="MyProducts-header-addProduct">
            <Link to="/dashboard/addProduct">
              <button
                style={{
                  color: props.contrastColor,
                  backgroundColor: props.accentColor,
                  cursor: "pointer",
                }}
              >
                Add Product
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="MyProducts-body">
        <table>
          <br />
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
          {renderCartProducts()}
        </table>
      </div>
    </div>
  );
}

export default MyProducts;
