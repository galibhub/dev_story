import React from 'react';

const Title = ({children}) => {
    return (
        <div className='bg-gradient-to-r from-sky-50 to-sky-200 p-3 rounded text-black'>
            <h2 className='text-5xl font-bold'>{children}</h2>
        </div>
    );
};

export default Title;