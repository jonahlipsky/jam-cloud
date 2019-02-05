class RecentTracksController < ApplicationController

  def create
    current_track = current_user.recent_tracks.new(track_id: params[:track_id])
    if current_track.save
      render body: :no_content, status: 200
    else
      render current_track.errors.full_messages
    end
    
    ensure_only_twenty
  end

  def ensure_only_twenty
    recent_tracks = current_user.recent_tracks
    if recent_tracks.length > 20 
      recent_tracks.sort_by(:updated_at).last.destroy
    end
  end

end