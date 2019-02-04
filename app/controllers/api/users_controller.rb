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
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all.includes(:tracks)
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :age, :gender, :profile_picture)
  end

end