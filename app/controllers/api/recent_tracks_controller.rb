class Api::RecentTracksController < ApplicationController

  def create
    @current_track = current_user.recent_tracks.new(track_id: params[:track_id])
    previously_entered = RecentTrack.where(user_id: @current_track.user_id, track_id: @current_track.track_id)
    if previously_entered[0]
      previously_entered[0].update_attributes(updated_at: Time.now())
      @current_track = previously_entered[0]
      render :show
    elsif @current_track.save
      render :show
    else
      render current_track.errors.full_messages
    end
  end
end