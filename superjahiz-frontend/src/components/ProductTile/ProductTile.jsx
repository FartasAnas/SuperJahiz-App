import React from "react";
import "./ProductTile.css";
import { Link } from "react-router-dom";
function ProductTile(props) {
  function getImageFromBuffer(buffer) {
    const blob = new Blob([buffer]);
    const url = URL.createObjectURL(blob);
    return url;
  }
  console.log(props.data);
  return (
    <div className='ProductTile'>
      <Link to={"/product/?id=" + props.data.id}>
        <div className='ProductTile-PictureContainer'>
          <div
            className='ProductTile-picture'
            style={{
              backgroundImage: `url(${getImageFromBuffer(
                props.data.pictures[0]
              )})`,
            }}></div>
        </div>

        <div className='ProductTile-name'>
          <span className='ProductTile-name-name'>{props.data.name}</span>
          <span
            className='ProductTile-category'
            style={{
              backgroundColor: `${props.accentColor}`,
              color: `${props.contrastColor}`,
            }}>
            {props.data.category.name}
          </span>
        </div>

        <div className='ProductTile-price'>{props.data.price + " $"}</div>
      </Link>
    </div>
  );
}

export default ProductTile;
