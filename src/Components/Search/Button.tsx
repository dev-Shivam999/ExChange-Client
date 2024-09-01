import { memo } from "react";
import { useDispatch } from "react-redux";
import { item } from "../../store/Edit";

const Button =memo(({Text,set,ver}:{Text:string,set:(e:string)=>void,ver:string}) => {
    const dispatch=useDispatch()
    return (
        <button className={` border-2 border-white m-1 my-2 p-3 rounded-md ${ver == Text ? "bg-zinc-400" :"bg-zinc-600"}`} onClick={() => { set(Text); dispatch(item(Text)) }}>{Text}</button>
    );
});

export default Button;