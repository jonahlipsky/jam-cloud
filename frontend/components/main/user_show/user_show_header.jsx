import React from 'react';
import { Link } from 'react-router-dom';
import UploadImage from '../../reuseable_components/upload_image';
import ImageUploadForm from '../../reuseable_components/image_upload_form';
import regeneratorRuntime from 'regenerator-runtime';

class UserShowHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      profilePictureUrl: null,
      profilePictureFile: null,
      profileBackgroundFile: null,
      profileBackgroundUrl: null,
      modalType: ""
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.cancelUpdateImage = this.cancelUpdateImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(field){
    return e => {
      let fileName = field + 'File';
      let urlName = field + 'Url';
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({[fileName]: file, [urlName]: fileReader.result});
        this.toggleModal(field);
      };
      if(file){
        fileReader.readAsDataURL(file);
      }
    };
  }

  cancelUpdateImage(type){
    return e => {
      let file = type + "File";
      let url = type + "Url";
      this.setState({[file]: "", [url]: ""});
      this.toggleModal();
    };
  }

  async handleSubmit(){
    const formData = new FormData();
    if(this.state.profilePictureFile){
      formData.append('user[profile_picture]', this.state.profilePictureFile);
    } else if(this.state.profileBackgroundFile){
      formData.append('user[profile_background]', this.state.profileBackgroundFile);
    }
    this.props.updateUser(formData, this.props.user.id);
    this.toggleModal();
  }

  toggleModal(type = ""){
    this.setState({modalType: type});
    const modalForm = document.getElementById('modal-form');
    const modal = document.getElementById('modal');
    if(modal.classList.contains('js-modal-close')){
      modal.classList.remove('js-modal-close');
      modal.classList.add('js-modal-open');
      setTimeout(() => {
        modalForm.classList.add('form-down');
      }, 100);
    } else {
      modal.classList.remove('js-modal-open');
      modalForm.classList.remove('form-down');
      setTimeout(() => {
        modal.classList.add('js-modal-close');
      }, 350);
    }
  }

  render(){
    let username = this.props.user ? this.props.user.username : "";
    let profilePictureUrl = "";
    if(this.state.profilePictureUrl){
      profilePictureUrl = this.state.profilePictureUrl;
    } else if (this.props.user){
      profilePictureUrl = this.props.user.profilePicture;
    } 
    let profileBackgroundUrl = "";
    if(this.state.profileBackgroundUrl){
      profileBackgroundUrl = this.state.profileBackgroundUrl;
    } else if(this.props.user && this.props.user.profileBackground){
      profileBackgroundUrl = this.props.user.profileBackground;
    } 

      
    return(
      <div className="user-show-header header">
        <div className="background-image">
          <img src={profileBackgroundUrl}/>
        </div>
        <span className="upload-new-background-image">
          <input className="file-upload" id='user-image-upload' type="file" 
            onChange={this.handleFile('profileBackground')}/> 
          <i className="fa fa-camera" aria-hidden="true"></i>
          <p>Upload New Background Image</p>
        </span>
        <div className="user-show-content">
          <UploadImage type={"profilePicture"} context={this} imageUrl={profilePictureUrl} />
          <div className="username-element">
            <h2>{username}</h2>
          </div>
        </div>
        <div className={'modal js-modal-close'} id={'modal'}>
          <ImageUploadForm type={this.state.modalType} context={this}/>
          <div className="modal-screen" id={'modal-screen'} onClick={this.toggleModal}>
            <button className="modal-close">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default UserShowHeader;