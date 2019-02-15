class Api::TracksController < ApplicationController

  def index
    @tracks = Track.with_attached_image.with_attached_sound_file.all
      .includes(:comments, :likes, :user, :likers).order('comments.updated_at DESC')
  end

  def show
    @track = Track.with_attached_image.with_attached_sound_file.where(id: params[:id])
      .includes(:comments, :likes, :user, :likers).order('comments.updated_at DESC')[0]
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
      @track.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'blur-cloud.png')), filename: "blur-cloud.png")
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
    params.require(:track).permit(:title, :user_id, :album_id, :sound_file, :image, :widget_identifier)
  end
end