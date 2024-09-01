import axios, { AxiosResponse } from 'axios';
import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CartAdd = memo(() => {
    const { id } = useParams()
    const [car, SetCar] = useState<Boolean>(false)
    const api = async () => {
        const { data }: AxiosResponse<Post> = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/Cart`, {
            id
        }, { withCredentials: true })
        if (!data.success) {
            alert(data.message)

        } else {
            if (data.message == "create" || data.message == "update") {
                SetCar(true)
            } else {
                SetCar(false)
            }
        }
    }
    useEffect(() => {
        const fetch = async () => {
            const { data }: AxiosResponse<Post> = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/CheckCart`, {
                id
            }, { withCredentials: true })
            if (data.success) {
                SetCar(true)
            } else {
                SetCar(false)
            }

        }
        fetch()
    }, [])
    return <span className='border-2 border-white cursor-pointer rounded-md bg-black text-white px-3  py-1' onClick={() => api()}> {car ? "add" : "cart"}</span>


});

export default CartAdd;