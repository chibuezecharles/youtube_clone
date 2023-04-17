import React from 'react';
import './AccountDropDown.css'
import {RxAvatar} from 'react-icons/rx';
import {MdSwitchAccount, MdLogin, MdOutlinePrivacyTip, MdOutlinePolicy, MdOutlineFeedback} from 'react-icons/md';
import {HiOutlineChevronRight} from 'react-icons/hi';
import {BiDollarCircle, BiHelpCircle} from 'react-icons/bi';
import {WiMoonWaxingCrescent4} from 'react-icons/wi';
import {FaRegKeyboard} from 'react-icons/fa';
import {CiGlobe} from 'react-icons/ci';
import {TbLanguage, TbSettings} from 'react-icons/tb';
import { Link } from 'react-router-dom';

const AccountDropdown = () => {
  return (
    <div className='acct_dropdown_container'>
        <div className='dropdown_section1'>
            <div className="avatar">
              <RxAvatar className='avatar_icon' />
            </div>
            <div className='avatar_txt'>
                <p className="user_name">Charles Chibueze Chuma</p>
                <p className="user_email">charleschibuezec24@gmail.com</p>
                <Link to='#' className='manage_link'> <p className="Acct_manage">Manage Your Google Account</p></Link>
            </div>
        </div>
        {/* <div className='dropdown_rule'></div> */}

        <div className="dropdown_stage2">
          <div className="dropdown_section2 dropdown_section_common ">
            <div className='createChannel_container stage2_common1'>
                <MdSwitchAccount className='dropdown_icon_common' />
                <p>Create a channel</p>
            </div>

            <div className='youtstudio_container stage2_common1'>
                <MdSwitchAccount  className='dropdown_icon_common'/>
                <p>YouTube Studio</p>
            </div>

            <div className='switchAcct_container stage2_commonbig1'>
                <div className='switchAcct stage2_commonbig2'>
                  <MdSwitchAccount className='dropdown_icon_common' />
                  <p>Switch Account</p>
                </div>
                <HiOutlineChevronRight />
            </div>

            <div className='signout_container stage2_common1'>
                <MdLogin className='dropdown_icon_common' />
                <p>YouTube Studio</p>
            </div>
          </div>
          <div className='dropdown_rule'></div>

          <div className="dropdown_section3 dropdown_section_common ">
            <div className='purchase_container stage2_common1'>
              <BiDollarCircle className='dropdown_icon_common' />
              <p>Purchases and memberships</p>
            </div>

            <div className='data_container stage2_common1'>
              <MdOutlinePrivacyTip className='dropdown_icon_common' />
              <p>Your data in YouTube</p>
            </div>
          </div>
          <div className='dropdown_rule'></div>

          <div className="dropdown_section4 dropdown_section_common ">
            <div className='appearance_container stage2_commonbig1'>
              <div className='stage2_commonbig2'>
                <WiMoonWaxingCrescent4 className='dropdown_icon_common' />
                <p>Appearance:Device theme</p>
              </div>
              <HiOutlineChevronRight />
            </div>

            <div className='language_container stage2_commonbig1'>
              <div className='stage2_commonbig2'>
                <TbLanguage className='dropdown_icon_common' />
                <p>Language:English</p>
              </div>
              <HiOutlineChevronRight />
            </div>

            <div className='restrict_container stage2_commonbig1'>
              <div className='stage2_commonbig2'>
                <MdOutlinePolicy className='dropdown_icon_common' />
                <p>Restricted Mode:off</p>
              </div>
              <HiOutlineChevronRight />
            </div>

            <div className='location_container stage2_commonbig1'>
              <div className='stage2_commonbig2'>
                <CiGlobe className='dropdown_icon_common' />
                <p>Location:Nigeria</p>
              </div>
              <HiOutlineChevronRight />
            </div>

            <div className='shortcut_container stage2_common1'>
              <FaRegKeyboard className='dropdown_icon_common' />
              <p>Keyboard Shortcuts</p>
            </div>
          </div>
          <div className='dropdown_rule'></div>

          <div className="dropdown_section5 dropdown_section_common">
            <div className='settings_container stage2_common1'>
              <TbSettings className='dropdown_icon_common' />
              <p>Settings</p>
            </div>
          </div>
          <div className='dropdown_rule'></div>

          <div className="dropdown_section6 dropdown_section_common">
            <div className='help_container stage2_common1'>
              <BiHelpCircle className='dropdown_icon_common'/>
              <p>Help</p>
            </div>

            <div className='help_container stage2_common1'>
              <MdOutlineFeedback className='dropdown_icon_common' />
              <p>Send Feedback</p>
            </div>

          </div>
        </div>
      
    </div>
  )
}

export default AccountDropdown;
