import React from 'react';

export default ({context, type}) => {
  let image = type === "profileBackground" ? context.state.profileBackgroundUrl : context.state.imageUrl;
  let typeClass;
  if(type === "profileBackground"){
    typeClass = 'profile-background';
  } else if (type === "profilePicture"){
    typeClass="profile-picture";
  } else {
    typeClass = "track-picture-modal";
  }
  
  // let typeClass = (type === "profileBackground" ? 'profile-background' : 'profile-picture');

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