import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../../actions/comment_actions';
import { fetchTrack } from '../../../actions/track_actions';
import regeneratorRuntime from "regenerator-runtime";

const mapDispatchToProps = dispatch => ({
  createComment: (trackId, formData) => dispatch(createComment(trackId, formData)),
  fetchTrack: trackId => dispatch(fetchTrack(trackId))
});

class ReplyToComment extends React.Component{
  constructor(props){
    super(props);
    this.state = {inputText: ""};
  }

  async handleSubmit(){
    if(this.state.inputText.length){
      const formData = new FormData();
      formData.append('comment[body]', this.state.inputText);
      if(!this.props.parentComment.parent_comment_id){
        formData.append('comment[parent_comment_id]', this.props.parentComment.id);
      } else {
        formData.append('comment[parent_comment_id]', this.props.parentComment.parent_comment_id);
      }
      await this.props.createComment(this.props.parentComment.track_id, formData);
      await this.props.fetchTrack(this.props.parentComment.track_id);
      this.props.resetTurnedOnLis();
      this.setState({inputText: ""});
    }
  }

  handleChange(e){
    this.setState({inputText: e.target.value});
  }

  render(){
    let renderElement;

    if(this.props.turnedOn){
      renderElement = (
        <div className="reply-to-comment"> 
          <img className="user-thumbnail" src={this.props.profilePictureCurrentUser}/>
          <form className="reply-to-comment-form" onSubmit={this.handleSubmit.bind(this)}>
            <input onChange={this.handleChange.bind(this)} type="text"/>
          </form>
        </div>
      )
    } else {
      renderElement = ""
    }

    return(
      <>
        {renderElement}
      </>
    )
  }
}



export default connect(null, mapDispatchToProps)(ReplyToComment);