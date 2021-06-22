import React from "react";
import FeaturedCauses from "components/containers/subpages/categories/FeaturedCategories";
import BuyToSupport from "components/containers/subpages/buytosupport/BuyToSupport";
import ImageSlider from "components/ui/ImageSlider";
import Counter from "components/ui/Counter";
import CategoriesMainSwiper from "../subpages/categories/CategoriesMainSwiper";
import DescriptionText from './../../ui/DescriptionText';
import BidAuction from "components/containers/subpages/buytosupport/BidAuction";
import MoreFeaturedCategoriesButton from './../subpages/categories/MoreFeaturedCategoriesButton';



const Home = () => {
    return (
      <>
        <ImageSlider /> 
        <DescriptionText/>
        <CategoriesMainSwiper /> 
        <FeaturedCauses /> 
        <MoreFeaturedCategoriesButton/>
        <BuyToSupport /> 
        <BidAuction />
        <Counter /> 
      </>
    );
 
}

export default Home;
