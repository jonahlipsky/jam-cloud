import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import EllipsisDropdown from './ellipsis_user_dropdown';

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
            <NavLink exact to="/stream" activeClassName="nav-bar-selected" className="left-btns nav-buttons">Stream</NavLink>
            <button className="left-btns nav-buttons">Library</button>
            <div className="search-bar-container">
              <input type="text" className="search-bar-field" placeholder='Search'/>
              <i className="fas fa-search"></i>
            </div>

            <NavLink exact to='/upload' className="upload nav-buttons" activeClassName="nav-bar-selected">Upload</NavLink>
            <div className="profile-dropdown">
              <p>{this.props.user.username}</p>
              <i className="fa fa-angle-down"></i>
            </div>
            <EllipsisDropdown />
          </div>
        </div>
      </>
    )
  }
}

export default NavBar;