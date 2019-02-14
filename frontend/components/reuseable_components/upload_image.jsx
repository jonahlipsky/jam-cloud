import React from 'react';

export default ({imageUrl, context}) => (
    <div className="image-upload">
      <img src={imageUrl} />
      <div className="file-upload-box">
        <input className="file-upload" id='track-image-upload' type="file" 
          onChange={context.handleFile('image')}/> 
        <p><i className="fas fa-camera"></i> Upload Image</p>
      </div>
    </div>

)