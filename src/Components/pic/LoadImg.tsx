import { LazyLoadImage } from "react-lazy-load-image-component";

import 'react-lazy-load-image-component/src/effects/blur.css';

const LoadImg = ({val,className}:{val:string,className:string}) => {
    return (
        <LazyLoadImage
            alt={val}
            effect="blur"
            className={className}
            wrapperProps={{

                style: { transitionDelay: "1s" ,display:"block",height:"100%",width:"100%" },
            }}
            src={val} />
    );
};

export default LoadImg;