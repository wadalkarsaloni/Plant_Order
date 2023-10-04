import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Hcard from '../Ui/Hcard';
// import Card from '../Ui/Card';
// import HomeData from '../HomeData';



const Homepage = () => {
  return (
    <>
      <div className='sliders'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >

      <SwiperSlide>
            <img src='./Assets/Images/Carousal/banner6.webp' className='swiper-img' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='./Assets/Images/Carousal/banner1.webp' className='swiper-img' />
          </SwiperSlide>
          <SwiperSlide>
              <img src='./Assets/Images/Carousal/banner3.webp' className='swiper-img' />
          </SwiperSlide>
        </Swiper>
      </div>
      <br/>
      <h2 className='text-center text-success'>Looking For?</h2><br/>
      <div>
        <Hcard/>
      </div><br/>

      <h3 className='text-center text-success'>Shop The Look</h3>
      <div>
        <img src='./Assets/Images/HomePage/Living.webp'/>
      </div><br/>

      {/* <h3 className='text-success'>New Arrival</h3> */}
      {/* <div>
        <Card/>
      </div> */}

    </>
  )
}

export default Homepage