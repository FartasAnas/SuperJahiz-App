import _ from "lodash";

function getCart() {
  return JSON.parse(window.localStorage.getItem("superJahiz.cart"));
}

function setCart(cart) {
  window.localStorage.setItem("superJahiz.cart", JSON.stringify(cart));
}

function getCartLine(id) {
  return _.find(getCart(), function (o) {
    return o.id === id;
  });
}

function setNewQuantity(id, quantity) {
  let cart = getCart();
  _.find(cart, function (o) {
    return o.id === id;
  }).quantity += quantity;
  setCart(cart);
}

export { getCart, setCart, getCartLine, setNewQuantity };
