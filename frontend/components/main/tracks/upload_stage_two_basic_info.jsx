import React from 'react';

export default ({mainContext}) => {

  return(
    <form onSubmit={mainContext.handleSubmit(mainContext.props.formType)}>
        <div className="image-upload">
          <div className="file-upload-box">
            <input className="file-upload" id='track-image-upload' type="file" 
              onChange={mainContext.handleFile('image')}/> 
            <p><i className="fas fa-camera"></i>Upload Image</p>
          </div>
        </div>
        <div className="stage-two-basic-info">

          <div className="fields">
            <label htmlFor="track-title">Track title</label>
            <input className="form-input-field" id='track-title' type="text" 
              value={mainContext.state.title} onChange={mainContext.handleInput.bind(mainContext)}/>
            <label htmlFor="track-image-upload">Upload an image</label>
            <input className='orange-btn' id='track-upload' type="submit" value={`${mainContext.props.formType} Track`}/>
          </div>
        </div>
    </form>
  )
} 