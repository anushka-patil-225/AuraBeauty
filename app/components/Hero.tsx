"use client";


import React from 'react';
import Slider from 'react-slick';
import Slides from './Slides';

const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
       {
        id:0,
        img:"/banner1.webp",
        title:"Trending Item",
        mainTitle:"LATEST LIPSTICK LAUNCHES",
        price:"Rs.659",
       },
       {
        id:1,
        img:"/banner2.webp",
        title:"New Eyeshadow Palettes",
        mainTitle:"SENSATIONAL EYE LOOKS",
        price:"Rs.1245",
       },
       {
        id:2,
        img:"/banner3.jpg",
        title:"Sale Offer",
        mainTitle:"NEW SEASON SALE",
        price:"Rs.450",
       },
    ]

  return (
    <div>
        <div className='container pt-6 lg:pt-0'>
            <Slider {...settings}>
                {slideData.map((item) => (
                    <Slides
                       key={item.id}
                       img={item.img}
                       title={item.title}
                       mainTitle={item.mainTitle}
                       price={item.price}
                    />
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Hero
