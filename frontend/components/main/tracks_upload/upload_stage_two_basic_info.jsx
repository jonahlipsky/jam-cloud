import React from 'react';
import UploadImage from './upload_image';

export default ({mainContext, errors}) => {
  let url = mainContext.state.imageUrl;
  let imageUrl = url ? mainContext.state.imageUrl : window.blurCloud;
  let uploadErrors;
  if (errors.length){
    uploadErrors = (
      <ul>
        {errors.map((error) => {
          return(
            <li className='upload-errors'>{error}</li>
          )
        })}
      </ul>
    )
  }

  return(
    <form onSubmit={mainContext.handleSubmit(mainContext.props.formType)}>
        <UploadImage mainContext={mainContext} imageUrl={imageUrl}/>
        <div className="stage-two-basic-info">
          <div className="fields">
            {uploadErrors}
            <label htmlFor="track-title">Title<p className="required-star">*</p></label>
            <input className="form-input-field" id='track-title' type="text" 
              value={mainContext.state.title} onChange={mainContext.handleInput.bind(mainContext)}/>

            <div className="submit-cancel">
              <button className="cancel-upload" onClick={mainContext.resetUpload}>Cancel</button>
              <input className='orange-btn' id='track-upload' type="submit" value="Save"/>
            </div>
          </div>
        </div>
    </form>
  )
} 