import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import './Auction.css'; // Include your CSS styles
import auctionData from '../../assets/auctionData';
import { sliderSettings } from '../../utils/common';

const Auction = () => {
  return (
    <section className="auction-wrapper" id="Auction">
      <div className="paddings innerWidth auction-container">
        {/* Header Section */}
        <div className="auction-head">
          <span>Latest live auctions</span>
        </div>

        {/* Swiper Section */}
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {auctionData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="auction-card">
                {/* Auction Item Image */}
                <img src={item.image} alt={item.name} />

                {/* Auction Item Details */}
                <span style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <span className="description">{item.description}</span>
                <button>{item.price}</button>
                </span>
                <div className='timer'>
                <i class='bx bx-timer' style={{color: 'white', marginLeft: '-10rem'}}>{item.time}</i>
                <p className='line'></p>

                <span className='images'>
                    <img src={item.image} alt="" />
                    <img src={item.image} alt="" />
                    <img src={item.image} alt="" />
                    <img src={item.image} alt="" />
                </span>
                </div>


                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Auction;

/* Swiper Navigation Buttons */
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter auction-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
