
import React, { memo } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Search:React.FC = memo(() => {

   

  
     
    return <Link  to={'/Search'} className=' flex relative rounded-md px-2 mx-auto w-3/4 bg-white  items-center gap-[10px]'>
            <input type="search" className='border-2  w-full bg-transparent  rounded-md p-1 focus:border-none outline-none text-black'  placeholder='search...'  />
            <button type='submit'><FaSearch /></button>
        </Link>
    
});

export default Search;