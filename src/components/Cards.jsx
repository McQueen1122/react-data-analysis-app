// CardsContainer.js
import React from 'react';
import Card from './sub-components/Card';
import single from '../assets/single.png';
import double from '../assets/double.png';
import triple from '../assets/triple.png';

const CardsContainer = () => {
  const cards = [
    {
      image: single,
      title: 'Single User',
      price: '$149',
      features: ['500GB Storage', '1 Granted User', 'Send up to 2GB'],
      highlight: false,
    },
    {
      image: double,
      title: 'Double User',
      price: '$499',
      features: ['2TB Storage', '2 Granted Users', 'Send up to 5GB'],
      highlight: true,
    },
    {
      image: triple,
      title: 'Triple User',
      price: '$999',
      features: ['5TB Storage', '3 Granted Users', 'Send up to 10GB'],
      highlight: false,
    },
  ];

  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
