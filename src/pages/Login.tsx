import React, { useRef } from 'react';
import Inp from '../Components/Lo/Inp'
import FoUnder from '../Components/Lo/for';
import Pro from '../Components/Lo/Pro';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const navigate=useNavigate()
    const api = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const { data }: AxiosResponse<Post> = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/Login`, {
        
            password: password.current?.value,
            email: email.current?.value,
           
        }, {
            withCredentials: true
        });
        if (data.success) {
            alert(data.message)
            navigate("/")
        }else{
            alert(data.message)
        }
    }
    return (

        <Pro api={api}>

                    <div className='mt-5'>
                       Login
                    </div>
                    <Inp ref={email} pl="email" value="email" />
                    <Inp ref={password} pl="password" value="password" />
           
                    <FoUnder li="Sign" cl="Login"/>
        </Pro>
      
    );
};

export default Login;