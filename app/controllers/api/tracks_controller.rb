class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all
    render :index
  end

  def show
    @track = Track.find(params[:id])
    render :show
  end

  def create
    # debugger
    @track = current_user.tracks.new(track_params)
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render :show
  end

  private

  def track_params
    params.require(:track).permit(:title, :user_id, :album_id, :track, :image)
  end
end