import React from 'react';

export default ({mainContext, errors}) => {
  let imageUrl;
  let toggleBackgroundImage = "";
  if(mainContext.state.imageUrl){
    imageUrl = mainContext.state.imageUrl;
    toggleBackgroundImage = " no-background";
  } else {
    imageUrl = null;
  }
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
        <UploadImage mainContext={mainContext} toggleBackgroundImage={toggleBackgroundImage}
          imageUrl={imageUrl}/>
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