import React, { createContext, useState } from 'react';
import pics1 from  '../Images/pics1.jpg';
import pics2 from '../Images/pics2.jpg';
import pics3 from '../Images/pics3.jpg';


export const DataContext = createContext();

const DataContex = (props) => {

    const [toggle, setToggle] = useState(true);
    
    const handleToggle = () =>{

      setToggle(!toggle);
      
    };

    const [acctDropDown, setAcctDropDown] = useState(false);
   

    const buttonData = [
        {btn_text: "All", btn_toolip_text:"All" },
        {btn_text: "Gaming", btn_toolip_text:"Gaming" },
        {btn_text: "Music", btn_toolip_text:"Music" },
        {btn_text: "Finals", btn_toolip_text:"Finals" },
        {btn_text: "News", btn_toolip_text:"News" },
        {btn_text: "Comedy", btn_toolip_text:"Comedy" },
        {btn_text: "Scene", btn_toolip_text:"Scene" },
        {btn_text: "Conversation", btn_toolip_text:"Conversation" },
        {btn_text: "Cars", btn_toolip_text:"Cars" },
        {btn_text: "Fashion", btn_toolip_text:"Fashion" },
        {btn_text: "Editing", btn_toolip_text:"Editing" },
        {btn_text: "Sales", btn_toolip_text:"Sales" },
        {btn_text: "Sports", btn_toolip_text:"Sports" },
        {btn_text: "HTML", btn_toolip_text:"HTML" },
        {btn_text: "CSS", btn_toolip_text:"CSS" },
        {btn_text: "JavaScript", btn_toolip_text:"JavaScript" }
      ];


      const cardData = [
        {card_photo: pics1, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k", card_time:"2 days ago", card_avartar:pics1 },
        {card_photo: pics2, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k", card_time:"2 days ago", card_avartar:pics2 },
        {card_photo: pics3, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k", card_time:"2 days ago", card_avartar:pics3 },
        {card_photo: pics1, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k", card_time:"2 days ago", card_avartar:pics1 },
        {card_photo: pics2, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k", card_time:"2 days ago", card_avartar:pics2 },
        {card_photo: pics3, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k", card_time:"2 days ago", card_avartar:pics3 },
        {card_photo: pics1, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k", card_time:"2 days ago", card_avartar:pics1 },
        {card_photo: pics2, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k", card_time:"2 days ago", card_avartar:pics2 },
        {card_photo: pics3, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k", card_time:"2 days ago", card_avartar:pics3 },
        {card_photo: pics1, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k", card_time:"2 days ago", card_avartar:pics1 },
        {card_photo: pics2, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k" , card_time:"2 days ago", card_avartar:pics2},
        {card_photo: pics3, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k", card_time:"2 days ago", card_avartar:pics3 },
        {card_photo: pics1, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k", card_time:"2 days ago", card_avartar:pics1 },
        {card_photo: pics2, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k", card_time:"2 days ago", card_avartar:pics2 },
        {card_photo: pics3, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k", card_time:"2 days ago", card_avartar:pics3 },
        {card_photo: pics1, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k", card_time:"2 days ago", card_avartar:pics1 },
        {card_photo: pics2, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k", card_time:"2 days ago", card_avartar:pics2 },
        {card_photo: pics3, card_heading:"Intorduction to cyber security", card_description:"Intorduction to HTML ", card_views:"337k", card_time:"2 days ago", card_avartar:pics3 }
      ]


  return (
    <DataContext.Provider  value ={{buttonData, cardData, toggle, setToggle, handleToggle, acctDropDown, setAcctDropDown}}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataContex;