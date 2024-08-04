
import React from 'react';

interface CardProps {
  image: string;
  date: string;
  title: string;
  author: string;
}

const Card: React.FC<CardProps> = ({ image, date, title, author }) => {
  return (
    <div className="overflow-hidden shadow-lg flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
      <div className='relative w-full h-40'>
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      
      <div className="p-2">
        <div className="text-gray-500 text-sm ">{date}</div>
        <h3 className="text-lg font-semibold text-white ">{title}</h3>
        <p className="text-gray-700">{author}</p>
      </div>
    </div>
  );
};

export default Card;
