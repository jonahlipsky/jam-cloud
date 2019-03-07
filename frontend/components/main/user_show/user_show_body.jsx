import React, { Component } from 'react';
import TrackWidget from '../../reuseable_components/widgets/track_widget_container';
import { NavLink } from 'react-router-dom';
import UserFollowStats from './user_follow_stats';
import UserLikesContainer from './user_likes_container';

class UserShowBody extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllLikes();
  }

  render(){
    let widgets = this.props.userTracks.map(track => {
      if(track.widget_identifier){
        return(
          <li key={track.id} className="track-widget">
            <TrackWidget track={track} user={this.props.user}/>
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
          <NavLink to={`/users/${this.props.match.params.userId}`} 
            activeClassName="upload-nav-selected">All</NavLink>
        </div>
        <div className="widgets-and-followers">
          <ul className='widgets'>
            {widgets}
          </ul>
          <div className="followers-following-display">
            <UserFollowStats nFollowers={this.props.nFollowers} 
              nFollowedUsers={this.props.nFollowedUsers} nTracks={this.props.nTracks}/>
            <UserLikesContainer />
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default UserShowBody;