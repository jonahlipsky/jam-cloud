import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';
import DropdownComponent from './dropdown_component';

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.id;
  let currentUser = state.entities.users[currentUserId];

  let list = [[<p><i className="fas fa-user"></i> Profile</p>, () => ownProps.history.push(`/users/${currentUserId}`)]];
  
  debugger
  let headerComponent = currentUser ? (<div className="profile-dropdown">
  <p><img src={currentUser.profilePicture} />{currentUser.username}</p>
  <i className="fa fa-angle-down"></i>
  </div>) : ""

  return({
    headerComponent,
    list
  });
};


const ProfileUserDropdown = (props) => {
  return(
    <div className="profile-options-nav-bar options-dropdown">
      <DropdownComponent list={props.list} headerComponent={props.headerComponent} />
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(ProfileUserDropdown))