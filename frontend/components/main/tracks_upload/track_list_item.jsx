import React from 'react';
import { Redirect } from 'react-router-dom';

class TrackListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {redirect: null, liClass: ""}; 
    this.playTrack = this.playTrack.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
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

  componentDidUpdate(){
    if(this.props.liSelected === this.props.track.id && this.state.liClass != "li-selected"){
      this.setState({ liClass: "li-selected"});
    } else if (this.state.liClass === "li-selected" && this.props.liSelected != this.props.track.id){
      this.setState({ liClass: "" });
    }
  }

  toggleOptions(){
    if(this.state.liClass === ""){
      this.props.freezeListItem(this.props.track.id);
    } else {
      this.props.noListItemFrozen();
    }
  }

  render(){
    let component;
    
    if(this.props.track){
      component = (<li key={this.props.track.id} className={this.state.liClass}>
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
          <i className="fas fa-ellipsis-h" onClick={this.toggleOptions}>
            <div className="ellipsis-options">
              <div className="add-to-up-next" onClick={() => this.props.pushTrackToQueue(this.props.track.id)}>
                <i className="fas fa-list-ul"></i>
                Add To Up Next
              </div>

            </div>
          </i>
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

export default TrackListItem;