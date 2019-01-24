import React from 'react';
import { connect } from 'react-redux';
import { signin, signup } from '../../../actions/session_actions';
import ModalFormVariable from './modal_form_variable';
import { incrementStage } from '../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';


const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user)),
  signup: user => dispatch(signup(user)),
  incrementStage: (newStage) => dispatch(incrementStage(newStage))
});

const mapStateToProps = state => ({
  stage: state.session.stage,
  errors: state.errors.session
});

class ModalAuthForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: '', age: '', gender: '', 
    username: '', variable1: 'email', variable2: 'password'};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetState(){
    this.setState({email: '', password: '', age: '', gender: '', 
    username: '', variable1: 'email', variable2: 'password'});
  }

  handleSubmit(e){
    e.preventDefault();
    let user;
    if(this.props.stage === 1){
      if(this.props.formType === 'signin'){
        user = {email: this.state.email, password: this.state.password};
        this.props.signin(user);
        this.props.incrementStage(0);
      } else {
        this.setState({variable1: 'age', variable2: 'gender'});
        this.props.incrementStage(this.props.stage);
      }
    } else if(this.props.stage === 2){
      this.setState({ variable1: 'username', variable2: '_'});
      this.props.incrementStage(this.props.stage);
    } else if(this.props.stage === 3){
      user = {email: this.state.email, password: this.state.password, 
        gender: this.state.gender, age: this.state.age, username: this.state.username};
      this.resetState();
      this.props.signup(user);
      this.props.incrementStage(0);
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
    if (this.props.stage === 2){
      submitButtonValue = 'Continue';
    } else if (this.props.stage === 3){
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
    let errors = this.props.errors.map((er) => {
      return <li>{er}</li>
    });
    return(
      <div className="modal-form">
        <h1>{headerText}</h1>
        <form className="options" onSubmit={this.handleSubmit}>

          <ModalFormVariable variable1={this.state.variable1} 
            variable2={this.state.variable2}
            handleVar1Change={this.handleChange(var1Name).bind(this)}
            handleVar2Change={this.handleChange(var2Name).bind(this)}
            stage={this.props.stage}/>
          <ul className='session-errors'>
            {errors}
          </ul>
          <input id='submit' type="submit" value={submitButtonValue}/>
        </form>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalAuthForm));