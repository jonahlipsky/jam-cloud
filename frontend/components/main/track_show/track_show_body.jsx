import React from 'react';
import CommentListItem from './comment_list_item';
import regeneratorRuntime from "regenerator-runtime";


class TrackShowBody extends React.Component{
  constructor(props){
    super(props);
    this.state = {commentInput: ""};
  }

  handleChange(e){
    this.setState({commentInput: e.currentTarget.value});
  }

  async handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('comment[body]', this.state.commentInput);
    let trackId = this.props.track.id;
    debugger
    await this.props.createComment(trackId, formData);
    debugger
    this.props.fetchTrack(trackId);
  }

  render(){
    let profilePictureCurrentUser = this.props.currentUserProfilePicture;
    let parentComments = this.props.parentComments.length ? this.props.parentComments : [];
    let comments = this.props.comments;

    parentComments = parentComments.map((comment) => {
      let childCommentLis = [];
      if(comment.child_comment_ids.length){
        childCommentLis = comment.child_comment_ids.map((childCommentId) => {
          let childComment = comments[childCommentId]
          return(
            <CommentListItem key={childCommentId} comment={childComment} childComment={true} childCommentLis={[]}/>
            )
        });
      } 
      return(
        <CommentListItem key={comment.id} comment={comment} childComment={false} childCommentLis={childCommentLis}/>
        )
    });
    
    parentComments = parentComments.length ? parentComments : ""
    let profilePicture = this.props.artist ? this.props.artist.profilePicture : ""
    let username = this.props.artist ? this.props.artist.username : ""
    let likes = this.props.track ? this.props.track.likes : ""
    let nComments = this.props.track ? this.props.track.comment_ids.length : ""
    return(
      <div className="track-show-body">
        <div className="comment-input-show">
          <form className="input-area" onSubmit={this.handleSubmit.bind(this)}>
            <img src={profilePictureCurrentUser} />
            <input className="comment-input" placeholder="Comment on this track" value={this.state.commentInput} 
              type="text" onChange={this.handleChange.bind(this)}/>
          </form>
          <div className="profile-comment-area">
            <div className="profile-area">
              <img src={profilePicture}/>
              <p className="username">{username}</p>
              <p><i className="fas fa-users"></i>{likes}</p>
            </div>
            <div className="comment-area">
              <p><i className="fas fa-comments"></i>{nComments} comments</p>
              <ul>
                {parentComments}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrackShowBody;