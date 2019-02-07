import React from 'react';
import classNames from 'classNames';
import { parseDate } from '../../../util/general_util';
import ReplyToComment from './reply_to_comment_input';

export default ({comment, childComment, childCommentLis, sessionId, 
  profilePictureCurrentUser, turnedOnLis, resetTurnedOnLis, addListItem, removeComment}) => {
  let liClass = classNames("track-comment-li", {"child-comment": childComment});
  let childCommentUl = childCommentLis.length ? <ul>{childCommentLis}</ul> : ""
  let date = parseDate(comment.updated_at).fromNow()
  let removeCommentClass = classNames({"fa fa-trash": comment.author_id === sessionId, "hidden": comment.author_id != sessionId})
  let turnedOn = turnedOnLis.includes(comment.id) ? true : false;

  let replyCommentInput = (<ReplyToComment parentComment={comment} profilePictureCurrentUser={profilePictureCurrentUser} 
    turnedOn={turnedOn} resetTurnedOnLis={resetTurnedOnLis}/>)
  
    return(
  <li className={liClass}> 
      <div className="list-item-content" >
        <img src={comment.profilePictureUrl} />
        <div className="username-body">
          <p>{comment.username}</p>
          <p className="comment-body">{comment.body}</p>
        </div>
        <div className="date-and-options">
          <p className="date">{date}</p>
          <div className="options">
            <p className="reply-option" onClick={addListItem(comment.id)}><i className="fa fa-reply" aria-hidden="true"></i> Reply</p>
            <i className={removeCommentClass} aria-hidden="true" onClick={removeComment(comment.id)}></i>
          </div>
        </div>
      </div>
      {replyCommentInput}
      {childCommentUl}
  </li>
  )
}