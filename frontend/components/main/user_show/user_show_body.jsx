import React, { Component } from 'react';
import TrackWidget from '../../reuseable_components/widgets/track_widget';
import { NavLink } from 'react-router-dom';

class UserShowBody extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let widgets = this.props.userTracks.map(track => {
      if(track.widget_identifier){
        return(
          <li className="track-widget">
            <TrackWidget key={track.id} track={track} />
          </li>
        )
      } else {
        return null
      }
    });

    return(
      <>
      <div className="user-show-body">

        <div className="user-show-body-nav">
          <NavLink to={`/users/${this.props.match.params.userId}`} activeClassName="upload-nav-selected">All</NavLink>
        </div>
        <div className="widgets-and-followers">
          <ul className='widgets'>
            {widgets}
          </ul>
          <div className="followers-following-display">
            <div className="user-follow-stats">
              <div className="user-stat">
                <p>Followers</p>
                <p>{this.props.nFollowers}</p>
              </div>
              <div className="user-stat">
                <p>Following</p>
                <p>1</p>
              </div>
              <div className="user-stat">
                <p>Tracks</p>
                <p>{this.props.nTracks}</p>
              </div>
            </div>
          </div>
        </div>


      </div>
      </>
    )
  }
}

export default UserShowBody;