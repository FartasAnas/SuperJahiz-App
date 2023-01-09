import React, { useState } from "react";
import CategoryTile from "../../components/CategoryTile/CategoryTile";
import FlexWrapper from "../../components/FlexWrapper/FlexWrapper";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import ProductTile from "../../components/ProductTile/ProductTile";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ShowAllButton from "../../components/ShowAllButton/ShowAllButton";
import "./StoreFront.css";
import { renderProductsTopSellers, renderCategories4 } from "./StoreFrontLogic";
function StoreFront(props) {
  const [fullState, setFullState] = useState();
  console.log(props);
  return (
    <div className='app-page'>
      <NavBar></NavBar>
      <div className='StoreFront'>
        <SectionTitle text='Categories' accentColor={props.AccentColor}>
          <ShowAllButton accentColor={props.AccentColor} to='/categories' />
        </SectionTitle>
        <FlexWrapper justify='space-between'>
          {renderCategories4(props?.Categories)}
        </FlexWrapper>
        <SectionTitle text='Top Sellers' accentColor={props.AccentColor}>
          <ShowAllButton accentColor={props.AccentColor} to='/products' />
        </SectionTitle>
        <FlexWrapper justify='space-between'>
          {renderProductsTopSellers(
            props.Categories,
            props?.Products,
            props.AccentColor,
            props.ContrastColor
          )}
        </FlexWrapper>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default StoreFront;
