import React from 'react';
import { CarouselProps, RingData } from '@/types/card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ data }: CarouselProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Slider {...settings}>
        {data.map((item: RingData) => (
          <div key={item.id}>
            <a href="#">
              <img className="rounded-t-lg" src={item.image} alt="Ring" />
            </a>
            <div className="p-5">
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.power}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.carrier}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.forgedBy}</p>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Editar
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel;