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
      format.json { render json: @venue.to_json }
    end
  end

  # def new
  #   @venue = Venue.new
  # end

  def create
    @venue = Venue.create venue_params
    respond_to do |format|
      format.json { render json: @venue.to_json }
    end
  end

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

  # def parks_and_playgrounds
  #   @venues = []
  #   Venue.all.each do |venue|
  #     if venue.category == 'parks_and_playgrounds'
  #       @venues.push(venue)
  #     end
  #     respond_to do |format|
  #       format.json { render json: @venues.to_json }
  #     end
  #   end
  # end

  # def beaches_and_waterparks
  #   @venues = []
  #   Venue.all.each do |venue|
  #     if venue.category == 'beaches_and_waterparks'
  #       @venues.push(venue)
  #     end
  #     respond_to do |format|
  #       format.json { render json: @venues.to_json }
  #     end
  #   end
  # end

  # def outdoor_sports_and_recreation
  #   @venues = []
  #   Venue.all.each do |venue|
  #     if venue.category == 'outdoor_sports_and_recreation'
  #       @venues.push(venue)
  #     end
  #     respond_to do |format|
  #       format.json { render json: @venues.to_json }
  #     end
  #   end
  # end

  # def animals
  #   @venues = []
  #   Venue.all.each do |venue|
  #     if venue.category == 'animals'
  #       @venues.push(venue)
  #     end
  #     respond_to do |format|
  #       format.json { render json: @venues.to_json }
  #     end
  #   end
  # end

  # def indoor_fun
  #   @venues = []
  #   Venue.all.each do |venue|
  #     if venue.category == 'indoor_fun'
  #       @venues.push(venue)
  #     end
  #     respond_to do |format|
  #       format.json { render json: @venues.to_json }
  #     end
  #   end
  # end

  # def museums_and_historic_sites
  #   @venues = []
  #   Venue.all.each do |venue|
  #     if venue.category == 'museums_and_historic_sites'
  #       @venues.push(venue)
  #     end
  #     respond_to do |format|
  #       format.json { render json: @venues.to_json }
  #     end
  #   end
  # end

  # def birthday_party_venues
  #   @venues = []
  #   Venue.all.each do |venue|
  #     if venue.category == 'birthday_party_venues'
  #       @venues.push(venue)
  #     end
  #     respond_to do |format|
  #       format.json { render json: @venues.to_json }
  #     end
  #   end
  # end

  # def other_kids_resources
  #   @venues = []
  #   Venue.all.each do |venue|
  #     if venue.category == 'other_kids_resources'
  #       @venues.push(venue)
  #     end
  #     respond_to do |format|
  #       format.json { render json: @venues.to_json }
  #     end
  #   end
  # end

private
  def set_venue
    @venue = Venue.find(params[:id])
  end

  def venue_params
    params.require(:venue).permit(:facebook_id, :category, :name, :image, :website_url, :address_one, :address_two, :city, :state, :zip, :phone_number, :short_description, :long_description, :facebook, :twitter, :birthday_party_venue, :birthday_party_description, :birthday_party_website_url, :birthday_party_phone)
  end
end
