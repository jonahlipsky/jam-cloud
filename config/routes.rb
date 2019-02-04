Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index, :create, :show, :destroy, :update] do 
      resources :comments, only: [:create]
    end

    resources :likes, only: [:create, :destroy, :show]
    resources :comments, only: [:show, :index, :update, :destroy]
  end

  root "static_pages#root"
end
