import React from 'react';
import { Link } from 'react-router-dom';
import ModalAuthForm from './modal_auth_form/modal_auth_form';
import { withRouter } from 'react-router-dom';
import { incrementStage } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/session_actions';

const mapStateToProps = state => ({
  stage: state.session.stage
});

const mapDispatchToProps = dispatch => ({
  incrementStage: (prevStage) => dispatch(incrementStage(prevStage)),
  fetchUsers: () => dispatch(fetchUsers())
});

class SplashHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {formType: ''};
  }
  
  componentDidMount(){
    this.props.incrementStage(0);
    this.props.fetchUsers();
    const modalForm = document.getElementById('modal-form');
    const button = document.getElementById('sign-in-btn');
    button.addEventListener('click', () => {
      setTimeout(() => {
        modalForm.classList.add('form-down');
      }, 100);
    });
    const modalScreen = document.getElementById('modal-screen');
    const modal = document.getElementById('modal');
    modalScreen.addEventListener('click', () => {
      modalForm.classList.remove('form-down');
      setTimeout(() => {
        modal.classList.remove('js-modal-open');
        modal.classList.add('js-modal-close');
      }, 500);
    });
  }

  toggleModal(formType){
    return e => {
      this.setState({formType});
      const modalForm = document.getElementById('modal-form');
      const modal = document.getElementById('modal');
      modal.classList.remove('js-modal-close');
      modal.classList.add('js-modal-open');
      setTimeout(() => {
        modalForm.classList.add('form-down');
      }, 100);
    };
  }


  render(){

    const formTypeForAuth = this.state.formType;
    return(
      <div className="splash-image">
        <div className="splash-image-contents">
          <div className="splash-auth-btns">
            <div><button id='sign-in-btn' onClick={this.toggleModal('signin')}><p>Sign In</p></button></div>
            <button id='sign-up-btn' onClick={this.toggleModal('signup')}>Create Account</button>
          </div>

          <div className='splash-welcome-text'>
            <h1>Discover music on JamCloud</h1>

            <h3>Upload your tracks, interact with artists, and stay up to date with <br/> their latest releases!</h3>
            <Link to="/upload">Upload Your First Track Today</Link>
          </div>

          <div className={'modal js-modal-close'} id={'modal'}>

            <ModalAuthForm stage={this.state.stage} formType={formTypeForAuth}/>

            <div className="modal-screen" id={'modal-screen'} >
              <button className="modal-close" >
                <i className="fas fa-times"></i>
              </button>
              
            </div>
    
          </div>
          <div className="photo-credit">
            CREDIT: Getty Images
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SplashHeader));
