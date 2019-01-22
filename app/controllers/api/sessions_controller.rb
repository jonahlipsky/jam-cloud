class SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(sign_in_params)
    if user
      login(user)
    else
      render ["Invalid credentials"], status: 401
    end
  end

  def destroy
    logout!
  end

  private

  def sign_in_params
    params.require(:user).permit(:username, :password)
  end
end