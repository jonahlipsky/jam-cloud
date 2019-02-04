class Api::LikesController < ApplicationController
  def create
    @like = current_user.likes.new(like_params)
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render body: nil, status: :no_content
  end

  private

  def like_params
    params.require(:like).permit(:track_id)
  end
end