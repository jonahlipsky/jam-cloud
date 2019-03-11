class Api::LikesController < ApplicationController
  def create
    if params[:likeable_type] == "Track"
      track = Track.find_by(id: params[:likeable_id])
      @like = Like.new(likeable: track)
    elsif params[:likeable_type] == "Comment"
      comment = Comment.find_by(id: params[:likeable_id])
      @like = Like.new(likeable: comment)
    elsif params[:likeable_type] == "User"
      user = User.find(params[:likeable_id])
      @like = Like.new(likeable: user)
    else
      render json: 'Error, likeable type not found', status: 422
      return
    end
    @like.user_id = params[:current_user_id]
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def index
    @likes = Like.all.includes(:user, :likeable)
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render body: nil, status: :no_content
  end

end