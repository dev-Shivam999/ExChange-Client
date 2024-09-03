import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Left from "../Components/Add/Left";
import Form from "../Components/Add/Form";


const Add: React.FC = () => {

    const navigate = useNavigate()
  
    useEffect(() => {
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

    }, [])

    

   
    return (
        <div className="flex justify-normal gap-2 h-[85vh]">
          <Left/>
            <div className="w-1/2 px-2">
               <Form/>

            </div>
        </div>
    );
};
export default Add;