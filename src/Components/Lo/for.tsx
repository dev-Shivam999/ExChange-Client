
import { memo } from 'react';
import { Link } from 'react-router-dom';

const FoUnder= memo(({li,cl}:{li:string,cl:string}) => {
    return (
        <div className='flex justify-between gap-[10vw] '>
            <Link to={`/${li}`} className='bg-white px-4 text-black border-black border-2 rounded-lg active:bg-black'>{
                li
            }</Link>
            <button type='submit' className='border-2 bg-black text-white rounded-xl px-4 active:bg-white'>{
                cl
            }</button>
        </div>
    );
});

export default FoUnder;