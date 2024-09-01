
import { memo } from 'react';
import { Link } from 'react-router-dom';

const P2 = memo(({p}:{p:Ad}) => {
    return (
        <>
            <Link to={`/Product/${p._id}`} className=' flex w-full items-center    rounded-2xl   '>
                <div className=' w-3/12 h-full '>
                    <img src={p.ProductImg} className='w-full h-full' alt="" />
                </div>
                <div className='ps-10 sm:ps-20'>
                    <div>
                      {p.ProductTittle}
                    </div>
                    <div>
                        <span>  {p.ProductType+""}</span>
                        <span>{p.ProductType=="Rent"?"Per day "+p.ProductPrice+"₹":" "+p.ProductPrice+"₹"} </span>
                        <div>{p.ProductDiscretion}</div>
                        <div>{p.ProductName}</div>
                    </div>
                </div>
               
           
            </Link>
        </>
    );
});

export default P2;