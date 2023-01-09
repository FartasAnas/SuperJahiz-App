import React, { useEffect, useState } from "react";
import FlexWrapper from "../../components/FlexWrapper/FlexWrapper";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import ProductTile from "../../components/ProductTile/ProductTile";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ExtractParameter from "../../helpers/LinkParameterExtract";
import "./Products.css";
import { testProduct, renderProducts } from "./ProductsLogic";
function Products(props) {
  const [search, setSearch] = useState(ExtractParameter("search"));

  return (
    <div>
      <NavBar setUpdated={setSearch}></NavBar>
      <div className='Products'>
        <SectionTitle text='Products'></SectionTitle>
        <FlexWrapper justify='flex-start'>
          {renderProducts(
            props?.Products,
            props?.AccentColor,
            props?.ContrastColor
          )}
        </FlexWrapper>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Products;
