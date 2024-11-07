import { memo } from "react";
import { useDispatch } from "react-redux";
import { type as newType } from "../../store/Edit";
import { useSelector } from "react-redux";

const InputType = memo(({ Rent }: { Rent: string }) => {
    const dispatch = useDispatch()
    const { type } = useSelector((state: { AddProfile: { search: { type: string, range: Number, location: string, item: string }, Result: [] } }) => state.AddProfile.search);
    return (
        <div>
            <input
                defaultChecked={Rent == type}
                type="radio"
                onClick={() => {
                    dispatch(newType(Rent))
                }}
                name='type'
            />
            <label htmlFor=""> {Rent}</label>
        </div>
    );
});
export default InputType;