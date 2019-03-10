import { withRouter } from 'react-router-dom';
import { incrementStage } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { signin, toggleResetAuthForm } from '../../actions/session_actions';
import SplashHeader from './splash_header';

const mapStateToProps = state => ({
  stage: state.session.stage
});

const mapDispatchToProps = dispatch => ({
  incrementStage: (prevStage) => dispatch(incrementStage(prevStage)),
  signin: (user) => dispatch(signin(user)),
  toggleResetAuthForm: () => dispatch(toggleResetAuthForm())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SplashHeader));
