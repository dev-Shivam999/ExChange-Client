import React, { useEffect, useState } from 'react';
import P2 from '../Components/body/P2';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

const PC: React.FC = () => {
  const navigate=useNavigate()
  const [car, setCar] = useState<Ad[]>([])
  const api = async () => {
    const { data }: AxiosResponse<Post10> = await axios.get(`${import.meta.env.VITE_SOME_KEY}/user/GetCart`, { withCredentials: true })
    if (data.success) {
      if (typeof data.message != "string") {

        setCar(data.message)
      }
    }else{
      if (data.message == "login first"||data.message == "Login first") {
        alert(data.message)
        navigate('/login')
      }
    }
  }
  useEffect(() => {
    api()
  }, [])
  return (
    <div className='bg-white  grid grid-cols-1 py-4 gap-4'>
     
      {
        car && car.length > 0 ? car.map((p) => <P2 key={p._id} p={p} />) : <div className='text-black'> Add to cart</div>
      }
    </div>
  );
};

export default PC;