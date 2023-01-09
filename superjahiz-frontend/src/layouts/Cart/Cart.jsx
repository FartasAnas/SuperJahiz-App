import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import _ from "lodash";
import "./Cart.css";
import CartProduct from "../../components/CartProduct/CartProduct";
import QuantityInput from "../../components/QuantityInput/QuantityInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { getCart } from "../../helpers/cartHelper";
import { useNavigate, Link } from "react-router-dom";

function Cart(props) {
  const [cart, setcart] = useState();
  const navigate = useNavigate();
  if (
    window.localStorage.getItem("superJahiz.cart") === null ||
    window.localStorage.getItem("superJahiz.cart") === "null"
  )
    window.localStorage.setItem("superJahiz.cart", JSON.stringify([]));
  let prods = JSON.parse(window.localStorage.getItem("superJahiz.cart")).map(
    (item) => {
      return {
        ..._.find(props.state?.products, { id: item.id }),
        quantity: item.quantity,
      };
    }
  );

  function handleDeleteFromCart(id) {
    console.log(id);
    let newCart = _.filter(
      JSON.parse(window.localStorage.getItem("superJahiz.cart")),
      (item) => {
        return item.id !== id;
      }
    );
    window.localStorage.setItem("superJahiz.cart", JSON.stringify(newCart));
    setcart(getCart());
    navigate("/cart");
  }
  function getTotalPrice() {
    prods = JSON.parse(window.localStorage.getItem("superJahiz.cart")).map(
      (item) => {
        return {
          prod: _.find(props?.Products, { id: item.id }),
          quantity: item.quantity,
        };
      }
    );
    prods = prods
      ?.map((item) => item?.prod?.price * item?.quantity)
      .reduce((prev, curr) => prev + curr, 0);
    return prods;
  }
  function handleCountchange(count, id) {
    let newCart = JSON.parse(window.localStorage.getItem("superJahiz.cart"));
    if (
      _.find(newCart, function (o) {
        return o.id === id;
      })
    ) {
      let obj = _.find(newCart, function (o) {
        return o.id === id;
      });
      obj.quantity = count;
      window.localStorage.setItem("superJahiz.cart", JSON.stringify(newCart));
    }
    setcart(getCart());
    console.log(JSON.parse(window.localStorage.getItem("superJahiz.cart")));
  }
  function renderCartProducts() {
    return JSON.parse(window.localStorage.getItem("superJahiz.cart")).map(
      (item) => {
        return (
          <tr className='Cart-row' key={item.id}>
            <td>
              <Link to={"/product/?id=" + item.id}>
                <CartProduct prod={_.find(props?.Products, { id: item.id })} />
              </Link>
            </td>
            <td>{_.find(props?.Products, { id: item.id })?.price + "$"}</td>
            <td>
              <QuantityInput
                initial={item.quantity}
                setCount={handleCountchange}
                id={item.id}></QuantityInput>
            </td>
            <td>
              {Math.round(
                _.find(props?.Products, { id: item.id })?.price *
                  item.quantity *
                  100
              ) /
                100 +
                "$"}
            </td>
            <td
              className='Cart-row-deleteButton'
              onClick={() => handleDeleteFromCart(item.id)}>
              <FontAwesomeIcon icon={faTrash} />{" "}
            </td>
          </tr>
        );
      }
    );
  }
  return (
    <div className='app-page'>
      <NavBar />
      <div className='Cart'>
        <SectionTitle text='Cart'></SectionTitle>
        <div className='Cart-body'>
          <table>
            <br />
            <tr>
              <th>product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            {renderCartProducts()}
          </table>
          <div className='Cart-body-details'>
            <div className='Cart-body-details-summary'>
              <div className='Cart-body-details-title'>Order Summary</div>
              <div className='Cart-body-details-info'>
                <span className='Cart-body-details-info-title'>
                  Item(s) Total
                </span>
                <span className='Cart-body-details-info-value'>
                  {Math.round(getTotalPrice() * 100) / 100 + " $"}
                </span>
              </div>
              <div className='Cart-body-details-info'>
                <span className='Cart-body-details-info-title'>
                  Shipping Fee
                </span>
                <span className='Cart-body-details-info-value'>15 $</span>
              </div>
            </div>

            <div className='Cart-body-details-total'>
              <div className='Cart-body-details-info'>
                <span className='Cart-body-details-info-title'>
                  Total Price
                </span>

                <span className='Cart-body-details-info-value'>
                  {Math.round((getTotalPrice() + 15) * 100) / 100 + " $"}
                </span>
              </div>
              <div className='Cart-body-details-info-CheckoutContainer'>
                <button
                  className='Cart-body-details-info-checkout'
                  style={{
                    backgroundColor: `${props?.AccentColor}`,
                    color: `${props?.ContrastColor}`,
                  }}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Cart;
