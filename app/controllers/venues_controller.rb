class VenuesController < ApplicationController
  # before_action :set_venue, only: [:show, :edit, :update, :destroy]

  def index
    if params[:q].blank?
      @venues = Venue.all
    else
      @venues = Venue.where("category LIKE ?", "%#{params[:q]}%")
    end
    # @venues = Venue.all
    respond_to do |format|
      format.json { render json: @venues.to_json }
    end
  end

  def show
    @venue = Venue.find params[:id]
    respond_to do |format|
      format.json { render :json => @venue }
    end
  end

  def create
    @venue = Venue.create venue_params
    respond_to do |format|
      format.json { render json: @venue.to_json }
    end
  end

  # def create_comment
  #   @venue = Venue.find params[:id]
  #   @comment = @venue.comments.create(comment_params, author: current_user.email)
  #   respond to do |format|
  #     format.json { render json: @venue.comments.to_json }
  #   end
  # end

  def edit
    @venues = Venue.all
    respond_to do |format|
      format.json { render json: @venues.to_json }
    end
  end

  def update
    @venue = Venue.find params[:id]
    @venue.update_attributes venue_params 
    respond_to do |format|
      format.json { render json: @venue.to_json }
    end
  end

  def destroy
    @venue = Venue.find params[:id]
    @venue.destroy
    respond_to do |format|
      format.json { render json: @venue.to_json }
    end
  end

private
  def set_venue
    @venue = Venue.find(params[:id])
  end

  def venue_params
    params.require(:venue).permit(:category, :name, :image, :website_url, :address_one, :address_two, :city, :state, :zip, :phone_number, :short_description, :long_description, :facebook, :twitter, :birthday_party_venue, :birthday_party_description, :birthday_party_website_url, :birthday_party_phone)
  end
end
