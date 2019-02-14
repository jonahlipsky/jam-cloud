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
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.cancelUpdateImage = this.cancelUpdateImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFile(field){
    return e => {
      let fileName = field + 'File';
      let urlName = field + 'Url';
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({[fileName]: file, [urlName]: fileReader.result});
        this.toggleModal('Update Image');
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
    formData.append('user[profile_picture]', this.state.imageFile);
    this.props.updateUser(formData, this.props.user.id);
    this.toggleModal();
  }

  toggleModal(){
    this.setState({});
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
      
    return(
      <div className="user-show-header header">
        <div className="user-show-content">
          <UploadImage context={this} imageUrl={imageUrl} />
          <div className="username-element">
            <h2>{username}</h2>
          </div>
        </div>

        <div className={'modal js-modal-close'} id={'modal'}>
          <ImageUploadForm context={this}/>
          <div className="modal-screen" id={'modal-screen'} onClick={this.toggleModal}>
            <button className="modal-close" >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default UserShowHeader;