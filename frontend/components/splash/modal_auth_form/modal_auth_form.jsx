import React from 'react';
import { connect } from 'react-redux';
import { signin, signup } from '../../../actions/session_actions';
import ModalFormVariable from './stage_1';

const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user)),
  signup: user => dispatch(signup(user))
});


class ModalAuthForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: '', age: '', gender: '', username: '', stage: 1};
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleSubmit(e){
    e.preventDefault();
    const user = {email: this.state.email, password: this.state.password};
    if(this.props.formType === 'signin'){
      this.props.signin(user);
    } else {
      this.props.signup(user);
    }
  }

  handleChange(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  render(){
    let submitButtonValue;
    if (this.state.stage === 2){
      submitButtonValue = 'Continue';
    } else if (this.state.stage === 3){
      submitButtonValue = 'Create Account';
    }
    else if (this.props.formType === 'signin'){
      submitButtonValue = 'Sign In';
    } else {
      submitButtonValue = 'Sign Up';
    }

    return(
      <div className="modal-form">
        <form className="options" onSubmit={this.handleSubmit}>

          <ModalFormVariable variable1={'email'} variable2={'password'}
            handleVar1Change={this.handleChange('email').bind(this)}
            handleVar2Change={this.handleChange('password').bind(this)}/>
            
          <input id='submit' type="submit" value={submitButtonValue}/>
        </form>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(ModalAuthForm);