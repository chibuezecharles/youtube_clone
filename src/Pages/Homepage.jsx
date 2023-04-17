import React, { useContext } from 'react';
import '../App.css';
import './Homepage.css';
import Button from '../Components/Button';
import Card from '../Components/Card';
import {DataContext} from '../Components/DataContex';


const Homepage = () => {

const {buttonData, cardData, toggle, acctDropDown} = useContext(DataContext);

 
  return (
    <>
    
      <div className={toggle? 'main2' : 'main2_adjust' }>
        <div className={`${acctDropDown? 'card_btn_stiff' : ''}`}>
          <div className={toggle? 'button_main_container' : 'button_main_container_adjust'}>

            {buttonData.map(({btn_text, btn_toolip_text}, index) =>(
              <Button btn_text={btn_text}  btn_toolip_text= {btn_toolip_text} key={index} />
            ))}

          </div>

          <div className={toggle? 'card_main_container' : 'card_main_container_adjust'}>

            {cardData.map(({card_photo, card_heading, card_description, card_views, card_time, card_avartar }, index) => (
                <Card card_photo={card_photo} card_heading={card_heading} card_description={card_description} card_views={card_views} card_time={card_time} card_avartar={card_avartar} key={index} />
            ))}
            
             
          </div>
        </div>
      </div>

    
    </>
  )
}

export default Homepage;