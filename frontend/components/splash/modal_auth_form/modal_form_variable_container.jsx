import {connect} from 'react-redux';
import ModalFormVariable from './modal_form_variable';

const mapStateToProps = state => ({
  resetAuthForm: state.session.resetAuthForm
});

export default connect(mapStateToProps)(ModalFormVariable);