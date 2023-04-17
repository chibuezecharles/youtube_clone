import React from 'react';
import './Sidebar.css';
import {AiFillHome} from 'react-icons/ai';
import {BsFillCollectionPlayFill, BsFlagFill, BsPlayCircleFill} from 'react-icons/bs';
import {TiFlash} from 'react-icons/ti';
import {MdVideoLibrary, MdSettings} from 'react-icons/md';
import {GrHistory, GrYoutube} from 'react-icons/gr';
import {ImHistory} from 'react-icons/im';
import {BiLike, BiTimeFive, BiHelpCircle} from 'react-icons/bi';
import {IoIosAddCircleOutline, IoMdMusicalNote} from 'react-icons/io';
import {GiFlamer, GiTrophy} from 'react-icons/gi';
import {SiYoutubegaming} from 'react-icons/si';
import {ImNewspaper} from 'react-icons/im';
import {RiFeedbackFill} from 'react-icons/ri';
import { useContext } from 'react';
import { DataContext } from './DataContex';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  const {toggle, acctDropDown} = useContext(DataContext);

  return (
    <>
      <div className={toggle? 'main_sidebar_container' : "main_sidebar_container_column"}>
        <div className={ toggle? 'sidebar_container ': 'sidebar_container_column'}>
          <div className={acctDropDown? 'sidebar_stiff' : ''}>
          <div className="section1">
         
            <div className='' > 
            <NavLink to='/' className={ toggle? "home_container sidebar_common  sidebar_tooltip sidebar_linkstyle" : "home_container sidebar_column_common sidebar_tooltip sidebar_linkstyle"}>
              <AiFillHome className='sidebar_icon_common' />
                <p>Home</p>
              <span className={toggle? 'sidebar_tooltip_text' : 'sidebar_tooltip_text_column' }>Home</span>
              </NavLink>
            </div>

            <div className=''>
            <NavLink to='/dashboard/shorts' className={ toggle? "home_container sidebar_common  sidebar_tooltip sidebar_linkstyle" : "home_container sidebar_column_common  sidebar_tooltip sidebar_linkstyle"}>
              <TiFlash  className='sidebar_icon_common'/>
              <p>Shorts</p>
              <span className={toggle? 'sidebar_tooltip_text' : 'sidebar_tooltip_text_column' }>Shorts</span>
            </NavLink>
            </div>
           
            <div className=''>
            <NavLink to='/dashboard/subscriptions' className={ toggle? "home_container sidebar_common  sidebar_tooltip sidebar_linkstyle" : "home_container sidebar_column_common  sidebar_tooltip sidebar_linkstyle"}>
              <BsFillCollectionPlayFill className='sidebar_icon_common' />
              <p>Subcriptions</p>
              <span className={toggle? 'sidebar_tooltip_text sbtlp_widthbig' :'sidebar_tooltip_text_column' }>Subcriptions</span>
            </NavLink>
            </div>
          </div>
          <div className={toggle? 'hr_rule' : "show_none"}></div>

          <div className="section2">
            <div className='' >
            <NavLink to='/dashboard/library' className={ toggle? "home_container sidebar_common  sidebar_tooltip sidebar_linkstyle" : "home_container sidebar_column_common  sidebar_tooltip sidebar_linkstyle"}>
              <MdVideoLibrary className='sidebar_icon_common' />
              <p>Library</p>
              <span className={toggle? 'sidebar_tooltip_text' : 'sidebar_tooltip_text_column' }>Library</span>
              </NavLink>
            </div>

            <div className={toggle? "shorts_container sidebar_common sidebar_tooltip" : "show_none"}>
              <ImHistory  className='sidebar_icon_common'/>
              <p>History</p>
              <span className='sidebar_tooltip_text'>History</span>
            </div>

            <div className={toggle? "subcription sidebar_common sidebar_tooltip" : "show_none" }>
              <BiTimeFive className='sidebar_icon_common' />
              <p>Watch later</p>
              <span className='sidebar_tooltip_text sbtlp_widthbig2'>Watch later</span>
            </div>

            <div className={toggle? "subcription sidebar_common sidebar_tooltip" : "show_none"}>
              <BiLike className='sidebar_icon_common' />
              <p>Liked videos</p>
              <span className='sidebar_tooltip_text sbtlp_widthbig3'>Liked videos</span>
            </div>
          </div>
          <div className={toggle? 'hr_rule' : "show_none"}></div>

          <div className={toggle? "section3" : "show_none"}>
            <div>Subcriptions</div>

            <div className="shorts_container sidebar_common sidebar_tooltip">
              <GrHistory  className='sidebar_icon_common'/>
              <p>The Net Ninja</p>
              <span className='sidebar_tooltip_text sbtlp_widthbig3'>The Net Ninja</span>
            </div>

            <div className="subcription sidebar_common sidebar_tooltip">
              <IoIosAddCircleOutline className='sidebar_icon_common' />
              <p>Browse Channel</p>
              <span className='sidebar_tooltip_text sbtlp_widthbig4'>Browse Channel</span>
            </div>

          </div>
          <div className={toggle? 'hr_rule' : "show_none"}></div>

          <div className={toggle? "section4" : "show_none"}>
            <div>Explore</div>
            <div className="home_container sidebar_common sidebar_tooltip" >
              <GiFlamer className='sidebar_icon_common' />
              <p>Trending</p>
              <span className='sidebar_tooltip_text sbtlp_widthbig'>Trending</span>
            </div>

            <div className="shorts_container sidebar_common sidebar_tooltip">
              <IoMdMusicalNote  className='sidebar_icon_common'/>
              <p>Music</p>
              <span className='sidebar_tooltip_text '>Music</span>
            </div>

            <div className="subcription sidebar_common sidebar_tooltip">
              <SiYoutubegaming className='sidebar_icon_common' />
              <p>Gaming</p>
              <span className='sidebar_tooltip_text '>Gaming</span>
            </div>

            <div className="subcription sidebar_common sidebar_tooltip">
              <ImNewspaper className='sidebar_icon_common' />
              <p>News</p>
              <span className='sidebar_tooltip_text '>News</span>
            </div>

            <div className="subcription sidebar_common sidebar_tooltip">
              <GiTrophy className='sidebar_icon_common' />
              <p>Sports</p>
              <span className='sidebar_tooltip_text '>Sports</span>
            </div>
          </div>
          <div className={toggle? 'hr_rule' : "show_none"}></div>

          <div className={toggle? "section5" : "show_none"}>
            <div>More from YouTube</div>
            <div className="home_container sidebar_common sidebar_tooltip" >
              <GrYoutube className='sidebar_icon_common red_color' />
              <p>YouTube Premium</p>
              <span className='sidebar_tooltip_text sbtlp_widthbig5 '>YouTube Premium</span>
            </div>

            <div className="shorts_container sidebar_common sidebar_tooltip">
              <BsPlayCircleFill className='sidebar_icon_common red_color'/>
              <p>YouTube Music</p>
              <span className='sidebar_tooltip_text sbtlp_widthbig5 '>YouTube Music</span>
            </div>

            <div className="subcription sidebar_common sidebar_tooltip">
              <GrYoutube className='sidebar_icon_common red_color' />
              <p>YouTube Kids</p>
              <span className='sidebar_tooltip_text sbtlp_widthbig5 '>YouTube Music</span>
            </div>

          </div>
          <div className={toggle? 'hr_rule' : "show_none"}></div>

          <div className={toggle? "section6" : "show_none"}>
            <div>More from YouTube</div>
            <div className="home_container sidebar_common sidebar_tooltip" >
              <MdSettings className='sidebar_icon_common' />
              <p>Settings</p>
              <span className='sidebar_tooltip_text sbtlp_widthbig '>Settings</span>
            </div>

            <div className="shorts_container sidebar_common sidebar_tooltip">
              <BsFlagFill  className='sidebar_icon_common'/>
              <p>Report history</p>
              <span className='sidebar_tooltip_text sbtlp_widthbig4 '>Report history</span>
            </div>


            <div className="subcription sidebar_common sidebar_tooltip">
              <BiHelpCircle className='sidebar_icon_common' />
              <p>Help</p>
              <span className='sidebar_tooltip_text sbtlp_widthbig '>Help</span>
            </div>

            <div className="subcription sidebar_common sidebar_tooltip">
              <RiFeedbackFill className='sidebar_icon_common' />
              <p>Send feedback</p>
              <span className='sidebar_tooltip_text sbtlp_widthbig4 '>Send feedback</span>
            </div>

          </div>
          <div className={toggle? 'hr_rule' : "show_none"}></div>


          <div className={toggle? "section7_container" : "show_none"}>
            <div className='section7'>
              <p>About</p>
              <p>Press</p>
              <p>Copyright</p>
            </div>

            <div className='section7'>
              <p>Contact us</p>
              <p>Creators</p>
            </div>

            <div className='section7'>
              <p>Advertise</p>
              <p>Developer</p>
            </div>

            <div className='section7 terms_privacy'>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Policy & Safety</p>
            </div>

            <div className='section7' >
              <p>How YouTube works</p>
            </div>

            <div className='section7'>
              <p>Test new features</p>
            </div>

            <div className='section7 at_google'>
              <p>@ 2023 Goggle LLC</p>
            </div>
          </div>

        </div>
        </div>
      </div>


      <div className="mobile_sidebar_container ">
        <NavLink to='/' className= "home_container mobile_sidebar_common sidebar_tooltip sidebar_linkstyle" >
          <AiFillHome className='sidebar_icon_common' />
          <p>Home</p>
          <span className= 'sidebar_tooltip_text_column' >Home</span>
        </NavLink>

        <NavLink to='/dashboard/shorts' className= "shorts_container mobile_sidebar_common  sidebar_tooltip sidebar_linkstyle">
          <TiFlash  className='sidebar_icon_common'/>
          <p>Shorts</p>
          <span className='sidebar_tooltip_text_column'>Shorts</span>
        </NavLink>

        <NavLink to='/dashboard/subscriptions' className= "subcription mobile_sidebar_common sidebar_tooltip sidebar_linkstyle">
          <BsFillCollectionPlayFill className='sidebar_icon_common' />
          <p>Subcriptions</p>
          <span className='sidebar_tooltip_text_column' >Subcriptions</span>
        </NavLink>

        <NavLink to='/dashboard/library'  className= "home_container mobile_sidebar_common sidebar_tooltip sidebar_linkstyle" >
          <MdVideoLibrary className='sidebar_icon_common' />
          <p>Library</p>
          <span className='sidebar_tooltip_text_column'>Library</span>
        </NavLink>
      </div>
    </>
  )
}

export default Sidebar;