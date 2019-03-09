import React from 'react';

export default ({imageUrl, context, type}) => {
  debugger
  return (
    <div className="image-upload">
      <div className="image-container">
        <img src={imageUrl} />
      </div>
      <div className="file-upload-box">
        <input className="file-upload" id='track-image-upload' type="file" 
          onChange={context.handleFile(type)}/> 
        <p><i className="fas fa-camera"></i> Upload Image</p>
      </div>
    </div>
)}