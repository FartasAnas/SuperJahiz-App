import React from "react";
import { Link } from "react-router-dom";
import CartProduct from "../../../components/CartProduct/CartProduct";
import SearchBar from "../../../components/SearchBar/SearchBar";
import "./MyProducts.css";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
function MyProducts(props) {

  function saveItem(id){

  }

  function renderCartProducts() {
    return props?.products?.map((item) => {
      return (
        <tr className='Cart-row' key={item.id}>
          <td>
            <Link to={"/product/?id=" + item.id}>
              <CartProduct prod={item} />
            </Link>
          </td>
          <td>
            <select Defaultvalue={item.category} className='MyProduct-select'>
              {props.categories.map((category) => {
                return (
                  <option
                    value={category.id}
                    selected={
                      item.category.toUpperCase() ===
                      category.name.toUpperCase()
                    }>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </td>
          <td>{item.price + "$"}</td>
          <td className='Cart-row-deleteButton' onClick={() => {}}>
            <button className='MyProduct-button'>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className='MyProduct-button'>
              <FontAwesomeIcon icon={faSave} />
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className='MyProducts'>
      <div className='MyProducts-header'>
        <div className='MyProducts-header-right'>
          <div className='MyProducts-header-title'>Product List</div>
          <div className='MyProducts-header-product-count'>
            {props?.products?.length}
          </div>
          <div className='MyProducts-header-search'>
            <SearchBar />
          </div>
        </div>
        <div className='MyProducts-header-left'>
          <div className='MyProducts-header-addProduct'>
            <button
              style={{
                color: props.contrastColor,
                backgroundColor: props.accentColor,
              }}>
              Add Product
            </button>
          </div>
        </div>
      </div>
      <div className='MyProducts-body'>
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
