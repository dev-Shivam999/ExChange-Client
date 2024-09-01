import React, { createRef, useRef, useState } from 'react';
import Inp from '../Components/Lo/Inp';
import FoUnder from '../Components/Lo/for';
import Pro from '../Components/Lo/Pro';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';


const Sign: React.FC = () => {
    const navigate = useNavigate()
    const name = useRef<HTMLInputElement>(null)
    const number = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const [file,seFile ]=useState<File>()
    const [file2,seFile2 ]=useState<string>()

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
        
console.log(file2);

        const { data }: AxiosResponse<Post> = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/Sign`, {
            number: number.current?.value,
            password: password.current?.value,
            email: email.current?.value,
            name: name.current?.value,
            pic:file2
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
    const pic = async (e: React.ChangeEvent<HTMLInputElement>) => {
   
   
        if (e.target.files) {
            seFile(e.target.files[0])
         
              
            
        }


    }
    return (
        <Pro api={api}>

            <div className='mt-5'>
                Sign in
            </div>
            <input type="file"  onChange={(e) => pic(e)} />


            <Inp ref={name} pl="text" value="name" />
            <Inp ref={number} pl="number" value="number" />
            <Inp ref={email} pl="email" value="email" />
            <Inp ref={password} pl="password" value="password" />



            <FoUnder li="Login" cl="Sign" />

        </Pro>

    );
};

export default Sign;