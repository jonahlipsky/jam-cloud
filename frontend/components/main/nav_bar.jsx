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
              <i class="fas fa-cloud"></i>
              <i class="fas fa-music"></i>
            </button>
            <button className="home left-btns">Home</button>
            <button className="steam left-btns">Stream</button>
            <button className="collection left-btns">Collection</button>
            <div className="search-bar-container">
              <input type="text" className="search-bar-field" placeholder='Search'/>
              <i class="fas fa-search"></i>
            </div>
            <button className="upload">upload</button>
            <div className="profile-dropdown">{this.props.user.username}</div>
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