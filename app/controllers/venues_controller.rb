class VenuesController < ApplicationController
  before_action :set_venue, only: [:show, :edit, :update, :destroy]

  def index
    @venues = Venue.all
  end

  def show
  end

  def new
    @venue = Venue.new
  end

  def edit
  end

  def create
    @venue = Venue.new(venue_params)

    respond_to do |format|
      if @venue.save
        format.html { redirect_to venues_path, notice: 'Venue was successfully created.' }
        format.json { render :show, status: :created, location: @venue }
      else
        format.html { render :new }
        format.json { render json: @venue.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @venue.update(venue_params)
        format.html { redirect_to @venue, notice: 'Venue was successfully updated.' }
        format.json { render :show, status: :ok, location: @venue }
      else
        format.html { render :edit }
        format.json { render json: @venue.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @venue.destroy
    respond_to do |format|
      format.html { redirect_to venues_url, notice: 'Venue was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def parks_and_playgrounds
    @venues = []
    Venue.all.each do |venue|
      if venue.category == 'parks_and_playgrounds'
        @venues.push(venue)
      end
      respond_to do |format|
        format.json { render json: @venues.to_json }
      end
    end
  end

  def beaches_and_waterparks
    @venues = []
    Venue.all.each do |venue|
      if venue.category == 'beaches_and_waterparks'
        @venues.push(venue)
      end
      respond_to do |format|
        format.json { render json: @venues.to_json }
      end
    end
  end

  def outdoor_sports_and_recreation
    @venues = []
    Venue.all.each do |venue|
      if venue.category == 'outdoor_sports_and_recreation'
        @venues.push(venue)
      end
      respond_to do |format|
        format.json { render json: @venues.to_json }
      end
    end
  end

  def animals
    @venues = []
    Venue.all.each do |venue|
      if venue.category == 'animals'
        @venues.push(venue)
      end
      respond_to do |format|
        format.json { render json: @venues.to_json }
      end
    end
  end

  def indoor_fun
    @venues = []
    Venue.all.each do |venue|
      if venue.category == 'indoor_fun'
        @venues.push(venue)
      end
      respond_to do |format|
        format.json { render json: @venues.to_json }
      end
    end
  end

  def museums_and_historic_sites
    @venues = []
    Venue.all.each do |venue|
      if venue.category == 'museums_and_historic_sites'
        @venues.push(venue)
      end
      respond_to do |format|
        format.json { render json: @venues.to_json }
      end
    end
  end

  def birthday_party_venues
    @venues = []
    Venue.all.each do |venue|
      if venue.category == 'birthday_party_venues'
        @venues.push(venue)
      end
      respond_to do |format|
        format.json { render json: @venues.to_json }
      end
    end
  end

  def other_kids_resources
    @venues = []
    Venue.all.each do |venue|
      if venue.category == 'other_kids_resources'
        @venues.push(venue)
      end
      respond_to do |format|
        format.json { render json: @venues.to_json }
      end
    end
  end

  private
    def set_venue
      @venue = Venue.find(params[:id])
    end

    def venue_params
      params.require(:venue).permit(:facebook_id, :category, :name, :image, :website_url, :address_one, :address_two, :city, :state, :zip, :phone_number, :short_description, :long_description, :facebook, :twitter, :birthday_party_venue, :birthday_party_description, :birthday_party_website_url, :birthday_party_phone)
    end
end
