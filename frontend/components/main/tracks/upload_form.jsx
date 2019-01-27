import React from 'react';
import UploadStageOne from './upload_stage_one';
import UploadStageTwo from './upload_stage_two';

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

  componentWillUnmount(){
    
    this.props.incrementStage(0);
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
      // debugger
      this.props.incrementStage(this.props.fileUploadStage);
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
    //consider using react-dropzone as things move forward
    //todo
    // debugger
    let component = this.props.fileUploadStage === 1 ? <UploadStageOne that={this} /> : <UploadStageTwo mainContext={this} />
    return(
      <>
        {component}
      </>
    )
  }
}

export default UploadForm