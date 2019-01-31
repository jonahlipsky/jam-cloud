import React from 'react';

export default ({imageUrl, mainContext}) => (
    <div className="image-upload">
      <img src={imageUrl} />
      <div className="file-upload-box">
        <input className="file-upload" id='track-image-upload' type="file" 
          onChange={mainContext.handleFile('image')}/> 
        <p><i className="fas fa-camera"></i> Upload Image</p>
      </div>
    </div>

)