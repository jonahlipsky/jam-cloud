import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShowHeader from './user_show_header';
import { updateUser } from '../../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let userId = ownProps.match.params.userId;
  let user = state.entities.users[userId] || {};
  return({
    user
  });
};

const mapDispatchToProps = dispatch => ({
  updateUser: (formData, userId) => dispatch(updateUser(formData, userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShowHeader));