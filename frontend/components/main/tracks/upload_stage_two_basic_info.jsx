import React from 'react';

export default ({mainContext}) => {

  return(
    <form onSubmit={mainContext.handleSubmit(mainContext.props.formType)}>
        <div className="image-upload">
          <div className="file-upload-box">
            <input className="file-upload" id='track-image-upload' type="file" 
              onChange={mainContext.handleFile('image')}/> 
            <p><i className="fas fa-camera"></i> Upload Image</p>
          </div>
        </div>
        <div className="stage-two-basic-info">

          <div className="fields">
            <label htmlFor="track-title">Title<p className="required-star">*</p></label>
            <input className="form-input-field" id='track-title' type="text" 
              value={mainContext.state.title} onChange={mainContext.handleInput.bind(mainContext)}/>

            <div className="submit-cancel">
              <button className="cancel-upload">Cancel</button>
              <input className='orange-btn' id='track-upload' type="submit" value="Save"/>
            </div>
          </div>
        </div>
    </form>
  )
} 