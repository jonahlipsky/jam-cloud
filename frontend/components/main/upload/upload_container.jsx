import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import UploadForm from './upload_form';
import { NavLink } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../../util/route_util';
import { removeTrack } from '../../../actions/track_actions';
import { fetchAllUsers } from '../../../actions/session_actions';

const mapStateToProps = state => {
  let currentUserId = state.session.id;
  let currentUserTracks = state.entities.users[currentUserId].track_ids || null;
  return({
    currentUserTracks
  });
};

const mapDispatchToProps = dispatch => ({
  removeTrack: (id) => dispatch(removeTrack(id)),
  fetchAllUsers: () => dispatch(fetchAllUsers())

});

class Upload extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchAllUsers();
  }

  handleRemove(id){
    return e => {
      this.props.removeTrack(id);
    };  
  }

  render(){
    let tracks;
    if(this.props.currentUserTracks){
      tracks = this.props.currentUserTracks.map((trackId, i) => {
          return <li key={i}>Track: {trackId}  <button onClick={this.handleRemove(trackId)}>Delete Track</button></li>
        });
    } else {
      tracks = ''
    }
    return(
      
      <div className="upload-container">
        <nav>
          <NavLink exact to='/upload'>Upload</NavLink>
          <NavLink exact to='/you/tracks'>Your tracks</NavLink>
        </nav>
        <ProtectedRoute exact path="/upload" component={UploadForm}/>
        <ProtectedRoute exact path="/you/tracks" component={<h1>Your Tracks!</h1>}/>
        <ul>
          {tracks}
        </ul>
      </div>
      
    ) 
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Upload));