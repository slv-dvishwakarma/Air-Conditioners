import React from 'react';

interface RatingProps {
    rating: number;
    rank_list: number;
}

export const Rating: React.FC<RatingProps> = ({ rating, rank_list }) => {
    const stars = [];
    // Loop through each star
    for (let i = 1; i <= 5; i++) {
        // Check if current star should be full, half, or empty
        if (i <= rating) {
            stars.push(<span key={i} className="text-accentColor text-[25px]">&#9733;</span>);
        } else if (i - rating <= 0.5) {
            stars.push(<span key={i} className="text-accentColor text-[25px] before:content-['\2605'] before:absolute before:overflow-hidden before:w-6/12 before:text-transparent before:z-[1]">&#9734;</span>);
        } else {
            stars.push(<span key={i} className="text-gray-300 text-[25px]">&#9733;</span>);
        }
    }
    return (
        <div className="flex items-center gap-[5px]">
            <span className='relative'>{stars}</span>
            <span className='text-accentColor flex items-center'>{rank_list}</span>
        </div>
    );
};
