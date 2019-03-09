import React from 'react';

export default ({context, type}) => {
  let image;
  let typeClass;
  if(type === "profileBackground"){
    image = context.state.profileBackgroundUrl;
    typeClass = 'profile-background';
  } else if (type === "profilePicture"){
    image = context.state.profilePictureUrl;
    typeClass="profile-picture";
  } else {
    image = context.state.imageUrl;
    typeClass = "track-picture-modal";
  }

  return (
    <div className={`image-upload-modal modal-form ${typeClass}`} id="modal-form">
      <div className="image-upload-image-container">
        <img src={image}/>
      </div>
      <div className="cancel-submit">
        <button className="cancel" onClick={context.cancelUpdateImage(type)}>cancel</button>
        <button id="submit" onClick={context.handleSubmit}>Save</button>
      </div>
    </div>
  )
}