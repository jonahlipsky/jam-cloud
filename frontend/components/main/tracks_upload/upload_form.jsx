import React from 'react';
import UploadStageOne from './upload_stage_one';
import UploadStageTwo from './upload_stage_two';
import { Redirect } from 'react-router-dom';

class UploadForm extends React.Component{
  constructor(props){
    super(props);
    if(this.props.track){
      this.state = this.props.track;
    } else {
      this.state = {
        title: "",
        imageUrl: null,
        imageFile: null,
        soundUrl: null,
        soundFile: null
      };
    }
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetUpload = this.resetUpload.bind(this);
  }

  componentDidMount(){
    if(this.props.formType === "Update"){
      let track = this.props.track;
      this.setState({
        title: track.title,
        imageUrl: track.imageUrl,
        imageFile: track.imageFile,
        soundUrl: track.soundUrl,
        soundFile: track.soundFile
      });
    }
  }

  componentWillUnmount(){
    
    this.props.incrementStage(0);
  }

  handleInput(e){
    this.setState({title: e.currentTarget.value});
  }

  resetUpload(){
    this.props.incrementStage(0);
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
      if(this.props.fileUploadStage === 1){
        this.props.incrementStage(this.props.fileUploadStage);
      }
    };
  }

  handleSubmit(formType){
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
      if (that.state.soundFile){
        formData.append('track[sound_file]', that.state.soundFile);
      }
      if(formType === 'Update'){
        that.props.updateTrack(formData, that.props.track.id).then(() => {
          this.setState({redirect: '/you/tracks'});
        });
      } else {
        that.props.postTrack(formData).then(() => {
          this.setState({redirect: '/you/tracks'});
        });
      }
    };
  }

  render(){
    //consider using react-dropzone as things move forward
    //todo
    let redirect = '';
    if(this.state.redirect){
      redirect = <Redirect to="/you/tracks" />
    }
    let component = this.props.fileUploadStage === 1 ? <UploadStageOne context={this} /> : <UploadStageTwo errors={this.props.errors} context={this} />
    return(
      <>
        {redirect}
        {component}
      </>
    )
  }
}

export default UploadForm