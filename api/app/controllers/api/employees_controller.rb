module Api
  class EmployeesController < ActionController::Base

    def index
      # IMPLEMENT ME
      render json: File.read(File.expand_path('../src/data.json', Rails.root))
    end

  end
end
