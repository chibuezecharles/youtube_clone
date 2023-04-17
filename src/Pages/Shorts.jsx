import React, {useContext} from 'react';
import { DataContext } from '../Components/DataContex';
import Card from '../Components/Card';
import Button from '../Components/Button';


const Shorts = () => {

  const {buttonData, cardData, toggle, acctDropDown} = useContext(DataContext);

  return (

    <>

      <div className={`${acctDropDown? 'card_btn_stiff' : ''} shorts_container_padding`}>
        <h2 className='shorts_heading_common'>Shorts</h2>
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

    </>
  )
}

export default Shorts;