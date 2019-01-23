import React from 'react';
import { connect } from 'react-redux';
import { signin, signup } from '../../../actions/session_actions';
import ModalFormVariable from './modal_form_variable';

const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user)),
  signup: user => dispatch(signup(user))
});

class ModalAuthForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: '', age: '', gender: '', 
    username: '', stage: 1, variable1: 'email', variable2: 'password'};
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e){
    e.preventDefault();
    let user;
    if(this.state.stage === 1){
      if(this.props.formType === 'signin'){
        user = {email: this.state.email, password: this.state.password};
        this.props.signin(user);
      } else {
        this.setState({stage: 2, variable1: 'age', variable2: 'gender'});
      }
    } else if(this.state.stage === 2){
      this.setState({stage: 3, variable1: 'username', variable2: '_'});
    } else if(this.state.stage === 3){
      user = {email: this.state.email, password: this.state.password, 
        gender: this.state.gender, age: this.state.age, username: this.state.username};
      this.setState({ email: '', password: '', age: '', gender: '', 
      username: '', stage: 1, variable1: 'email', variable2: 'password'});
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
    let headerText = 'Launch a JamCloud Account';
    if (this.state.stage === 2){
      submitButtonValue = 'Continue';
    } else if (this.state.stage === 3){
      submitButtonValue = 'Create Account';
      headerText = "Please enter a username for display";
    }
    else if (this.props.formType === 'signin'){
      submitButtonValue = 'Sign In';
    } else {
      submitButtonValue = 'Continue';
    }

    let var1Name = this.state.variable1;
    let var2Name = this.state.variable2;

    return(
      <div className="modal-form">
        <h1>{headerText}</h1>
        <form className="options" onSubmit={this.handleSubmit}>

          <ModalFormVariable variable1={this.state.variable1} 
            variable2={this.state.variable2}
            handleVar1Change={this.handleChange(var1Name).bind(this)}
            handleVar2Change={this.handleChange(var2Name).bind(this)}
            stage={this.state.stage}/>
            
          <input id='submit' type="submit" value={submitButtonValue}/>
        </form>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(ModalAuthForm);