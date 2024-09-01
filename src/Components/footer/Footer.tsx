import React, { memo } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
const Footer: React.FC = memo(() => {
    const location =useLocation()
    console.log();
    
    return (
        <footer className='fixed fot bottom-2 flex flex-col  w-[50vw] sm:w-[10vw] right-3'>
            {location.pathname!="/Add"&&
            <>
                <Link to={`/Add`} className='t hidden '>
                    <div className=' bg-zinc-500 rounded-lg p-3 text-2xl'>Add you EX</div>
                </Link>
                <div className='   bg-zinc-500  self-end mx-auto  rounded-full p-4 '>
                    <FaPlus />

                </div>
            </>
            }

        </footer>
    );
});

export default Footer;