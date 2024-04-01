import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

interface RatingProps {
    rating: number;
    rank_list: string;
}

export const Rating: React.FC<RatingProps> = ({ rating, rank_list }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<span key={i} className="text-yellow-500 text-[25px]">&#9733;</span>);
        } else {
            stars.push(<span key={i} className="text-gray-300 text-[25px]">&#9733;</span>);
        }
    }
    return <div className="flex items-center gap-[5px]">
        <span>{stars}</span>
        <span className='text-hover flex items-center'><MdKeyboardArrowDown />{rank_list}</span>
        </div>;
};
