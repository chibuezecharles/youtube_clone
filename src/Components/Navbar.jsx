import React, {useContext, useEffect, useRef, useState } from 'react';
import './Navbar.css';
import {RxHamburgerMenu, RxAvatar} from 'react-icons/rx';
import {FaYoutube} from 'react-icons/fa';
import {CgSearch} from 'react-icons/cg';
import { BiVideoPlus, BiArrowBack} from 'react-icons/bi';
import {MdOutlineNotifications} from 'react-icons/md';
import {HiMicrophone} from 'react-icons/hi';
import  {DataContext} from '../Components/DataContex';
import AccountDropdown from './AccountDropdown';

const Navbar = () => {

  const {acctDropDown, setAcctDropDown, handleToggle} = useContext(DataContext);

// for the account avartar:
  const handleAcctDropDown = () =>{
    setAcctDropDown(!acctDropDown);
  }

  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
  const mobileNav2 = useRef(null);
  const mobileNav1 = useRef(null);

  const handleClickOutside = (event) => { 

    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.classList.contains("avatar_icon")
    ) {
      setAcctDropDown(false);
    }
  };

  useEffect(() => {
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);


  // for the navbar search input:

  const [navsearch, setNavsearch] = useState(true);
  
  const handleSearch = () => {
    setNavsearch(false);  
  }
   
  useEffect(() => {
    searchRef.current.addEventListener('click', () => setNavsearch(true)); 
  }, [])


  
   // mobile nav1 and nav2:
  
  const handleMobileNav1 = () => {
    mobileNav1.current.style.display = 'none';
    mobileNav2.current.style.display = 'flex';
  }


  const handleMobileNav2 = () => {
    mobileNav2.current.style.display = 'none';
    mobileNav1.current.style.display = 'flex';
  }

 
  


  return (
    <>
    <div className={acctDropDown ? 'navbar_stiff':''} ref={searchRef}>
    <div className='navbar_container ' >
      <div className='logo_container'>
        <div className='hamburger_container ' onClick={handleToggle}>
          <RxHamburgerMenu className='hamburger' />
        </div>
        <div className="youtube_container">
          <FaYoutube className='youtube_icon' />
          <h3>Chibueze</h3>
          {/* <p>YouTube<sup className='sup'>NG</sup></p> */}
        </div>
      </div>
      <div className="search_container">
        <div className={navsearch? "search_bar": "search_bar1"}>
          <CgSearch className={navsearch? 'search_icon1': 'search_icon1 show_search' } />
          <input type="search" name="search" id="search" className='searchInput' placeholder='Search' onClick={handleSearch }/>
          <div className='search_icon_container'>
            <CgSearch className='search_icon' />
          </div>
        </div>
        <div className='microphone_container tooltip'>
          <HiMicrophone className='microphone_icon'/>
          <span className='tooltip_text tlp_width'>Search with your voice</span>
        </div>
      </div>
      <div className='create_notify_container'>
       <div className='add_video_icon_container tooltip'>
          <BiVideoPlus className='add_video_icon '/>
          <span className='tooltip_text'>Create</span>
       </div>
        <div className='notify_icon_container tooltip'>
          <MdOutlineNotifications className='notify_icon' />
          <span className='tooltip_text'>Notifications</span>
        </div>
        <div className='avatar_icon_container' onClick={handleAcctDropDown} >
          <RxAvatar className='avatar_icon'  />
        </div>
      </div>
      </div>
    </div>

    {acctDropDown && (<div ref={dropdownRef}>
        <AccountDropdown />
        </div>
        )
        
    }

    <div className='mobile_container'>
        <div className='mobile_nav_container' ref={mobileNav1}>
          <div className="mobile_youtube_container">
            <FaYoutube className='mobile_youtube_icon' />
            <h3>Chibueze</h3>
            {/* <p>YouTube<sup className='sup'>NG</sup></p> */}
          </div>

          <div className='search_avartar_container'>
            <CgSearch className='mobile_search_icon' onClick={handleMobileNav1}/>
            <div className='mobile_avatar_icon_container' onClick={handleAcctDropDown} >
              <RxAvatar className='mobile_avatar_icon' onClick={handleAcctDropDown}/>
            </div>
          </div>
        </div>

        <div className='mobile_nav_container2' ref={mobileNav2}>
          <div className='mobile_nav2_backarrow_container'>
            <BiArrowBack  className='mobile_nav2_backarrow_icon' onClick={handleMobileNav2}/>
          </div>
          <div className='mobile_nav2_input_search_container'>
            <input type='search' placeholder='Search Youtube' />
            <CgSearch className='mobile_nav2_search_icon' />
          </div>
          <div className='mobile_nav2_microphone_container'>
            <HiMicrophone className='mobile_nav2_microphone_icon'/>
          </div>

        </div>

    </div>

    
  </>
  )
}

export default Navbar;