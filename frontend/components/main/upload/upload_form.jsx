import React from 'react';
import { postTrack } from '../../../actions/track_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  postTrack: (formData) => dispatch(postTrack(formData))
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

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('track[title]', this.state.title);

    if (this.state.imageFile){
      formData.append('track[image]', this.state.imageFile);
    } else {
      //add a default image and map it to state
      //also on component did mount fetch that image
      debugger
      // formData.append('track[image]', this.props.defaultImage);
    }
    if (this.state.trackFile){
      formData.append('track[track]', this.state.trackFile);
    }
    this.props.postTrack(formData);
  }

  render(){

    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="track-title">Track title</label>
        <input className="form-input-field" id='track-title' type="text" onChange={this.handleInput.bind(this)}/>
        <label htmlFor="track-upload">Upload a track</label>
        <input className="form-input-field" id='track-upload' type="file" onChange={this.handleFile('track')}/>
        <label htmlFor="track-image-upload">Upload an image</label>
        <input className="form-input-field" id='track-image-upload' type="file" onChange={this.handleFile('image')}/>
        <input className='orange-btn' id='track-upload' type="submit" value='Upload Track'/>
      </form>
    )
  }
}

export default connect(null, mapDispatchToProps)(UploadForm)