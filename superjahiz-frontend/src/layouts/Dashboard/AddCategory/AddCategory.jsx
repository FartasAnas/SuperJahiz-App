import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link,useNavigate } from "react-router-dom";
import "./AddCategory.css";
function AddCategory(props) {
  const navigate = useNavigate();
  //copy the code from AddProduct.jsx and change it to suite categories
  const [file, setFile] = React.useState(null);
  function handleChange(e) {
    
    console.log(e);
    console.log("m alive");
    var inpt = document.querySelector("#formId");
    setFile(URL.createObjectURL(inpt.files[0]));
  }

  function postProduct() {
    var category;
    var name = document.querySelector("#name").value;
    var image = document.querySelector("#formId").files[0];

    console.log(name, image);

    category = {
      name: name,
      pictureUrl: image,
    };
    props.socket.emit("add-category", category);
    navigate("/dashboard/products");
    console.log(category);
  }
  return (
    <div className="AddProduct">
      <div className="MyProducts-header">
        <div className="MyProducts-header-right">
          <div className="MyProducts-header-title">Add Category</div>
          <div className="MyProducts-header-search"></div>
        </div>
        <div className="MyProducts-header-left">
          <div className="MyProducts-header-addProduct">
            <Link to="/dashboard/products">
              <button
                style={{
                  color: props.contrastColor,
                  backgroundColor: props.accentColor,
                  cursor: "pointer",
                }}
              >
                Product List
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="AppProduct-form">
        <div className="AppProduct-form-left">
          <label>Category Name</label>
          <br />
          <input type="text" name="name" placeholder="Eg: shoes" id="name" />
          <br />
          <label>Picture</label>
          <label
            htmlFor="formId"
            className="UploadButton"
            onChange={handleChange}
            style={{
              backgroundColor: props.accentColor,
              color: props.contrastColor,
            }}
          >
            <input name="" type="file" id="formId" hidden />
            <FontAwesomeIcon
              icon={faArrowUp}
              style={{ paddingRight: "20px" }}
            />{" "}
            Upload Category Picture
            <img className="picturePreview" src={file}/>
          </label>
          <br />
          <button
            onClick={postProduct}
            style={{
              backgroundColor: props.accentColor,
              color: props.contrastColor,
              cursor: "pointer",
            }}
          >
            Add this Category
          </button>
        </div>
        <div className="AppProduct-form-right">
          <br />
          <div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
