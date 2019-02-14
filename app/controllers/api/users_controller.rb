class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    unless @user.profile_picture.attached?
      @user.profile_picture.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'empty_profile.png')), filename: "empty_profile.png")
    end
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.with_attached_profile_picture.all.includes(:tracks, :likes, :recently_played_tracks)
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :age, :gender, :profile_picture)
  end

end