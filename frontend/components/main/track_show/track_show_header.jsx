import React from 'react';
import { Link } from 'react-router-dom';
import UploadImage from '../tracks_upload/upload_image';
import ImageUploadForm from './image_upload_form';

class TrackShowHeader extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      imageUrl: null,
      imageFile: null
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.cancelUpdateImage = this.cancelUpdateImage.bind(this);
    this.handleSubmit = this.handleFile.bind(this);
    this.playTrack = this.playTrack.bind(this);
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
    this.setState({image: null, imageUrl: null});
    this.toggleModal();
  }

  handleSubmit(){
    const formData = new FormData();
    formData.append('track[image]', that.state.imageFile);
    this.props.updateTrack(formData, this.props.track.id);
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

  playTrack(){
    this.props.pushToFrontOfQueue(this.props.track.id);
  }

  render(){
    let artistName = this.props.artist ? this.props.artist.username : "";
    let title = this.props.track ? this.props.track.title : "";
    let artistId = this.props.artist ? this.props.artist.id : 1;
    let updateTime = this.props.updateTime || "";
    let imageUrl;
    if(this.state.imageUrl){
      imageUrl = this.state.imageUrl;
    } else if (this.props.track && this.props.track.imageUrl){
      imageUrl = this.props.track.imageUrl;
    } else{
      imageUrl = window.blurCloud;
    }
    return(
      <div className="track-show-header">
        <div className="info-and-play-bar">
          <div className="track-info">
            <img src={window.playIcon} onClick={this.playTrack}/>
            <div className="artist-title">
              <Link to={`/users/${artistId}`}>{artistName}</Link>
              <h3>{title}</h3>
            </div>
          </div>
          <div className="update-info">
            {updateTime}
          </div>
        </div>
        <UploadImage context={this} imageUrl={imageUrl} />


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

export default TrackShowHeader;