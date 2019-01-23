import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
        <div className="nav_background">
          <div className='nav_bar_main_frame'>
            <button className="logo">
              <i className="fas fa-cloud"></i>
              <i className="fas fa-music"></i>
            </button>
            <button className="home left-btns">Home</button>
            <button className="steam left-btns">Stream</button>
            <button className="collection left-btns">Collection</button>
            <div className="search-bar-container">
              <input type="text" className="search-bar-field" placeholder='Search'/>
              <i className="fas fa-search"></i>
            </div>
            <button className="upload">Upload</button>
            <div className="profile-dropdown">
              <p>{this.props.user.username}</p>
              <i className="fa fa-angle-down"></i>
            </div>
            <i className="fas fa-bell"></i>
            <i className="fas fa-envelope"></i>
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
      </>
    )
  }
}

export default NavBar;