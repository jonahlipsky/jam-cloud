import React from 'react';

export default ({context, type}) => {
  let image = type === "profileBackground" ? context.state.profileBackgroundUrl : context.state.imageUrl;
  let typeClass = type === "profileBackground" ? 'profile-background' : 'profile-picture';

  return (
    <div className={`image-upload-modal modal-form ${typeClass}`} id="modal-form">
      <img src={image}/>
      <div className="cancel-submit">
        <button className="cancel" onClick={context.cancelUpdateImage}>cancel</button>
        <button id="submit" onClick={context.handleSubmit}>Save</button>
      </div>
    </div>
  )
}