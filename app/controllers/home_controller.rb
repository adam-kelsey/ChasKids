class HomeController < ApplicationController
  def is_admin
    respond_to do |format|
      format.json { render json: current_user.admin.to_json }
    end
  end

  def index
  end
end
