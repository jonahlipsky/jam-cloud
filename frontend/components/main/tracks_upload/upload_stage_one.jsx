import React from 'react';

export default ({context}) => {
  return(
    <div className="track-upload-container">
      <h2>Upload your sound file here</h2>
      <div className="orange-btn file-upload-box">
        <p>Choose file to upload</p>
        <input className="file-upload" id='track-upload' type="file" onChange={context.handleFile('sound')}/>
      </div>
    </div>
  )
}