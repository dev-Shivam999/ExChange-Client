import React, { memo, useCallback, useRef } from 'react';
import InputType from '../Search/input';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import MidLoc from '../Search/MidLoc';
import { item } from '../../store/Edit';
import Tools from './Tools';
import MidTy from '../Search/MidTy';

const Form = memo(() => {
    const navigate = useNavigate()
    const Price = useRef<HTMLInputElement>(null)
    const district = useRef<HTMLTextAreaElement>(null)
    const SubLoc = useRef<HTMLInputElement>(null)
    const { search } = useSelector((state: { AddProfile: { search: { type: string, location: string, item: string }, Result: [] } }) => state.AddProfile);

    const dispatch = useDispatch()
    const api = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Price.current?.value != "" && district.current?.value != "" && SubLoc.current?.value != "") {


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
        <form onSubmit={(e) => api(e)}>
            <div className="flex items-center gap-2">
                <label className="text-2xl" htmlFor="">City</label>   <MidLoc /></div>


            <MidTy/>

          
            <InputType Rent="Rent" />
            <InputType Rent="Sale" />
            <input type="text" className="border-2 border-zinc-600 rounded-md p-2" placeholder="Sub Location eg:200 Feet " ref={SubLoc} />
            <input type="number" className="border-2 border-zinc-600 rounded-md p-2" ref={Price} placeholder={`${search.type == "Rent" ? "monthly Rent" : "SALE ONE PRICE"}`} />
          <Tools ref={district} />

        </form>
    );
});

export default Form;