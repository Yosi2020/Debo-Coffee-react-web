import React from 'react';
import "./Header.css";
import Logo from "./image/Eyu_crop.png"; 
import SearchIcon from "@material-ui/icons/Search";
import MobileNavigation from './containers/MobileNavigation';
import Navigation from './containers/Navigation';
import {Link} from "react-router-dom"

function Headers() {
    return (
        <div className='header'>
           <Link to='/'>
               <img className='header_logo'
                src = {Logo} alt=''
            />
           </Link>
            
            <div className = "header_search">
                 <input className ='header_searchInput'
                 type = "text" />
                 <SearchIcon className ="header_searchIcon"/>
            </div>

            <div className='header_nav'>
               <div className='header_container'>
                   <MobileNavigation/>
                   <Navigation/>
               </div>
            </div>
        </div>
    )
}

export default Headers
