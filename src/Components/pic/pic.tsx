import React, {   memo,  useRef, useState  } from 'react';
import { FaCamera } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { img } from '../../store/Edit';

const PiC = memo(({value}:{value:number}) => {
const lol=useRef<HTMLInputElement>(null)
const[fo,setfor]=useState<string>()

const dispatch=useDispatch()
    const im = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if (e.target.files) {
          

           const formData = new FileReader(); formData.readAsDataURL(e.target.files[0]);
           formData.onload = () => {

               if (typeof formData.result == "string") {
                   if (e.target.files) {
                   dispatch(img({ index: value, file: e.target.files[0] }))}
                   setfor(formData.result)
               }
           }
           formData.onerror = (e) => {
               console.log(e);

           }
       }
    }
   return (
        <div className='w-[25vw] h-[20vw] bg-slate-400 rounded-md relative'>
            <img src={fo} className='w-full h-full rounded-md absolute top-0 left-0' alt="" />
            <div className=' absolute h-full w-full  rounded-md flex justify-center items-center' style={{ backgroundColor: "  rgb(244 240 242 / 44%)" }}>
               <FaCamera onClick={() =>
                   lol.current?.click() } >

                </FaCamera>
                <input type="file" name="file" ref={lol} className='hidden' onChange={(e) => im(e)} />
            </div>

        </div>
    );
});

export default PiC;