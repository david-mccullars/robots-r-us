Rails.application.routes.draw do
  namespace :api do
    resources :employees, only: %i[index]
  end
  root to: redirect('/api/employees'), status: 301
end
