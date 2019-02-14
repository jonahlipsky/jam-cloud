import React from 'react';

export default ({context}) => {

  return (
    <div className="image-upload-modal modal-form" id="modal-form">
      <img src={context.state.imageUrl}/>

      <div className="cancel-submit">
        <button className="cancel" onClick={context.cancelUpdateImage}>cancel</button>
        <button id="submit" onClick={context.handleSubmit}>Save</button>
      </div>
    </div>
  )

}
