Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :portfolios, only: [:index]
    resources :transactions, only: [:index, :create]
    resources :cryptos, only: [:index, :show]
    get '/cryptoshist/:id', to: 'cryptos#hist'
    resources :watchlists, only: [:index, :create, :destroy]
  end
end