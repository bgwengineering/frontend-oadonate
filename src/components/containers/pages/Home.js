import React from "react";
import FeaturedCauses from "components/containers/subpages/categories/FeaturedCategories";
<<<<<<< HEAD
import BuyToSupport from "components/containers/subpages/buytosupport/BuyToSupport";
=======
import BuyToSupport from "components/containers/subpages/buytosupport/Market/BuyToSupport";
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
import ImageSlider from "components/ui/ImageSlider";
import Counter from "components/ui/Counter";
import CategoriesMainSwiper from "../subpages/categories/CategoriesMainSwiper";
import DescriptionText from './../../ui/DescriptionText';
<<<<<<< HEAD
import BidAuction from "components/containers/subpages/buytosupport/BidAuction";
=======
import BidAuction from "components/containers/subpages/buytosupport/Auction/BidAuction";
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
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
