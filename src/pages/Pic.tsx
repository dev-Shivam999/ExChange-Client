import React, { useState } from 'react';

;
import PiC from '../Components/pic/pic';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { empty } from '../store/Edit';


const Pic: React.FC = () => {
    const { id } = useParams()

    const [l, st] = useState<boolean>()
    const search = useSelector((state: { AddProfile: { file: File[] } }) => state.AddProfile.file);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const api = async () => {
        try {
            const arr: string[] = []
            st(true);
            const uploadPromises = search.map(async (file, i) => {
                const data = new FormData();
                data.append("file", file);
                data.append("upload_preset", "zkpqmxbs");
                data.append("cloud_name", "dqavwsmjz");
                const response = await fetch("https://api.cloudinary.com/v1_1/dqavwsmjz/image/upload", {
                    method: "post",
                    body: data
                });
                if (!response.ok) {
                    throw new Error(`Failed to upload image ${i}: ${response.statusText}`);
                }
                const imageData = await response.json();
                arr.push(imageData.url);

            });
            await Promise.all(uploadPromises);
            arr.push(id!)

            const { data }: AxiosResponse<Post0> = await axios.post(`${import.meta.env.VITE_SOME_KEY}/Sel/SelPic`, { arr }, { withCredentials: true });
            if (data.success) {
                st(false);
                dispatch(empty([]))
                navigate('/')

            }

        } catch (error) {
            alert("check internet connection and try later");
            st(false);
            console.log(error);
        }
    }

    return (

        <div className=' flex gap-2 justify-center pt-5 h-[80vh] items-center  flex-wrap'>


            {[0, 1, 2, 3, 4].map((item) => <PiC key={item} value={item} />)}


            {
                search.length > 0 && <button className='absolute top-1/2 translate-y-1/2 p-3 rounded-md  bg-black text-white' onClick={() => api()}>Next {l && "lol"} </button>

            }
            {
                l && <div className='w-full h-full z-10  relative ' style={{ backgroundColor: "rgb(255 255 255 / 40%)" }}>

                    Upl
                </div>
            }

        </div>
    );
};

export default Pic;