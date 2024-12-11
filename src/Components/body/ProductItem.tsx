import { FaPlus, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Number from '../footer/Number';
import { memo } from 'react';
import './ProductItem.css'
import Img from './Img';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineHouse } from 'react-icons/md';
import { LiaRupeeSignSolid } from 'react-icons/lia';

const ProductItem = memo(({ p }: { p: Ad2 }) => {
    return (
        <div className='mt-3 mx-1 '>
            <div className=' z-0  overflow-hidden items-center   sm:block rounded-2xl px-[1vw] py-[1vw] mx-3'>
               
                <div className=' w-full h-[50vw] md:h-[20vw] Cart overflow-hidden  sm:w-full mr-4 relative'>
                 
                       
                        
                            <Img img={p.ProductImg} />
                    <div style={{ backgroundColor: "rgb(82 82 91 /60%)" }} className='absolute top-3 left-2 px-2 py-1 rounded-sm text-white'>{p.ProductSale}</div>
                       <div style={{ backgroundColor:"rgb(82 82 91 /60%)"}} className='absolute bottom-3 right-2 px-2 py-1 rounded-sm text-white'>for {p.ProductType}</div>
                    <div style={{ backgroundColor:"rgb(82 82 91 /60%)"}} className='absolute bottom-3 left-2 px-2 py-1 rounded-sm text-white'> ₹{p.ProductPrice}</div>
                      
                      
                   
                    <div className='w-full h-full   flex justify-center items-center z-50 absolute light-cart'>
                        <Link to={`/Product/${p._id}`} className='bg-black text-white rounded-full p-1'> <FaPlus /></Link>
                    </div>
                </div>
                <div className='px-3 self-start sm:self-center text-sm mt-3 sm:text-[2vw] uppercase'>
                   
                        <div className='my-1 text-zinc-600'>
                            {p.ProductName}
                        </div>
                    <div className='flex mt-3   gap-1 items-center'>
                        <IoLocationOutline />{p.District}-{p.SubLocation}
                       </div>
                   
                    <div className='my-1  mt-3  flex justify-between'>
                      <div className='flex gap-1 items-center'>
                            <MdOutlineHouse />
                            <span className='my-1'>  {p.ProductType}</span>
                      </div>
                        <div className='flex gap-1 items-center'> <LiaRupeeSignSolid />
                            <span className='my-1'>{p.ProductPrice} </span></div>
                    </div>
                <div className='flex  mt-3 gap-1 items-center'>  <FaUser /> {p.username} </div>
            </div>
                </div>
            <div className=' w-max mx-auto p-3 rounded-b-lg'>
                <Number pri={p.Private} userId={p} />
            </div>
        </div>
    );
});

export default ProductItem;