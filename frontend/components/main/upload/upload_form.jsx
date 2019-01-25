import React from 'react';
import { postTrack, updateTrack } from '../../../actions/track_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  postTrack: (formData) => dispatch(postTrack(formData)),
  updateTrack: (formData, id) => dispatch(updateTrack(formData, id))
});

class UploadForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      imageUrl: null,
      imageFile: null,
      trackUrl: null,
      trackFile: null
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if(this.props.formType === "Update"){
      let track = this.props.track;
      this.setState({
        title: track.title,
        imageUrl: track.imageUrl,
        imageFile: track.imageFile,
        trackUrl: track.trackUrl,
        trackFile: track.trackFile
      });
    }
  }

  handleInput(e){
    this.setState({title: e.currentTarget.value});
  }

  handleFile(field){
    return e => {
      let fileName = field + 'File';
      let urlName = field + 'Url';
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({[fileName]: file, [urlName]: fileReader.result});
      };
      if(file){
        fileReader.readAsDataURL(file);
      }
    };
  }

  handleSubmit(formType){
    // debugger
    let that = this;
    return e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('track[title]', that.state.title);
  
      if (that.state.imageFile){
        formData.append('track[image]', that.state.imageFile);
      } else {
        //add a default image and map it to state
        //also on component did mount fetch that image
        // formData.append('track[image]', that.props.defaultImage);
      }

      if (that.state.trackFile){
        formData.append('track[track]', that.state.trackFile);
      }

      if(formType === 'Update'){
        that.props.updateTrack(formData, that.props.track.id);
      } else {
        that.props.postTrack(formData);
      }
    };
  }

  render(){

    return(
      <form onSubmit={this.handleSubmit(this.props.formType)}>
        <label htmlFor="track-title">Track title</label>
        <input className="form-input-field" id='track-title' type="text" value={this.state.title} onChange={this.handleInput.bind(this)}/>
        <label htmlFor="track-upload">Upload a track</label>
        <input className="form-input-field" id='track-upload' type="file" onChange={this.handleFile('track')}/>
        <label htmlFor="track-image-upload">Upload an image</label>
        <input className="form-input-field" id='track-image-upload' type="file" onChange={this.handleFile('image')}/>
        <input className='orange-btn' id='track-upload' type="submit" value={`${this.props.formType} Track`}/>
      </form>
    )
  }
}

export default connect(null, mapDispatchToProps)(UploadForm)