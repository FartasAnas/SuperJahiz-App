import React from "react";
import "./CartProduct.css";

function CartProduct(props) {
  function getBlobFromBuffer(buffer) {
    const blob = new Blob([buffer]);
    const url = URL.createObjectURL(blob);
    return url;
  }
  return (
    <div className='CartProduct'>
      <div
        className='CartProduct-pic'
        style={{
          backgroundImage: `url(${getBlobFromBuffer(
            props?.prod?.pictures[0]
          )})`,
        }}></div>
      <div>
        <div className='CartProduct-name'>{props?.prod?.name}</div>
        <div className='CartProduct-id'>{"id: " + props?.prod?.id}</div>
      </div>
    </div>
  );
}

export default CartProduct;
