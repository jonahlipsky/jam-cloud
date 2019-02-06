import React from 'react';

class TrackShowBody extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    let profilePicture = this.props.currentUserProfilePicture;

    let parentCommentsArray = [];
    let childCommentsArray = [];
    let parentComments;
    if(this.props.track){

    //separate comments into parent comments and child comments
    this.props.track.comment_ids.forEach(commentId => {
      let comment = this.props.trackComments[commentId];
      if(!comment.parent_comment_id){
        parentCommentsArray.push(comment);
      } else {
        childCommentsArray.push(comment);
      }
    });
    
    //for each child comment, either push it to that array or create an object key pointing to an array of that comment
    let childComments = {};
    childCommentsArray.forEach(comment => {
      if(childComments[comment.parent_comment_id]){
        childComments[comment.parent_comment_id].push(comment);
      } else {
        childComments[comment.parent_comment_id] = [comment];
      }
    });

    parentComments = parentCommentsArray.map((comment) => {
      let childCommentLis;
      if(childComments[comment.id]){
        childCommentLis = childComments[comment.id].map((childComment) => {
          return(<li> 
            <img src={childComment.profilePictureUrl} />
            {childComment.body}
            {childComment.created_at}
          </li>)
        });
      } 
      
      return(
        <li> 
            <img src={comment.profilePictureUrl} />
            {comment.body}
            {comment.created_at}
            <ul>
              {childCommentLis}
            </ul>
        </li>)
    });
    } else {
      parentComments = "";
    }
  

    return(
      <div className="track-show-body">
        <div className="comment-input-show">
          <form className="input-area">
            <img src={profilePicture} />
            <input className="comment-input" placeholder="Comment on this track" type="text"/>
          </form>
          <div className="profile-comment-area">
            <div className="profile-area"></div>
            <div className="comment-area">
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