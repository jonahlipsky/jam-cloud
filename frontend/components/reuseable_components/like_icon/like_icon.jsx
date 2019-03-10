import React, {Component} from 'react';

class LikeIcon extends Component{
  constructor(props){
    super(props);
    this.state = {liked: false};
    this.handleLike = this.handleLike.bind(this);
  }

  likedObject(){
    let likedObjectIds = this.props.likedObjectIds;
    switch(this.props.type){
      case "Track":
        return (likedObjectIds.tracks.indexOf(this.props.element.id) != -1 ? true : false);
      case "Comment":
        return (likedObjectIds.comments.indexOf(this.props.element.id) != -1 ? true : false);
      case "User":
        return (likedObjectIds.users.indexOf(this.props.element.id) != -1 ? true : false);
      default:
        return false;
    }
  }

  findLike(){
    let like = this.props.likedObjects.filter(object => {
      if(this.props.type === object.likeable_type && 
        this.props.element.id === object.likeable_id){
          return true;
        } else {
          return false;
        }
    });
    return (like.length === 1 ? like[0] : null);    
  }

  handleLike(type){
    let that = this;
    return e => {
      e.stopPropagation();
      if(that.state.liked){
        let like = that.findLike();
        if(like){
          that.setState({liked: false});
          that.props.deleteLike(like);
        }
      } else {
        that.setState({liked: true});
        that.props.createLike(type, that.props.element.id);
      }
    };
  }

  componentDidMount(){
    let liked = this.likedObject();
    this.setState({liked});
  }

  render(){
    let icon = "";
    if(this.props.sessionUserId){
      let liked = this.state.liked;
      let type = this.props.type;
      let heartClass = liked ? "fas fa-heart like-icon liked" : "fas fa-heart like-icon";
      let followText = liked ? "Following" : "Follow";
      let followingClass = liked ? "following-user-container like-icon followed" : "following-user-container like-icon";
      icon = this.props.type === "User" ? (
          <div onClick={this.handleLike(type)} className={followingClass}>
            {followText}
          </div>
        ) : (
          <i onClick={this.handleLike(type)} className={heartClass}></i>
        )
    }

    return(
      <>
        {icon}
      </>
    )
  }
}

export default LikeIcon;