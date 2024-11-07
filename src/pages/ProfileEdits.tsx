import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddEdits } from "../store/Edit";
import EditsPart from "../Components/Edits/EditsPart";



const TextEdits = () => {
    const dispatch = useDispatch()

    useEffect(() => {

        const fu = async () => {
            const { data }: AxiosResponse<{ success: true, message: lol | string }> = await axios.get(`${import.meta.env.VITE_SOME_KEY}/user/profile`, { withCredentials: true })
            if (typeof data.message != "string") {

                dispatch(AddEdits(data.message))

            }
        }
        fu()
    }, [])



    return (
        <EditsPart />
    );
};

export default TextEdits;