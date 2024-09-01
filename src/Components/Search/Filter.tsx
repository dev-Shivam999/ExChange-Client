import  { memo } from 'react';
import InputType from './input';
import Range from './Range';
import Location from './Location';
import Type from './Type';

const Filter = memo(() => {
    return (
        <div className='bg-zinc-500 text-3xl text-white h-[100%] px-3 py-3 w-96'>
            <h1 className='text-white '>
                Search

            </h1>
            <form onSubmit={(e) => {
                e.preventDefault();
            }} className='text-2xl'>
                <div className='flex justify-around'>
                    <InputType  Rent='Rent' />
                    <InputType  Rent='Buy' />

                </div>
                <Range />
                <Location  />

                <Type/>

            </form>
        </div>
    );
});

export default Filter;