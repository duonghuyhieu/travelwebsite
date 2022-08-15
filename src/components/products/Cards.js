import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Explore the majestic mountains of the Northwest region'
              label='Adventure'
              path='/products/Northwest'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Traveling through the Central River region'
              label='Experience'
              path='/products/CentralRiver'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Experience the dreamy land of Hue'
              label='Experience'
              path='/products/Hue'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Discover the mysterious Phong Nha cave'
              label='Mystery'
              path='/products/PhongNha'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Watch the sunset at Sunset Sanato Beach'
              label='Enjoy'
              path='/products/PhuQuoc'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;