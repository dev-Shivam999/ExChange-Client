import React, {  useRef, useState } from 'react';
import Inp from '../Components/Lo/Inp';
import FoUnder from '../Components/Lo/for';
import Pro from '../Components/Lo/Pro';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';


const Sign: React.FC = () => {
    const navigate = useNavigate()
    const name = useRef<HTMLInputElement>(null)
    const number = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const [file,seFile ]=useState<File>()
    const [file2,seFile2 ]=useState<string>()
    const img=useRef<HTMLInputElement>(null)
    const pri=useRef<Boolean>(false)
  const [p,setp]=useState<string>("")

    const api = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (file) {
            const data = new FormData()
            
            data.append("file", file)
            data.append("upload_preset", "zkpqmxbs")
            data.append("cloud_name", "dqavwsmjz")
            const url = await fetch("  https://api.cloudinary.com/v1_1/dqavwsmjz/image/upload", {
                method: "post",
                body: data
            })
            const data2 = await url.json()
            console.log(data2.secure_url);
            
            seFile2(String(data2.secure_url))

        }
        

        const { data }: AxiosResponse<Post> = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/Sign`, {
            number: number.current?.value,
            password: password.current?.value,
            email: email.current?.value,
            name: name.current?.value,
            pic:file2,
            Private: pri.current
        }, {
            withCredentials: true
        });
        if (data.success) {
            alert(data.message)
            navigate('/Add')
        }
        else {
            alert(data.message)
        }



    }

    function popup(e:React.ChangeEvent<HTMLInputElement>) {
         
        pri.current = e.target.checked
    }
    const pic = async (e: React.ChangeEvent<HTMLInputElement>) => {
   
   
        if (e.target.files) {
            seFile(e.target.files[0])
         
            const formData = new FileReader();
            formData.readAsDataURL(e.target.files[0]);
            formData.onload = () => {

                if (typeof formData.result == "string") {
                    if (e.target.files) {
                       setp(formData.result)
                      

                    }

                }
            }
            formData.onerror = (e) => {
                console.log(e);

            }
        
            
        }


    }
    return (
        <Pro api={api}>

            <div className='mt-5'>
                Sign in
            </div>
            <div className='w-[15vw] h-[15vw]  rounded-full relative' style={{ backgroundColor: "  rgb(244 240 242 / 44%)" }}>
                <img src={p || ""} className='w-full h-full rounded-full absolute top-0 left-0' alt="" />
                <div className=' absolute h-full w-full  rounded-full flex justify-center items-center' style={{ backgroundColor: "  rgb(244 240 242 / 64%)" }}>
                    <FaCamera onClick={() => img.current?.click()} >

                    </FaCamera>
                    <input type="file" name="file" ref={img} className='hidden' onChange={(e) => pic(e)} />
                </div>

            </div>


            <Inp ref={name} pl="text" value="name" />
            <Inp ref={number} pl="number" value="number" />
            <Inp ref={email} pl="email" value="email" />
            <Inp ref={password} pl="password" value="password" />

            <div className='flex gap-2'><label htmlFor="" className='text-base'>Do you want make you account private</label>
            <input type="checkbox" className='border-2 border-zinc-600'  onChange={popup} /></div>

            <FoUnder li="Login" cl="Sign" />

        </Pro>

    );
};

export default Sign;