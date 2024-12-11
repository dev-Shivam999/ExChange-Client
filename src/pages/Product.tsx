import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import CartAdd from '../Components/body/CartAdd';
import Number from '../Components/footer/Number';

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
         {val && <div className='w-full  min-h-screen sm:h-full  '>
            <div className='h-1/3 sm:w-1/2 w-full  mx-auto my-[5vw]'>

               {
                  val?.ProductImg.map(img => <img src={img} className='h-[50vh] sm:h-[70vh] w-[90%] mx-auto md:object-fill' alt="" /> )
               }
                </div>

            <div className='px-3 sm:w-1/2'>
               <div>
                  {val?.ProductTittle}
               </div>
               <div>
                  {val?.ProductDiscretion}  </div>
               <div>
                  {val?.ProductPrice}

               </div>
               <div>
                  {val?.ProductType}
               </div>
               <div className='pb-10 mt-2 flex flex-wrap gap-3'>
                  
                  {/* <CartAdd/> */}
                  <Number pri={val.Private} userId={val}/>
               </div>
            </div>
         </div>}
      </>
   );
};

export default Product;