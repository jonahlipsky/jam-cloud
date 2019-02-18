import React from 'react';
import BasicInfo from './upload_stage_two_basic_info';

class UploadStageTwo extends React.Component{
  constructor(props){
    super(props);
    this.state = {tab: "basic-info"};
  }  

  handleClassname(button){
    if(this.state.tab === button){
      return button + " upload-nav-selected";
    } else {
      return button;
    }
  }

  render(){
    let component;
    if(this.state.tab === "basic-info"){
      component = <BasicInfo errors={this.props.errors} context={this.props.context} />
    } 

    return(
      <div className="stage-two-track-upload-container">
        <div className="track-upload-stage-two-nav">
          <button className={this.handleClassname('basic-info')}><h2>Basic Info</h2></button>
          <button className={this.handleClassname('metadata')}><h2>Metadata</h2></button>
        </div>
        <div className='track-upload-stage-two-body'>
          {component}
        </div>
      </div>
    )
  }
}

export default UploadStageTwo;