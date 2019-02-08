import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import EllipsisDropdown from './ellipsis_user_dropdown';
import ProfileUserDropDown from './profile_user_dropdown';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
   
    return(
      <>
        <div className="nav-background">
          <div className='nav-bar-main-frame'>
            <button className="logo">
              <i className="fas fa-cloud"></i>
            </button>
            <NavLink exact to="/discover" activeClassName="nav-bar-selected" className="left-btns nav-buttons">Home</NavLink>
            <div className="search-bar-container">
              <input type="text" className="search-bar-field" placeholder='Search'/>
              <i className="fas fa-search"></i>
            </div>
            <div className="right-btns">
            
              <NavLink exact to='/upload' className="upload nav-buttons" activeClassName="nav-bar-selected">Upload</NavLink>
              <ProfileUserDropDown />
              <EllipsisDropdown />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default NavBar;