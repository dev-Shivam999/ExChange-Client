import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { range as lol } from "../../store/Edit";
const Range = memo(() => {
    const dispatch = useDispatch()

    const [value, setValue] = useState<number>(5000)

    return (
        <div className='flex justify-around flex-col mt-3 '>
            <input type="range" min={1000} max={1000000} className='bg-zinc-600 range-input' value={value} onChange={(e) => { dispatch(lol(Number(e.target.value))); setValue(Number(e.target.value)) }} />
            <div className="flex gap-1"> Around  <input type="number" className="bg-transparent outline-none border-none" value={value} onChange={(e) => { dispatch(lol(Number(e.target.value))); setValue(Number(e.target.value)) }} /></div>
        </div>
    );
});

export default Range