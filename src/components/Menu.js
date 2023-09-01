import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import '../css/App.css';

const Menu = () => {
  const currentFile = useSelector((state) => state.file.currentFile);
    return (
      <div class="menu">
      <ul>
        <li><a> <Link to="/About" >About</Link></a></li>
        <li><a> <Link to="" >Home</Link></a></li>
        <li><a> <Link to="/Download" >Download</Link></a></li>
       
        {currentFile==null ? <li><a> <Link to="/Settings" >Settings</Link></a></li> : <div></div>}
        
      </ul>
      </div>
    ) 
};

export default Menu;