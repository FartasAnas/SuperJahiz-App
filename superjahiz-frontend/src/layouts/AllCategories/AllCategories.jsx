import React from "react";
import CategoryTile from "../../components/CategoryTile/CategoryTile";
import FlexWrapper from "../../components/FlexWrapper/FlexWrapper";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./AllCategories.css";
import { renderCategories } from "./AllCategoriesLogic";

function AllCategories(props) {
  return (
    <div>
      <NavBar />
      <div className='AllCategories'>
        <SectionTitle text='All Categories' />
        <FlexWrapper justify='flex-Start'>
          {renderCategories(props?.Categories)}
        </FlexWrapper>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default AllCategories;
