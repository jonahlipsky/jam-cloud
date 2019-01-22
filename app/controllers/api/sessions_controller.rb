class Api::SessionsController < ApplicationController
  def create
    username, password = params[:user][:username], params[:user][:password]
    # debugger
    @user = User.find_by_credentials(username, password)
    if @user
      login(@user)
      # debugger
      render 'api/users/show'
    else
      render ["Invalid credentials"], status: 401
    end
  end

  def destroy
    logout!
  end

end