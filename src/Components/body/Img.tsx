import  { memo, useEffect, useState } from 'react';

const Img = memo(({ img }: { img: [] }) => {
    const [activeIndex, setActiveIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((prevIndex) => {
                if (prevIndex === img.length - 1) {
                    return 0;
                }
                return prevIndex + 1;
            });
        }, 3000); // Change the slide every 3 seconds

        return () => clearInterval(intervalId);
    }, [img]);

    return (
        <div className="slider">




            {img.map((item, index) => (
                <div
                    key={index}
                    className={` absolute top-0 slide ${activeIndex === index ? 'active' : 'inactive'} ${activeIndex > index ? 'left' : ''
                        }`}
                >
                    <img src={item} alt="Slider  Image" />
                </div>
            ))}
        </div>
    );
})
export default Img;