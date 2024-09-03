import  { memo } from 'react';
import Range from './Range';
import Location from './Location';
import Type from './Type';
import An from './An';

const Filter = memo(() => {
    return (
        <div className='bg-zinc-500  text-sm sm:text-3xl text-white h-max w-full sm:h-[100%] sm:w-2/5 px-3 py-3 '>
            <h1 className='text-white '>
                Search

            </h1>
            <form onSubmit={(e) => {
                e.preventDefault();
            }} >
                <An/>
                <Range />
                <Location  />

                <Type/>

            </form>
        </div>
    );
});

export default Filter;