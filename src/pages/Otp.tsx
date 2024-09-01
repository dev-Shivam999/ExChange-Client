import React from 'react';
import Inp from '../Components/Lo/Inp';
import Pro from '../Components/Lo/Pro';

const Otp:React.FC = () => {
    return (
      <Pro api={()=>{}}>

                    <div className='mt-5'>
                        Enter the Otp
                    </div>
                    <Inp pl="number" value="Otp" />

                    <div className='flex justify-between gap-[10vw] '>
                      
                        <button type='submit' className='border-2 bg-white border-black text-black rounded-xl px-4 active:bg-black'>                           Re-send
                        </button>
                        <button type='submit' className='border-2 rounded-xl bg-black text-white px-4 active:bg-white'>
                            submit
                        </button>
                    </div>
      </Pro>
           
    );
};

export default Otp;