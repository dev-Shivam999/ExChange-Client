import React, { memo, useCallback, useRef } from 'react';
import InputType from '../Search/input';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MidLoc from '../Search/MidLoc';
import MidTy from '../Search/MidTy';

const Form = memo(() => {
    const navigate = useNavigate()
    const Price = useRef<HTMLInputElement>(null)
    const district = useRef<HTMLTextAreaElement>(null)
    const SubLoc = useRef<HTMLInputElement>(null)
    const name = useRef<HTMLInputElement>(null)
    const { search } = useSelector((state: { AddProfile: { search: { type: string, location: string, item: string }, Result: [] } }) => state.AddProfile);

    const api = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (name.current?.value!==""&&Price.current?.value != "" && district.current?.value != "" && SubLoc.current?.value != "") {


            const { data }: AxiosResponse<Post3> = await axios.post(`${import.meta.env.VITE_SOME_KEY}/Sel/Pro`, {
                ProductSale: search.item,
                ProductCity: search.location,
                ProductPrice: Price.current?.value,
                ProductType: search.type,
                SubLoc: SubLoc.current?.value,
                ProductDiscretion: district.current?.value
            }, {
                withCredentials: true
            });

            if (data.success) {

                navigate(`/img/${data.id}`)
                alert(data.message)
            }
            else {
                alert(data.message)
                // navigate("/sign")
            }

        }

    }, [search])

    return (
        <form onSubmit={(e) => api(e)} >
            <div className="flex items-center gap-2">
                <label className="text-2xl" htmlFor="">City</label>   <MidLoc /></div>


            <MidTy />


            <InputType Rent="Rent" />
            <InputType Rent="Sale" />
            <div className='flex  flex-wrap gap-2'>
                <input type="text" className="border-2 w-11/12 border-zinc-600 rounded-md p-2" placeholder="Sub Location eg:200 Feet " ref={SubLoc} />
                <input type="number" className="border-2 w-11/12 border-zinc-600 rounded-md p-2" ref={Price} placeholder={`${search.type == "Rent" ? "monthly Rent" : "SALE ONE PRICE"}`} />
                <textarea name="" placeholder='Share about your Property Like Area Society (BHk)' className="border-2 w-11/12 h-[20vh] border-zinc-600 rounded-md p-2" ref={district} id=""></textarea>

                <input type="number" className="border-2 w-11/12 border-zinc-600 rounded-md p-2 " ref={name} placeholder='Property name eg: A beautiful Villa 3BHk ' />
            </div>
            <button className="border-2 bg-zinc-600 rounded-md p-2 mt-3 w-11/12" type="submit" >Next</button>

        </form>
    );
});

export default Form;