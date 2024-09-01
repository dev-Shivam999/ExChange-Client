import  { useState } from 'react';
import Button from './Button';

const MidTy = () => {
    const arr = ["Flat", "Room", "Residential", "Commercial", "PG"]
    const [ver, set] = useState<string>("Flat")

    return (
        <div>

            {
                arr.map(p => <Button key={p} Text={p} set={set} ver={ver} />)
            }
        </div>
    );
};

export default MidTy;