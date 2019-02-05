import React from 'react';

class TrackShowBody extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    let profilePicture = this.props.currentUserProfilePicture;
    return(
      <div className="track-show-body">
        <div className="comment-input-show">
          <form className="input-area">
            <img src={profilePicture} />
            <input className="comment-input" type="text"/>
          </form>
          <div className="profile-comment-area"></div>
        </div>
      </div>
    )
  }
}

export default TrackShowBody;