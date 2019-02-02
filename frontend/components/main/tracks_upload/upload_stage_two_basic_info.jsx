import React from 'react';
import UploadImage from './upload_image';

export default ({context, errors}) => {
  let url = context.state.imageUrl;
  let imageUrl = url ? context.state.imageUrl : window.blurCloud;
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
    <form onSubmit={context.handleSubmit(context.props.formType)}>
        <UploadImage context={context} imageUrl={imageUrl}/>
        <div className="stage-two-basic-info">
          <div className="fields">
            {uploadErrors}
            <label htmlFor="track-title">Title<p className="required-star">*</p></label>
            <input className="form-input-field" id='track-title' type="text" 
              value={context.state.title} onChange={context.handleInput.bind(context)}/>

            <div className="submit-cancel">
              <button className="cancel-upload" onClick={context.resetUpload}>Cancel</button>
              <input className='orange-btn' id='track-upload' type="submit" value="Save"/>
            </div>
          </div>
        </div>
    </form>
  )
} 