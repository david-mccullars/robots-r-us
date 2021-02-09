require_relative "boot"

require "rails"
require "active_record/railtie"
require "action_controller/railtie"
require 'rack/cors'

Bundler.require(*Rails.groups)

module Api
  class Application < Rails::Application
    config.load_defaults 6.1
    config.api_only = true
  end
end
