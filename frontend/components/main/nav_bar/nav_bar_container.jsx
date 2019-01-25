import { connect } from 'react-redux';
import { signout } from '../../../actions/session_actions';
import NavBar from './nav_bar';
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  let userId = state.session.id;
  let user = state.entities.users[userId];
  return({
    user
  });
};

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
