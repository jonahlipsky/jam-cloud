import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {modal: 'modal js-modal-open'};
  }
  
  toggleModal(e){
    this.setState({modal: 'modal js-modal-open'});
  }

  render(){
    return(
      <div className="splash-image">
        <div className="splash-auth-btns">
          <button onClick={this.toggleModal}>Sign In</button>
          <button onClick={this.toggleModal}>Create Account</button>
          <button>For Creators</button>
        </div>
        <div className='splash-welcome-text'>
          <h1>Discover music on Jam-Cloud</h1>
          <h2>Upload your own tracks, comment on others, find songs, connect
            with artists, and stay up to date about their latest  releases!</h2>
          <Link to="/upload">Start Uploading Today</Link>
        </div>
        <div className={this.state.modal}>
  
          <div className="modal-form">
            <form className="options">

              <input id='email' type="text" value={'Please input your email address'}/>
              <input id='password' type="password" value={'Password'}/>
              <input id='submit' type="submit"/>
            </form>
          </div>
          
          <div className="modal-screen">
          </div>
  
        </div>
      </div>
    )
  }

}

export default Splash;
