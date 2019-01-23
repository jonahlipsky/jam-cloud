import React from 'react';
import { Link } from 'react-router-dom';
import ModalAuthForm from './modal_auth_form';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.state = {modal: 'modal js-modal-close', formType: ''};
  }
  
  toggleModal({formType, action}){
    return e => {
      debugger
      if(action === 'open'){
        this.setState({modal: 'modal js-modal-open', formType});
      } else {
        this.setState({modal: 'modal js-modal-close', formType});
      }
    };
    
  }


  render(){

    const formTypeForAuth = this.state.formType;
    debugger
    return(
      <div className="splash-image">
        <div className="splash-auth-btns">
          <button onClick={this.toggleModal({formType: 'signin', action: 'open' })}>Sign In</button>
          <button onClick={this.toggleModal({formType: 'signup', action: 'open' })}>Create Account</button>
          <button>For Creators</button>
        </div>

        <div className='splash-welcome-text'>
          <h1>Discover music on Jam-Cloud</h1>
          <h2>Upload your own tracks, comment on others, find songs, connect
            with artists, and stay up to date about their latest  releases!</h2>
          <Link to="/upload">Start Uploading Today</Link>
        </div>

        <div className={this.state.modal}>
  
          <ModalAuthForm formType={formTypeForAuth}/>
          
          <div className="modal-screen">
            <button className="modal-close" 
              onClick={this.toggleModal({ formType: '', action: 'close' })}>
              X
            </button>
          </div>
  
        </div>
      </div>
    )
  }

}

export default Splash;
