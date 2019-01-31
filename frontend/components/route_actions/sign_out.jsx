import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

const SignOut = (props) => {
  props.signout();

  return(
    <>
    </>
  )
};

export default connect(null, mapDispatchToProps)(SignOut);