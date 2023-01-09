import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./ProductDetails.css";
import _ from "lodash";
import ExctractParameter from "./../../helpers/LinkParameterExtract";
import QuantityInput from "../../components/QuantityInput/QuantityInput";
import "react-toastify/dist/ReactToastify.css";
import { Toaster, toast } from "react-hot-toast";
import {
  getCart,
  setCart,
  getCartLine,
  setNewQuantity,
} from "../../helpers/cartHelper";
function ProductDetails(props) {
  console.log(props?.Products);
  const [count, setCount] = useState(1);
  //in props.Products find the product with the id of the url
  const prod = _.find(props?.Products, { id: 1 });
  //   let prod = _.find(props?.Products, {
  //     id: ExctractParameter("id"),
  //   });
  console.log(prod);
  function getImageFromBuffer(buffer) {
    const blob = new Blob([buffer]);
    const url = URL.createObjectURL(blob);
    return url;
  }
  const notify = () => toast("Products added to cart");
  function renderSpecs() {
    let newProd = _.values(prod?.specs);
    return newProd.map((spec) => (
      <div className='ProductDetails-right-specs'>
        <div className='ProductDetails-right-specs-key'>
          {spec.name.toUpperCase()}
        </div>
        <div className='ProductDetails-right-specs-value'>{spec.content}</div>
      </div>
    ));
  }

  function handleAddToCart() {
    getCartLine(prod.id)
      ? setNewQuantity(prod.id, count)
      : setCart([...getCart(), { id: prod.id, quantity: count }]);
    notify();
  }

  return (
    <div>
      <NavBar />
      <div className='ProductDetails'>
        <div className='ProductDetails-left'>
          <div
            className='ProductDetails-left-image'
            style={{
              backgroundImage: `url(${getImageFromBuffer(prod?.pictures[0])})`,
            }}
          />
        </div>
        <div className='ProductDetails-right'>
          <div
            className='ProductDetails-right-category'
            style={{
              backgroundColor: `${props?.AccentColor}`,
              color: `${props?.ContrastColor}`,
            }}>
            {prod?.category.name}
          </div>
          <div className='ProductDetails-right-name'>{prod?.name}</div>
          <div className='ProductDetails-right-id'>{"id: " + prod?.id}</div>
          <div className='ProductDetails-right-desc'>{prod?.description}</div>
          <div className='ProductDetails-right-quantityLabel'>QUANTITY</div>
          <div className='ProductDetails-right-priceContainer'>
            <QuantityInput
              count={count}
              setCount={setCount}
              initial={1}></QuantityInput>
            <div className='ProductDetails-right-price'>
              {Math.round(prod?.price * count * 100) / 100 + " $"}
            </div>
          </div>
          <button
            className='ProductDetails-right-addToCart'
            style={{
              backgroundColor: `${props?.AccentColor}`,
              color: `${props?.ContrastColor}`,
            }}
            onClick={handleAddToCart}>
            Add to cart
          </button>
          <div className='ProductDetails-right-SpecificationsLabel'>
            Specifications
          </div>
          {renderSpecs()}
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default ProductDetails;
