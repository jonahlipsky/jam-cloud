import React from 'react';
import { Link } from 'react-router-dom';
import ModalAuthForm from './modal_auth_form/modal_auth_form';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.state = {modal: 'modal js-modal-close', formType: ''};
  }
  
  toggleModal({formType, action}){
    return e => {
      if(action === 'open'){
        this.setState({modal: 'modal js-modal-open', formType});
      } else {
        this.setState({modal: 'modal js-modal-close', formType});
      }
    };
    
  }


  render(){

    const formTypeForAuth = this.state.formType;
    return(
      <div className="splash-image">
        <div className="splash-auth-btns">
          <div><button id='sign-in-btn' onClick={this.toggleModal({formType: 'signin', action: 'open' })}><p>Sign In</p></button></div>
          <button id='sign-up-btn' onClick={this.toggleModal({formType: 'signup', action: 'open' })}>Create Account</button>
        </div>

        <div className='splash-welcome-text'>
          <h1>Discover music on JamCloud</h1>

          <h2>Upload your own tracks, comment on others, find songs, connect
            with artists, and stay up to date about their latest  releases!</h2>
          <Link to="/upload">Upload Your First Track Today</Link>
        </div>

        <div className={this.state.modal}>
  
          <ModalAuthForm formType={formTypeForAuth}/>
          
          <div className="modal-screen">
            <button className="modal-close" 
              onClick={this.toggleModal({ formType: '', action: 'close' })}>
              <i className="fas fa-times"></i>
            </button>                        
            
          </div>
  
        </div>
      </div>
    )
  }

}

export default Splash;
