import { memo } from "react";


const Left = memo(() => {
    return (
        <div className="w-full sm:w-[45%] h-full ">
            <img src="https://www.creativefabrica.com/wp-content/uploads/2020/03/14/City-buildings-with-shadows-Graphics-3646333-1.jpg" alt="" className="h-full" />
        </div>
    );
});

export default Left;