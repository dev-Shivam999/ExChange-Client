import axios from 'axios';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Output = () => {

    const navigation = useNavigate()
    const [one, setone] = useState<string>("")
    const { search } = useSelector((state: { AddProfile: { search: { type: string, range: Number, location: string,item:string }, Result: [] } }) => state.AddProfile);
    const [data, SetData] = useState<[]>()
    const searchApi = async (searchTerm: string) => {
        try {
            const response = await axios.put(`${import.meta.env.VITE_SOME_KEY}/user/Search?q=${searchTerm}`, { search });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {

        if (one?.length) {
            const p = setTimeout(async () => {
                const data = await searchApi(one);
                SetData(data.message)



            }, 500)
            return () => {
                clearTimeout(p);
            }
        }

    }, [one, search])
    return (
        <div className=" w-full sm:w-3/5">
            <div className=" p-1 relative left-1/2 -translate-x-1/2 top-[10vh] w-3/4">
                <form onSubmit={(e) => {
                    e.preventDefault();

                    if (data&&data.length>0) {
                       navigation(`/Search/q/${one}`)
                   }
                }}> <input type="search" className='border-2 border-zinc-500 bg-slate-100  rounded-md w-full p-2' placeholder="Search youR EX" onChange={(e) => setone((e.target.value).trim())} /></form>
                <div>
                    {
                        one?.length ? data && data.length > 0 ? data.map((p: Ad) => <Link to={`/Product/${p._id}`} className='list-none block bg-zinc-500 px-2 text-white   my-2 rounded ' key={p._id}><div className='flex justify-between'><p className='uppercase text-2xl text-zinc-900 font-bold'>{p.ProductName
                        }</p><span>{p.ProductPrice}</span></div>
                                <p>{p.
                                    ProductDiscretion.slice(0,70)}...</p></Link>) : "not found" : ""
                    }
                </div>
            </div>
        </div>
    );
};

export default Output;