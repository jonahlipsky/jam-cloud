class CommentsController < ApplicationController
  def create
    @comment = current_user.comments.new(comment_params)
    @comment.track_id = params[:id]
    if @comment.save
      render :show 
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
    @comments = Track.find(params[:id]).comments
  end
  
  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(comment_params)
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render body: nil, status: :no_content
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end