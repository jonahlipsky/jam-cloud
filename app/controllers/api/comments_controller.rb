class Api::CommentsController < ApplicationController
  def create
    @comment = current_user.comments.new(comment_params)
    @comment.track_id = params[:track_id]
    if @comment.save
      render :show 
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
    if params[:track_id]
      @track = Track.where(id: params[:track_id]).includes(comments: [:author]).order('comments.updated_at DESC')[0]
    end 
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