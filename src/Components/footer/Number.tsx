import axios, { AxiosResponse } from 'axios';
import { memo } from 'react';

const Number = memo(({ userId, pri }: { userId: Ad2, pri: boolean }) => {



    const number = async (user: Ad2) => {

        const { data }: AxiosResponse<Post0> = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/Number`, {
            userId: user.userId
        }, { withCredentials: true })
        if (!data.success) {
            alert(data.message)

        }

        else {
            if (navigator.userAgent.includes('WhatsApp')) {
             
                window.open(`whatsapp://send?phone=${data.message}&text=I am ${user.ProductType} your Product ${user.ProductName}`)
            } else {
                window.open(`https://web.whatsapp.com/send?phone=${data.message}&text=I am ${user.ProductType} your Product ${user.ProductName} `, '_blank');
            }
        }
    }
    function Up(e: Ad2) {
        e
        alert('dealer account private ')
    }
    return (
        <>
            {
                pri ? <span className=' border-2 text-white bg-black border-white text-5xl block rounded-md px-3 cursor-pointer py-3' onClick={() => Up(userId)}>contact</span> : <span className=' border-2 text-white text-5xl  bg-black border-white rounded-md px-3 cursor-pointer py-3' onClick={() => number(userId)}>contact</span>


            }
        </>
    );
});

export default Number;