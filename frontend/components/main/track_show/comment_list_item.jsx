import React from 'react';
import classNames from 'classNames';
import moment from 'moment'
import {parseDate} from '../../../util/general_util';

export default ({comment, childComment, childCommentLis}) => {
  let liClass = classNames("track-comment-li", {"child-comment": childComment})
  let childCommentUl = childCommentLis.length ? <ul>{childCommentLis}</ul> : ""
  let date = parseDate(comment.updated_at).fromNow()
  
  return(
  <li className={liClass}> 
      <div className="list-item-content">
        <img src={comment.profilePictureUrl} />
        <div className="username-body">
          <p>{comment.username}</p>
          <p className="comment-body">{comment.body}</p>
        </div>
        <p className="date">{date}</p>
      </div>
      {childCommentUl}
  </li>
  )
}