class ApplicationController < ActionController::Base
  helper_method :logged_in?, :current_user

  def current_user
    @current_user ||= User.with_attached_profile_picture.with_attached_profile_background.where(session_token: session[:session_token])
    .includes(:tracks, :likes, :liked_objects, :recently_played_tracks, :followers, :followed_users, 
      :liked_tracks, :liked_comments)[0]
  end

  def logout!
    if current_user
      current_user.reset_session_token!
    end
    session[:session_token] = nil
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

end
