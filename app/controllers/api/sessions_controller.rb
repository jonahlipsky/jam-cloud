class Api::SessionsController < ApplicationController
  def create
    username, password = params[:user][:username], params[:user][:password]
    @user = User.find_by_credentials(username, password)
    if @user
      login(@user)
      render 'api/users/show'
    else
      render ["Invalid credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    logout!
    render 'api/users/show'
  end

end