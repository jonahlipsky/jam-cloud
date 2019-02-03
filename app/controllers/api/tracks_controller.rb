class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all
    render :index
  end

  def show
    @track = Track.find(params[:id])
    render :show
  end

  def update
    @track = Track.find(params[:id])
    if @track.update_attributes(track_params)
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def create
    @track = current_user.tracks.new(track_params)
    unless @track.image.attached?
      @track.image.attach(io: File.open("/Users/jonahlipsky/app_academy/final_project/jam-cloud/app/assets/images/blur-cloud.png"), filename: "cover.jpg")
    end
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render body: nil, status: :no_content
  end

  private

  def track_params
    params.require(:track).permit(:title, :user_id, :album_id, :sound_file, :image)
  end
end