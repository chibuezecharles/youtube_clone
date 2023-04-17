 import React from 'react';
import './Card.css';
import {FiMoreVertical} from 'react-icons/fi';


const Card = ({card_photo, card_heading, card_description, card_views, card_time, card_avartar }) => {

  
  return (
    <div className='card_container'>
      <div className="img_container">
        <img src={card_photo} alt="" />
      </div>
      <div className='heading_container'>
        <img src={card_avartar} alt="" />
        <h3 className='card_word_max'>{card_heading} </h3>
        <FiMoreVertical  className='card_more'/>
      </div>
      <div className='description'>
        <p className='card_word_max'>{card_description}</p>
      </div>
      <div className="views_time">
        <p>{card_views}.</p>
        <p>{card_time}</p>
      </div>
    </div>
  )
}

export default Card;