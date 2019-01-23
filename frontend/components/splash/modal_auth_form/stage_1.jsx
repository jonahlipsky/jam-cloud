import React from 'react';

class ModalFormVariable extends React.Component{
  constructor(props){
    super(props);
    this.state = {[props.variable1]: "", [props.variable2]: ""};

  }

  handleChange(field, varNum){
    return e => {
      this.setState({[field]: e.target.value});
      if(varNum === "Var1"){
        this.props.handleVar2Change(e);
      } else if (varNum === "Var2"){
        this.props.handleVar2Change(e);
      }
    };
  }

  render(){    
    let input1;
    let input2;

    if(this.props.stage === 1){
      input1={<input id='email' type="text" 
      placeholder={'Please input your email address'} value={this.state.email}
      onChange={this.handleChange('email', "Var1")}/>}
  
      input2={<input id='password' type="password" placeholder="Enter password" 
      value={this.state.password} onChange={this.handleChange('password', "Var2")}/>
    }}


    return(
      {input1}
      {input2}
    )
  }
} 

export default ModalFormVariable;
