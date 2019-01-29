import React from 'react';
import { removeTrack, editTrackNumber } from '../../../actions/track_actions';
import { pushTrackToQueue, pushToFrontOfQueue } from '../../../actions/sound_controller_actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  removeTrack: (track) => dispatch(removeTrack(track)),
  editTrackNumber: (id) => dispatch(editTrackNumber(id)),
  pushTrackToQueue: (trackId) => dispatch(pushTrackToQueue(trackId)),
  pushToFrontOfQueue: (trackId) => dispatch(pushToFrontOfQueue(trackId))
});

class TrackListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {redirect: null}; 
    this.playTrack = this.playTrack.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  playTrack(){
    this.props.pushToFrontOfQueue(this.props.track.id);
  }

  handleDelete(){
    this.props.removeTrack(this.props.track);
  }

  handleEdit(){
    this.props.editTrackNumber(this.props.track.id);
    this.setState({redirect: '/upload'});
  }

  render(){
    let component;
    if(this.props.track){
      component = (<li key={this.props.track.id}>
        {this.state.sound}
        <div className="track-list-item-image-container">
          <img src={`${this.props.track.imageUrl}`}/>
          <i className="fa fa-caret-right custom" onClick={this.playTrack}></i>
          <i className="fas fa-circle" onClick={this.playTrack}></i>
        </div>
        <div className="title-author">
          <p className="current-username">{this.props.username}</p>
          <p>{this.props.track.title}</p>
        </div>
        <div className="track-list-item-option-icons">
          <i className="fa fa-edit" onClick={this.handleEdit}></i>
          <i className="fa fa-trash" aria-hidden="true" onClick={this.handleDelete}></i>
        </div>
      </li>)
    } else {
      component = "";
    }
    let redirect;
    if(this.state.redirect){
      redirect = <Redirect to={this.state.redirect} />
    }
    return(
      <>
        {redirect}
        {component}
      </>
    )
  }
}

export default connect(null, mapDispatchToProps)(TrackListItem)