import React from 'react';

export default ({mainContext, errors}) => {
  let image;
  let toggleBackgroundImage = "";
  if(mainContext.state.imageUrl){
    image = <img src={mainContext.state.imageUrl}/>
    toggleBackgroundImage = " no-background";
  } else {
    image = null;
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
        <div className={`image-upload`+`${toggleBackgroundImage}`}>
          {image}
          <div className="file-upload-box">
            <input className="file-upload" id='track-image-upload' type="file" 
              onChange={mainContext.handleFile('image')}/> 
            <p><i className="fas fa-camera"></i> Upload Image</p>
          </div>
        </div>
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