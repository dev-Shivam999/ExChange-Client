import React, { memo } from 'react';
import { FaPerson } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const LS:React.FC = memo(() => {
    return (
        <Link to={'/Profile'}>
        < FaPerson/>
        </Link>
    );
});

export default LS;