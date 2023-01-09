import React from "react";
import "./CategoryTile.css";
import { Link } from "react-router-dom";
function CategoryTile(props) {
  console.log("category :");
  console.log(getImageFromBuffer(props.data.picture));
  function getImageFromBuffer(buffer) {
    const blob = new Blob([buffer]);
    const url = URL.createObjectURL(blob);
    return url;
  }
  return (
    <Link
      to={"/products/?category=" + props.data.name}
      className='CategoryTile-wrapper'>
      <div
        className='CategoryTile'
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${getImageFromBuffer(
            props.data.picture
          )})`,
        }}>
        <span className='CategoryTile-content'>{props.data.name}</span>
      </div>
    </Link>
  );
}

export default CategoryTile;
