import { memo, useEffect, useRef, useState } from 'react';
import Pro from '../Lo/Pro';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios   from 'axios';
import { FaCamera } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {  pic } from '../../store/Edit';

const EditsPart = memo(() => {
    const [p, setp] = useState<lol | undefined>();

    const pop = useSelector((state: { AddProfile: { Product: lol },ing:File[] }) => state);
    const Product=pop.AddProfile.Product


    const navigate = useNavigate()
    useEffect(() => {
        if (Product) {
            setp(Product);
        }
    }, [Product]);

    const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setp(prevp => ({ ...prevp!, name: e.target.value }));

    };
    const handleProductPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setp(prevp => ({ ...prevp!, number: e.target.value }));

    };
    const handleProductTittleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setp(prevp => ({ ...prevp!, email: e.target.value }));

    };

    const api = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        

        if (String(pop.ing)==Product.pic) {
            const formData = new FormData();
            formData.append('file', String(pop.ing));

            try {
            formData.append("upload_preset", "zkpqmxbs");
                formData.append("cloud_name", "dqavwsmjz");
                const response = await fetch("https://api.cloudinary.com/v1_1/dqavwsmjz/image/upload", {
                    method: "post",
                    body: formData
                });
                if (!response.ok) {
                    throw new Error(`Failed to upload image : ${response.statusText}`);
                }
                const imageData = await response.json();

                setp(prevp => ({ ...prevp!, pic: String(imageData.url) }));
                
                    const { data } = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/EditsProfile`, { p }, { withCredentials: true })

                    if (data) {
                        alert("save successfully")
                        navigate('/Profile')
                    }


               
            } catch (error) {
                console.error('Error uploading image:', error);
                // Handle error gracefully
                alert('Error uploading image');
            }
        }


        const { data } = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/EditsProfile`, { p }, { withCredentials: true })

        if (data) {
            alert("save successfully")
            navigate('/Profile')
        }


    }
    const dispatch=useDispatch()
    const img = useRef<HTMLInputElement | null>(null)
    const im = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {


            const formData = new FileReader();
             formData.readAsDataURL(e.target.files[0]);
            formData.onload = () => {

                if (typeof formData.result == "string") {
                    if (e.target.files) {
                       
                        setp(prevp => ({ ...prevp!, pic: String(formData.result) }));
                        dispatch(pic(e.target.files[0]));
                        
                    }
                    
                }
            }
            formData.onerror = (e) => {
                console.log(e);

            }
        }

       
    }
    function popup(e:React.ChangeEvent<HTMLInputElement>){
setp(p=>({...p!,Private:e.target.checked}))
console.log(p?.Private);

    }

    return (
        <div>
            <Pro api={api}>
                <div className='flex justify-between'>
                    <div className='w-[15vw] h-[15vw] bg-pink-400 rounded-full relative'>
                        <img src={p?.pic} className='w-full h-full rounded-full absolute top-0 left-0' alt="" />
                        <div className=' absolute h-full w-full  rounded-full flex justify-center items-center' style={{ backgroundColor: "  rgb(244 240 242 / 64%)" }}>
                            <FaCamera onClick={() => img.current?.click()} >

                            </FaCamera>
                            <input type="file" name="file" ref={img} className='hidden' onChange={(e) => im(e)} />
                        </div>

                    </div>                    <div className='p-5 flex flex-col gap-4'>

                        <input type="text" className='border-2 border-black rounded-lg px-1' value={p?.name || ''} onChange={handleProductNameChange} />

                        <input type="number" className='border-2 border-black rounded-lg px-1' value={p?.number || ''} onChange={handleProductPriceChange} />
                        <input type="email" className='border-2 border-black rounded-lg px-1' value={p?.email || ''} onChange={handleProductTittleChange} />
                          <div className='flex gap-2'><label htmlFor="" className='text-base'>Do you want make you account private</label>
                            <input type="checkbox" className='border-2 border-zinc-600' checked={p?.Private} onChange={popup} /></div>
                        <div className='flex gap-4'>
                            <button className='bg-zinc-800 text-white p-2 rounded-lg'>Save&next</button>
                            <div className='bg-zinc-600 text-white  cursor-pointer rounded-md p-2' onClick={() => navigate('/')}>Cancel</div>
                        </div>
                    </div>
                </div>
            </Pro>
        </div>
    );
});

export default EditsPart;
