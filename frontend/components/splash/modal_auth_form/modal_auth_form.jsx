import React from 'react';
import ModalFormVariable from './modal_form_variable_container';

class ModalAuthForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: '', age: '', gender: '', 
    username: '', variable1: 'email', variable2: 'password'};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(){
    if(this.props.resetAuthForm){
      this.resetStageAndErrors();
      this.props.toggleResetAuthForm();
    }
  }

  resetStageAndErrors(){
    this.props.incrementStage(0);
    this.props.clearErrors();
    this.setState({ email: '', password: '', age: '', gender: '', 
    username: '', variable1: 'email', variable2: 'password'});
  }
  
  checkEmailPassword(){
    let errors = [];
    let emailCheck = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (!emailCheck.test(this.state.email)){
      errors.push('Invalid Email');
    } else if (this.props.emails.includes(this.state.email)) {
      errors.push('Email already registered');
    }
    if (this.state.password.length < 6 ){
      errors.push('Password must be at least 6 characters');
    }
    return errors;
  }

  checkAgeGender(){
    let errors = [];
    let genders = ["Male", "Female", "Other", "Trans", "Prefer Not To Say"];
    if (!genders.includes(this.state.gender)){
      errors.push('Please Select A Gender');
    }
    if (!parseInt(this.state.age)){
      errors.push('Please enter valid age');
    } 
    return errors;
  }

  incrementAndClearErrors(){
    this.props.incrementStage(this.props.stage);
    this.props.clearErrors();
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
        let errors = this.checkEmailPassword();
        if (!errors.length){
          this.incrementAndClearErrors();
          this.setState({variable1: 'age', variable2: 'gender'});
        } else {
          this.props.sendStageErrors(errors);
        }
      }

    } else if(this.props.stage === 2){
      let errors = this.checkAgeGender();
      if(!errors.length){
        this.incrementAndClearErrors();
        this.setState({variable1: 'username', variable2: '_'});
      } else {
        this.props.sendStageErrors(errors);
      }

    } else if(this.props.stage === 3){
      user = {email: this.state.email, password: this.state.password, 
        gender: this.state.gender, age: this.state.age, username: this.state.username};
      this.props.signup(user);
      this.props.incrementStage(0);
      this.props.clearErrors();
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
      <div className={'modal-form'} id={'modal-form'}>
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

export default ModalAuthForm