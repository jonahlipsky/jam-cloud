import React from 'react';
import { Link } from 'react-router-dom';
import UploadImage from '../../reuseable_components/upload_image';
import TrackWidgetContainer from '../../reuseable_components/widgets/track_widget_container';

class TrackShowHeader extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      imageUrl: null,
      imageFile: null,
      playIcon: "playIcon"
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.cancelUpdateImage = this.cancelUpdateImage.bind(this);
    this.submitImageFile = this.submitImageFile.bind(this);
    this.handleFile = this.handleFile.bind(this)
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
        this.toggleModal();
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

  toggleModal(){
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

  setIconHover(){
    this.setState({playIcon: "playIconHover"});
  }

  removeIconHover(){
    this.setState({playIcon: "playIcon"});
  }

  submitImageFile(){
    const formData = new FormData();
    formData.append('track[image]', this.state.imageFile);
    this.props.updateTrack(formData, this.props.track.id);
    this.toggleModal();
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

    let playIcon;
    if(this.state.playIcon === "playIconHover"){
      playIcon = <img src={window.playIconHover} onClick={this.playTrack}/>
    } else {
      playIcon = <img src={window.playIcon} />
    }

    let trackWidget = this.props.track && this.props.artist ? <TrackWidgetContainer track={this.props.track} user={this.props.artist} /> : ""
      
    return(
      <div className="track-show-header header">
        <div className="info-and-play-bar">
          <div className="track-info">
            <div className="play-icon-container" onMouseEnter={this.setIconHover.bind(this)} onMouseLeave={this.removeIconHover.bind(this)}>
              {playIcon}
            </div>
            <div className="artist-title">
              <Link to={`/users/${artistId}`}>{artistName}</Link>
              <h3>{title}</h3>
            </div>
          </div>
          <div className="update-info">
            {updateTime}
          </div>
        </div>
        {trackWidget}
        <UploadImage context={this} type={'image'} imageUrl={imageUrl} />
        <div className={'modal js-modal-close'} id='modal'>
          

          <div className={`image-upload-modal modal-form track-picture-modal`} id="modal-form">
            <div className="image-upload-image-container">
              <img src={this.state.imageUrl}/>
            </div>
            <div className="cancel-submit">
              <button className="cancel" onClick={this.cancelUpdateImage}>cancel</button>
              <button id="submit" onClick={this.submitImageFile}>Save</button>
            </div>
          </div>

          <div className="modal-screen" id={'modal-screen'} onClick={e => this.toggleModal("image")}>
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