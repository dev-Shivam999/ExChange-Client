import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
    const [pic,setpic]=useState<lol|null>(null)
    const navigate=useNavigate()
        const api=async()=>{
            const { data }: AxiosResponse<Post> = await axios.get(`${import.meta.env.VITE_SOME_KEY}/user/profile`,{withCredentials:true})
        if(data.success){
            if (typeof data.message!="string") {
                setpic(data.message)
            }
        }
        else{
            alert(data.message)
            navigate("/Login")
        }
        
    }
    useEffect(()=>{api()},[])
    return (
        <div className='bg-white  px-4 pt-4 text-black w-full'>
            <>
                <div className='w-full flex justify-between '>
                    <img src={`${pic&&!pic.pic?"/vite.svg":pic?.pic}`} className='w-1/6 rounded-full bg-pink-500' alt="" />
                    <button onClick={()=>navigate(`${pic?.number}/edits/text`)} className='bg-zinc-600 px-3 h-max text-white'>Edit</button>
                </div>
                <div>
                    {pic?.name}

                </div>
                <div>
                    {pic?.number}
                </div>
               
                <div>
                    {pic?.email}
                </div>

             

                <Link to={'/cart'}>
                    cart
                </Link>

              

                <div>
                    help
                </div>

             
                
            </>


        </div>
    );
};

export default Profile;