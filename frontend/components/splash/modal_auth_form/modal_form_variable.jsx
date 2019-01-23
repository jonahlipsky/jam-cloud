import React from 'react';

class ModalFormVariable extends React.Component{
  constructor(props){
    super(props);
    this.state = {email: '', password: '', age: '', gender: '--Select Gender--', 
    username: ''};
  }

  handleChange(field, varNum){
    return e => {
      this.setState({[field]: e.target.value});
      if(varNum === "Var1"){
        this.props.handleVar1Change(e);
      } else if (varNum === "Var2"){
        this.props.handleVar2Change(e);
      }
    };
  }

  render(){    
    let var1, var2;
    if(this.props.stage === 1){

      var1=<input id='email' type="text" 
      placeholder={'Please input your email address'} value={this.state.email}
      onChange={this.handleChange('email', "Var1")}/>
  
      var2=<input id='password' type="password" placeholder="Enter password" 
      value={this.state.password} onChange={this.handleChange('password', "Var2")}/>
    
    } else if (this.props.stage === 2){

      var1=<label>Please enter your age<input id='age' type='text' value={this.state.age}
        onChange={this.handleChange('age', 'Var1')} placeholder='age'/></label>

      var2=<label>Gender
        <select defaultValue={this.state.gender} onChange={this.handleChange('gender', 'Var2')}>
          <option value="--Select Gender--" disabled>--Select Gender--</option>
          <option value='Female'>Female</option>
          <option value='Male'>Male</option>
          <option value='Trans'>Trans</option>
          <option value='Other'>Other</option>
          <option value='Prefer Not To Say'>Prefer Not To Say</option>
        </select>
      </label>

    } else if (this.props.stage === 3){
      var1=<label>Please enter a username
        <input id='username' type="text" placeholder='username' 
        value={this.state.username} onChange={this.handleChange('username', 'Var1')}/>
      </label>
      var2=''
    }

    return(
      <>
        {var1}
        {var2}
      </>
    )
  }
} 

export default ModalFormVariable;
