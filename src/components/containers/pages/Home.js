import React from "react";
import FeaturedCauses from "components/containers/subpages/categories/FeaturedCategories";
import BuyToSupport from "components/containers/subpages/buytosupport/Market/BuyToSupport";
import ImageSlider from "components/ui/ImageSlider";
import Counter from "components/ui/Counter";
import CategoriesMainSwiper from "../subpages/categories/CategoriesMainSwiper";
import DescriptionText from './../../ui/DescriptionText';
import BidAuction from "components/containers/subpages/buytosupport/Auction/BidAuction";
import MoreFeaturedCategoriesButton from './../subpages/categories/MoreFeaturedCategoriesButton';



const Home = () => {
    return (
      <div>
        <ImageSlider /> 
        <DescriptionText/>
        <CategoriesMainSwiper /> 
        <FeaturedCauses /> 
        <MoreFeaturedCategoriesButton/>
        <BuyToSupport /> 
        <BidAuction />
        <Counter /> 
      </div>
    );
 
}

export default Home;
