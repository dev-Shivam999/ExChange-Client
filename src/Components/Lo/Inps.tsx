import React, { memo } from 'react';

const Inpn = memo(({ pl, value, val, fu }: { pl: string, value: string, val: string, fu: (p: React.ChangeEvent<HTMLInputElement>)=>void}) => {
    return (
        <input onChange={(e)=>fu(e)} type={pl} className='bg-transparent border-2 border-black rounded-xl p-1' placeholder={value} value={val}/>
    );
});

export default Inpn;
