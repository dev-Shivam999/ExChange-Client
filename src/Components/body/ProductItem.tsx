
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Number from '../footer/Number';
import { memo } from 'react';

const ProductItem = memo(({ p }: { p: Ad2 }) => {
    return (
        <div className='mt-3 mx-1  border-[3px] border-black rounded-md'>
            <div className=' z-0 flex overflow-hidden items-center   sm:block rounded-2xl px-[1vw] py-[1vw] mx-3'>
                <div className='text-[3vw] hidden sm:block p-2 text-center'>  {
                    p.ProductType
                }</div>
                <div className=' w-4/5 h-[50vw] md:h-[20vw] Cart overflow-hidden  sm:w-full mr-4 relative'>
                    <img src={`${p.ProductImg == "" ? "" : p.ProductImg}`} className='w-full rounded-2xl top-0 left-0 absolute  h-full bg-white' alt="" />
                    <div className='w-full h-full   flex justify-center items-center absolute light-cart'>
                        <Link to={`/Product/${p._id}`} className='bg-black text-white rounded-full p-1'> <FaPlus /></Link>
                    </div>
                </div>
                <div className='px-3 self-start sm:self-center text-[3vw] mt-3 sm:text-[2vw] uppercase'>
                    
                    <div className='my-1'>
                        {p.ProductName}
                    </div>
                    <div className='my-1'>
                        <span className='my-1'>  {p.ProductType}</span>
                        <span className='my-1'>{p.ProductType == "Rent" ? "  Per Day :" + p.ProductPrice + "₹" : " " + p.ProductPrice + "₹"} </span>
                    </div>

                </div>

            </div>
            <div className=' w-max mx-auto p-3 rounded-b-lg'>
                <Number userId={p} />
            </div>
        </div>
    );
});

export default ProductItem;