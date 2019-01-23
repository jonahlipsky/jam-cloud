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
            <button className="logo">logo</button>
            <button className="home">Home</button>
            <button className="steam">stream</button>
            <div className="search-bar-container">search bar</div>
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