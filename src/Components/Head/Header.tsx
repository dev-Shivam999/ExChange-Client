import React, { memo } from 'react'
import Cart from './Cart';
import LS from './LS';
import { Link } from 'react-router-dom';


const Header: React.FC = memo(() => {

  return (
    <nav className=' flex bg-zinc-600 justify-between px-[5vw] py-[2vw] font-mono text-[5vw] sm:text-2xl'>


      <>
        <Link className='sm:text-5xl text-3xl' to={'/'}>
          EX
        </Link>
        <div className='flex items-center justify-between gap-[4vw]'>
          <Cart />
          <LS />
        </div>
      </>


    </nav>
  );
});

export default Header;