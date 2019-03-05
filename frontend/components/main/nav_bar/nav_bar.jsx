import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <div className="right-btns">
            
              <NavLink exact to='/upload' id="upload-nav-button" className="upload nav-buttons" activeClassName="nav-bar-selected">Upload</NavLink>
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