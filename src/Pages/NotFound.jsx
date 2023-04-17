import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='notfound_container'>
     <h3>404 Error, Page not found</h3>
     <Link to='/'><p>Click here to go back to home page</p></Link>
    </div>
  )
}

export default NotFound;
