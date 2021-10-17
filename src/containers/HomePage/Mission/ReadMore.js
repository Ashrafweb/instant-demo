import React, { useState } from 'react';

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className='text'>
            {isReadMore ? text.slice(0, 200) : text}
            <span onClick={toggleReadMore} className='read-or-hide'>
                {text.length > 200 && `${isReadMore ? '...read more' : ' show less'}`}
            </span>
        </p>
    );
};

export default ReadMore;