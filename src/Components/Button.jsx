import React from 'react';
import './Button.css';

const Button = ({btn_text, btn_toolip_text}) => {


  return (
      <div className="button_container  button_tooltip">
        <p>{btn_text} </p>
        <span className='button_tooltip_text'>{btn_toolip_text}</span>
      </div>
 
  )
}

export default Button;