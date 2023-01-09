import React from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import "./AddProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");
function AddProduct(props) {
  const [file, setFile] = React.useState(null);
  function handleChange(e) {
    console.log(e);
    console.log("m alive");
    var inpt = document.querySelector("#formId");
    setFile(URL.createObjectURL(inpt.files[0]));
  }

  function postProduct() {
    var product;
    var name = document.querySelector("#name").value;
    var price = document.querySelector("#price").value;
    var category = document.querySelector("#category").value;
    var description = document.querySelector("#description").value;
    var image = document.querySelector("#formId").files[0];

    var inStock = document.querySelector("#inStock").value;
    var specName1 = document.querySelector("#specName1").value;
    var specValue1 = document.querySelector("#specValue1").value;
    var specName2 = document.querySelector("#specName2").value;
    var specValue2 = document.querySelector("#specValue2").value;
    var specName3 = document.querySelector("#specName3").value;
    var specValue3 = document.querySelector("#specValue3").value;
    var specName4 = document.querySelector("#specName4").value;
    var specValue4 = document.querySelector("#specValue4").value;
    console.log(
      name,
      price,
      category,
      description,
      image,
      specName1,
      specValue1,
      specName2,
      specValue2,
      specName3,
      specValue3,
      specName4,
      specValue4
    );

    product = {
      name: name,
      price: price,
      category: { id: category },
      description: description,
      pictures: [{ url: image }],
      specs: [
        { name: specName1, content: specValue1 },
        { name: specName2, content: specValue2 },
        { name: specName3, content: specValue3 },
        { name: specName4, content: specValue4 },
      ],
      inStock: inStock,
    };
    props.socket.emit("add-product", product);

    console.log(product);
  }
  return (
    <div className='AddProduct'>
      <div className='MyProducts-header'>
        <div className='MyProducts-header-right'>
          <div className='MyProducts-header-title'>Add Product</div>
          <div className='MyProducts-header-search'></div>
        </div>
        <div className='MyProducts-header-left'>
          <div className='MyProducts-header-addProduct'>
            <button
              style={{
                color: props.contrastColor,
                backgroundColor: props.accentColor,
              }}>
              Product List
            </button>
          </div>
        </div>
      </div>
      <div className='AppProduct-form'>
        <div className='AppProduct-form-left'>
          <label>Product Name</label>
          <br />
          <input
            type='text'
            name='name'
            placeholder='Eg: Leather shoes'
            id='name'
          />
          <br />
          <label>Description</label>
          <br />
          <input
            type='text'
            placeholder='Eg: Best quality leather...'
            id='description'
          />
          <br />
          <label>Category</label>
          <br />
          <select className='MyProduct-select' id='category'>
            {props?.categories?.map((category) => {
              return <option value={category?.id}>{category?.name}</option>;
            })}
          </select>
          <label>Price</label>
          <br />
          <input
            type='number'
            step='0.01'
            name='price'
            placeholder='Eg: 25.21'
            id='price'
          />
          <br />
          <label>In stock</label>
          <br />
          <input type='number' placeholder={0} id='inStock' />

          <br />
          <button
            onClick={postProduct}
            style={{
              backgroundColor: props.accentColor,
              color: props.contrastColor,
            }}>
            Add this product
          </button>
        </div>
        <div className='AppProduct-form-separator'></div>
        <div className='AppProduct-form-right'>
          <label>Product Specification 1</label>
          <br />
          <input
            type='text'
            name='name'
            placeholder='Eg: Size'
            className='specInput'
            id='specName1'
          />
          <input
            type='text'
            name='name'
            placeholder='42'
            className='specInput'
            id='specValue1'
          />
          <br />
          <label>Product Specification 2</label>
          <br />
          <input
            type='text'
            name='name'
            placeholder='Eg: Color'
            className='specInput'
            id='specName2'
          />
          <input
            type='text'
            name='name'
            placeholder='Brown'
            className='specInput'
            id='specValue2'
          />
          <br />
          <label>Product Specification 3</label>
          <br />
          <input
            type='text'
            name='name'
            placeholder='Eg: Brand'
            className='specInput'
            id='specName3'
          />
          <input
            type='text'
            name='name'
            placeholder='Gucci'
            className='specInput'
            id='specValue3'
          />
          <br />
          <label>Product Specification 4</label>
          <br />
          <input
            type='text'
            name='name'
            placeholder='Eg: Hotel'
            className='specInput'
            id='specName4'
          />
          <input
            type='text'
            name='name'
            placeholder='Trivago'
            className='specInput'
            id='specValue4'
          />
          <br />
          <div>
            <label>Product Specification 4</label>
            <br />
            <label
              htmlFor='formId'
              className='UploadButton'
              onChange={handleChange}
              style={{
                backgroundColor: props.accentColor,
                color: props.contrastColor,
              }}>
              <input name='' type='file' id='formId' hidden />
              <FontAwesomeIcon
                icon={faArrowUp}
                style={{ paddingRight: "20px" }}
              />{" "}
              Upload Product Picture
              <img className='picturePreview' src={file} alt='tet' />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
