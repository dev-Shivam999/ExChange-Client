import React, { useEffect, useState } from 'react';
import P2 from '../Components/body/P2';
import {  useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import axios from 'axios';

const Result: React.FC = () => {
    const [val, setVal] = useState<Ad[]>([])

    const { search } = useSelector((state: { AddProfile: { search: { type: string, range: Number, location: string }, Result: [] } }) => state.AddProfile);
    const { id } = useParams()



   

    useEffect(() => {
        
        const searchApi = async (searchTerm: string) => {
            try {
                const response = await axios.put(`http://localhost:3000/user/Search?q=${searchTerm}`, { search });
                setVal(response.data.message);
            
            } catch (error) {
                console.error(error);
            }
        };
        searchApi(id!);
        console.log(val);
        
      

    }, [])

    return (
        <div className='bg-white  grid grid-cols-1 py-4 gap-4'>

            {
                val && val.length > 0 ? val.map(p => <P2 key={p._id} p={p} />) : <div className='text-black'>plz try again product not found</div>
            }
        </div>
    );
};

export default Result;