import React, { memo } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';

const Cart:React.FC = memo(() => {
    const navigate=useNavigate()
    return (
       <div className="cursor-pointer " onClick={()=>navigate('/cart')}>
            <div className='flex items-center'>
                cart <FaCartArrowDown />
            </div>
       </div>
    );
});

export default Cart;