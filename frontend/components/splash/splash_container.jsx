import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return(
    <div className="splash-image">
      <div className="splash-auth-btns">
        <button>Sign In</button>
        <button>Create Account</button>
        <button>For Creators</button>
      </div>
      <div className='splash-welcome-text'>
        <h1>Discover music on Jam-Cloud</h1>
        <h2>Upload your own tracks, comment on others, find songs, connect
          with artists, and stay up to date about their latest  releases!</h2>
        <Link to="/upload">Start Uploading Today</Link>
      </div>
      <div className='modal'>

      </div>
      <div className="modal-form">
      </div>
    </div>
  )
}