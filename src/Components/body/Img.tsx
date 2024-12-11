import { memo } from 'react';
import LoadImg from '../pic/LoadImg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
const Img = memo(({ img ,className=""}: {className?:string, img: [] }) => {
  

    return (

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                className="mySwiper w-full h-full"
            >


                {img.map((item, index) => (
                   
                    <SwiperSlide key={index}>  <LoadImg className={`${className} h-full w-full `} val={item} /></SwiperSlide>
                    
                ))}
            </Swiper>
      
    );
})
export default Img;