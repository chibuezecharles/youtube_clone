import React from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <div className='main_navbar_container'>
        <Navbar />
      </div>

      <div className='main_container'>
        <Sidebar /> 

        <Outlet />
      </div>

    </>
    
  )
}

export default Dashboard;