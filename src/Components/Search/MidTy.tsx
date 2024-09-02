import  { memo, useState } from 'react';
import Button from './Button';

const MidTy = memo(() => {
    
    const [ver, set] = useState<string>("Flat")

    return (
        <div>

            {
                ["Flat", "Room", "Residential", "Commercial", "PG"].map(p => <Button key={p} Text={p} set={set} ver={ver} />)
            }
        </div>
    );
});

export default MidTy;