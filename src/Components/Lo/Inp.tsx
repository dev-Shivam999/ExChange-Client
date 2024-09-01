import React, { memo } from 'react';

const Inp = memo(React.forwardRef<HTMLInputElement, { pl: string; value: string }>(({ pl, value }, ref) => {
    return (
        <input ref={ref} type={pl} className='bg-transparent border-2 border-black rounded-xl p-1' placeholder={value} />
    );
}));

export default Inp;
