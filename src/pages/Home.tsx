import React, { useEffect, useState } from 'react';
import ProductItem from '../Components/body/ProductItem';
import axios, { AxiosResponse } from 'axios';
import Search from '../Components/Head/Search';
 import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
const Home:React.FC = () => {
   
   
    const [pro, setPro] = useState<Ad2[]>([])
    const api = async () => {

        const { data }: AxiosResponse<Post1> = await axios.get(`${import.meta.env.VITE_SOME_KEY}/user/pro`, { withCredentials: true })
        if (data.success) {
            setPro(data.message)
            
        }
    }
    useEffect(()=>{
        api()
    },[])
    return (
       <>
            <div className='w-full h-[60vh]  relative' >
                <img className='w-full h-full object-cover sm:object-fill sm:object-center   absolute top-0 left-0' src="https://www.creativefabrica.com/wp-content/uploads/2020/03/14/City-buildings-with-shadows-Graphics-3646333-1.jpg" alt="" />

            <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full '>
                    <Search />
            </div>
       </div>
            <div className={`bg-white ${pro && pro.length > 0 ? "grid gap-[5vw] grid-cols-1 mb-10 sm:grid-cols-2 md:grid-cols-3" : ""}`}>



                {
                    pro && pro.length > 0 ? pro.map((e) => <ProductItem key={e._id} p={e} />) : <div className='text-black text-center h-[50vh] flex items-center  justify-center text-5xl w-full'>Loading</div>
                }
            </div>


            
       </>
    );
};

export default Home;