
import React from "react";
import { Link } from "react-router-dom";
import personal from "assets/images/homepage/personal.jpg";
import help from "assets/images/homepage/help.jpeg";
import community from "assets/images/homepage/community.jpg";
import charity from "assets/images/homepage/charity.jpg";
import SwiperCore, {Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Pagination, Scrollbar, A11y, Autoplay]);

const CategoriesMainSwiper = () =>  {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="categories text-center">
        <h1 className="text-capitalize">
          Browse by Categories
        </h1>
        <p className='text-capitalize'>
          Find a cause to donate cash or idle items to
        </p>
        </div>
   
        <div className="container">
          <div className="align-items-center justify-content-center">
          <Swiper 
          spaceBetween={4}
           slidesPerView={4}
           pagination={{ clickable: true }}
           autoplay={{
            delay: 5000,
            disableOnInteraction: false
            }}
            speed={8}
           lazyloading={true}
           loop={true}
           breakpoints={{
            259: {
              width: 259,
              slidesPerView: 2,
            },
            577: {
              width: 577,
              slidesPerView: 4,
            },
            993: {
              width: 993,
              slidesPerView: 4,
            },
          }}
           >  

            <SwiperSlide className='swiper-cont'>
            <div
              className="align-items-center d-flex justify-content-center  category-slide"
              style={{ backgroundImage: `url(${personal})` }}
            >
              <Link to ='/categories/personal-fundraising' className='link-router' onClick={()=>scrollToTop()}>
              <h4 className="text-category text-white">Personal</h4>
              </Link>
            </div>
            </SwiperSlide>
  
            <SwiperSlide className='swiper-cont'>
            <div
              className="align-items-center d-flex justify-content-center category-slide"
              style={{ backgroundImage: `url(${charity})`}}
            >
             <Link to ='/categories/startup-fundraising' className='link-router'  onClick={()=>scrollToTop()}>
              <h4 className="text-category">Start up</h4>
              </Link>
            </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-cont'>
            <div
              className="d-flex align-items-center justify-content-center category-slide"
              style={{ backgroundImage: `url(${community})` }}
            >
               <Link to ='/categories/community-fundraising' className='link-router'  onClick={()=>scrollToTop()}>
              <h4 className="text-category">Community</h4>
              </Link>
            </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-cont'>    
            <div
              className="align-items-center d-flex justify-content-center category-slide"
              style={{ backgroundImage: `url(${help})` }}
              >
               <Link to ='/categories/ngo-fundraising' className='link-router' onClick={()=>scrollToTop()}>
              <h4 className="text-category d-flex ">NGO</h4>
              </Link>
            </div>
            </SwiperSlide>
         </Swiper>
          </div>
       </div>
    </>
  );
}

export default CategoriesMainSwiper;

