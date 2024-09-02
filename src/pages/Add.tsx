import axios, { AxiosResponse } from "axios";
import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
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
        <div className="flex justify-normal gap-2">
          <Left/>
            <div>
               <Form/>

            </div>
        </div>
    );
};
export default Add;