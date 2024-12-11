import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Number from '../Components/footer/Number';
import Img from '../Components/body/Img';

const Product: React.FC = () => {
   const [val, SetVal] = useState<Ad2|null>(null)
   const navigate = useNavigate()
   const { id } = useParams()
   const api = async () => {
      const { data }: AxiosResponse<Post0> = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/Product`, {
         id
      }, { withCredentials: true })
      if (data.success) {

         if (typeof data.message != 'string') {
            SetVal(data.message)
         }

      } else {
         navigate('/')

         alert(data.message)
      }
   }
   useEffect(() => { api() }, [])

   
   return (
      <>
         <div className='font-bold text-5xl w-max mx-auto mt-4 '>
            Location :  {val?.SubLocation.toLocaleUpperCase()}
         </div>
         {val && <div className='w-full  min-h-screen sm:h-full  '>
         
            <div className='h-[500px]  w-[80%] mx-auto my-5'>

               <Img img={val?.ProductImg} className='h-[50vh] sm:h-[70vh] w-[90%]  mx-auto md:object-fill'/>
                </div>

            <div className='px-3 mx-auto sm:w-4/5'>
             
               <div>
                  <h1 className='font-bold text-5xl'>  
                     {val?.ProductType} :
                  </h1>
                  <p className='text-2xl'>{val?.ProductDiscretion}</p>  </div>
               <div className='text-4xl'>
                  <span className='text-zinc-500'>                  {val?.ProductType == "Rent" ? "Monthly Rent : " : " Total Price : "}</span>  
                  <span className='font-bold'>

                  {  val?.ProductPrice}
                  </span>

               </div>
             
               <div className='pb-10 my-5  flex flex-wrap gap-3'>
                  
                  <Number pri={val.Private} userId={val}/>
               </div>
            </div>
         </div>}
      </>
   );
};

export default Product;