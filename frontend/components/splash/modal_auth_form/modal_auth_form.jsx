import React from 'react';
import { connect } from 'react-redux';
import { signin, signup } from '../../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user)),
  signup: user => dispatch(signup(user))
});


class ModalAuthForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: ''};
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
          <input id='email' type="text" 
            placeholder={'Please input your email address'} value={this.state.email}
            onChange={this.handleChange('email')}/>
          <input id='password' type="password" placeholder="Enter password" 
            value={this.state.password} onChange={this.handleChange('password')}/>
          <input id='submit' type="submit" value={submitButtonValue}/>
        </form>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(ModalAuthForm);