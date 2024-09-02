import React, { forwardRef, memo } from 'react';

const Tools = memo(forwardRef<HTMLTextAreaElement>((prop,ref,) => {
    return (
        <>
         
            <textarea name="" className="border-2 border-zinc-600 rounded-md p-2" ref={ref} id=""></textarea>
            <button className="border-2 bg-zinc-600 rounded-md p-2 w-full" type="submit" >Next</button>   
        </>
    );
}));

export default Tools;