import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';
import DropdownComponent from './dropdown_component';

const mapStateToProps = (state, ownProps) => {

  let list = [["Sign Out", () => ownProps.history.push('/signout/currentuser/immediate')]];
  return({
    iconClassname: "fas fa-ellipsis-h",
    list
  });
};


const EllipsisDropdown = (props) => {
  return(
    <div className="ellipsis-options-nav-bar">
      <DropdownComponent list={props.list} iconClassname={props.iconClassname} />
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(EllipsisDropdown))