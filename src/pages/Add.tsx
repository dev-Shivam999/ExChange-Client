import axios, { AxiosResponse } from "axios";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MidLoc from "../Components/Search/MidLoc";
import MidTy from "../Components/Search/MidTy";
import InputType from "../Components/Search/input";
import { useSelector } from "react-redux";


const Add: React.FC = () => {
    const navigate = useNavigate()
    const Price = useRef<HTMLInputElement>(null)
    const district = useRef<HTMLTextAreaElement>(null)
    const SubLoc = useRef<HTMLInputElement>(null)

    const { search } = useSelector((state: { AddProfile: { search: { type: string, location: string, item: string }, Result: [] } }) => state.AddProfile);
    const api = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { data }: AxiosResponse<Post3> = await axios.post(`${import.meta.env.VITE_SOME_KEY}/Sel/Pro`, {
            ProductSale: search.item,
            ProductCity: search.location,
            ProductPrice: Price.current?.value,
            ProductType: search.type,
            SubLoc: SubLoc.current?.value,
            ProductDiscretion: district.current?.value
        }, {
            withCredentials: true
        });
        
        if (data.success) {

            navigate(`/img/${data.id}`)
            alert(data.message)
        }
        else {
            alert(data.message)
            // navigate("/sign")
        }



    }

    useEffect(()=>{
       async function Lol() {
            const { data }: AxiosResponse<Post3> = await axios.post(`${import.meta.env.VITE_SOME_KEY}/Sel/verify`, {
              
            }, {
                withCredentials: true
            });
            if (!data.success) {
                
                alert("login plz first")
                navigate('/Login')
            }
            
        }
        Lol()
    },[])
    return (
      <div className="flex justify-normal gap-2">
        <div className=" ">
                <img src="https://www.creativefabrica.com/wp-content/uploads/2020/03/14/City-buildings-with-shadows-Graphics-3646333-1.jpg" alt="" />
        </div>
        <div>
            <form onSubmit={(e)=>api(e)}>
                    <div className="flex items-center gap-2">
                        <label className="text-2xl" htmlFor="">City</label>   <MidLoc /></div>
                      
                        <MidTy />
                    <InputType Rent="Rent"/>
                    <InputType Rent="Sale"/>
                    <input type="text" className="border-2 border-zinc-600 rounded-md p-2" placeholder="Sub Location eg:200 Feet " ref={SubLoc} />
                    <input type="number" className="border-2 border-zinc-600 rounded-md p-2" ref={Price} placeholder={`${search.type=="Rent"?"monthly Rent":"SALE ONE PRICE"}`}/>
                    <textarea name="" className="border-2 border-zinc-600 rounded-md p-2" ref={district} id=""></textarea>
                    <button className="border-2 bg-zinc-600 rounded-md p-2 w-full" type="submit" >Next</button>
            </form>

        </div>
      </div>
    );
};
export default Add;