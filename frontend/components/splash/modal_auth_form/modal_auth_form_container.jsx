import { connect } from 'react-redux';
import { signin, signup, 
  sendStageErrors, clearErrors, toggleResetAuthForm } from '../../../actions/session_actions';
import { incrementStage } from '../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import ModalAuthForm from './modal_auth_form';

const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user)),
  signup: user => dispatch(signup(user)),
  incrementStage: (newStage) => dispatch(incrementStage(newStage)),
  sendStageErrors: (errors) => dispatch(sendStageErrors(errors)),
  clearErrors: () => dispatch(clearErrors()),
  toggleResetAuthForm: () => dispatch(toggleResetAuthForm())
});

const mapStateToProps = state => {
  let usersArray = Object.values(state.entities.users);
  let emails = usersArray.map((user) => {
    return user.email;
  });
  let stage = state.session.stage || 1;
  let resetAuthForm = state.session.resetAuthForm;
  return({
    stage,
    errors: state.errors.session,
    emails,
    resetAuthForm
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalAuthForm));