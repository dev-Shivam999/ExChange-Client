import React, { useRef, useState } from 'react';
import Pro from '../Components/Lo/Pro';
import axios, { AxiosResponse } from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Pic:React.FC = () => {
    const [url,setUrl]=useState<string>()
    const [next,setnext]=useState<boolean>(false)
    const navigate =useNavigate()
    const img=useRef<HTMLInputElement|null>(null)
    const {id} = useParams();
    const im = async(e: React.ChangeEvent<HTMLInputElement>)=>{
        if (e.target.files) {
            const formData = new FormData();
            formData.append('file', e.target.files[0]);

            formData.append('id', id!); 

            try {
                
                
                const { data }: AxiosResponse<Post> = await axios.post(`${import.meta.env.VITE_SOME_KEY}/Sel/SelPic`, formData, {
                    withCredentials: true
                });
                if (data.success) {

                   if (typeof data.message=="string") {
                       setUrl(data.message)
                       setnext(true)
                   }

                } else {
                    alert(data.message)
                }
            } catch (error) {
                console.error('Error uploading image:', error);
                // Handle error gracefully
                alert('Error uploading image');
            }
        }
    }
    return (<>
        <Link to={'/'} className='p-3 text-5xl'>
                Home
            </Link>
        <Pro api={()=>{}}>
            <div className='mt-5'>
             Product  iMG
            </div>
        <div className=' w-4/5 sm:w-1/2 h-[50vh] '>
                <img src={url?url:""} className='w-full  h-full  bg-black ' alt="" />
        </div>
          <input type="file" name="file" ref={img} className=' text-[3vw]' onChange={(e)=>im(e)} />
   
            <div className={`cursor-pointer text-white p-3 rounded-md ${next ? " bg-blue-700" : "bg-blue-300"}`} onClick={() => next ? navigate('/profile'):""}>next</div>
        </Pro>
    </>
    );
};

export default Pic;