import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { location } from '../../store/Edit';

const MidLoc = () => {
    const [one, setone] = useState<string>("jaipur")
    const dispatch = useDispatch()
    useEffect(() => {

        if (one?.length) {
            const p = setTimeout(() => {
                dispatch(location(one))

            }, 500)
            return () => {
                clearTimeout(p);
            }
        }

    }, [one])
    return <select name="" id="" className='mt-2 rounded-md p-2 text-while bg-zinc-600 uppercase outline-none border-none' defaultValue={"jaipur"} onChange={(e) => setone(e.target.value)
    }>
        <option value="jaipur" >jaipur</option>
        <option value="Ajmer">Ajmer</option>
        <option value="Kota">Kota</option>
        <option value="Delhi">Delhi</option>
    </select>
};

export default MidLoc;