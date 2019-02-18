class Api::SessionsController < ApplicationController
  def create
    email, password = params[:user][:email], params[:user][:password]
    @user = User.find_by_credentials(email, password)
    if @user
      login(@user)
      render '/api/users/show'
    else
      render json: ["Invalid email/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    logout!
    render 'api/users/show'
  end

end