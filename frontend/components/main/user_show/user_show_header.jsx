import React from 'react';
import { Link } from 'react-router-dom';
import UploadImage from '../../reuseable_components/upload_image';
import ImageUploadForm from '../../reuseable_components/image_upload_form';
import regeneratorRuntime from 'regenerator-runtime';

class UserShowHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      imageUrl: null,
      imageFile: null,
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

  cancelUpdateImage(){
    this.setState({imageFile: null, imageUrl: null});
    this.toggleModal();
  }

  async handleSubmit(){
    const formData = new FormData();
    if(this.state.imageFile){
      formData.append('user[profile_picture]', this.state.imageFile);
    } else if(this.state.profilePictureFile){
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
    let imageUrl;
    if(this.state.imageUrl){
      imageUrl = this.state.imageUrl;
    } else if (this.props.user){
      imageUrl = this.props.user.profilePicture;
    } else {
      imageUrl = "";
    }

    // let modalFormClassName = this.modalType.length ? " " + this.state.modalType : "";
    //set modal type based on the toggled state that has already been written, 
    //though not tested yet...
    //resize the modal form based on this because it needs to be horizontal.
      
    return(
      <div className="user-show-header header">
        <span className="upload-new-background-image">
          <input className="file-upload" id='user-image-upload' type="file" 
            onChange={this.handleFile('profileBackground')}/> 
          <i className="fa fa-camera" aria-hidden="true"></i>
          <p>Upload New Background Image</p>
        </span>
        <div className="user-show-content">
          <UploadImage type={'image'} context={this} imageUrl={imageUrl} />
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