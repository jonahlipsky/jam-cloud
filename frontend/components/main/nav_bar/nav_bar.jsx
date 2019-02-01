import React from 'react';
import { Route, Link } from 'react-router-dom';
import UploadContainer from '../../main/tracks_upload/upload_container';
import StreamContainer from '../../stream/stream_container';
import DropdownComponent from './dropdown_component';
import FontAwesome from 'fontawesome';
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
            <button className="home left-btns">Home</button>
            <button className="steam left-btns">Stream</button>
            <button className="collection left-btns">Collection</button>
            <div className="search-bar-container">
              <input type="text" className="search-bar-field" placeholder='Search'/>
              <i className="fas fa-search"></i>
            </div>

            <Link to='/upload' className="upload">Upload</Link>
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