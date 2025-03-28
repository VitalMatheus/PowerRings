import React from 'react';
import Slider from "react-slick";
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselProps, RingData } from '@/types/card';

function Carousel({ data, handleEdit }: CarouselProps) {
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
            <div className="relative h-64 w-full max-w-sm">
              <Image
                src={item.image}
                alt="Picture of the ring"
                fill={true}
              />
            </div>
            <div className="p-5">
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.power}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.carrier}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.forgedBy}</p>

              <div className="flex justify-evenly">
                <button onClick={() => handleEdit(item)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Selecionar
                </button>

                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Excluir
                </button>

              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel;