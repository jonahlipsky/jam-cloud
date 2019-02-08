import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';
import DropdownComponent from './dropdown_component';

const mapStateToProps = (state, ownProps) => {

  let list = [["Sign Out", () => ownProps.history.push('/signout/currentuser/immediate')]];
  let headerComponent = (<i className="fas fa-ellipsis-h"></i>);
  return({
    headerComponent,
    list
  });
};


const EllipsisDropdown = (props) => {
  return(
    <div className="ellipsis-options-nav-bar options-dropdown">
      <DropdownComponent list={props.list} headerComponent={props.headerComponent} />
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(EllipsisDropdown))