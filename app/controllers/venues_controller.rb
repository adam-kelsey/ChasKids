class VenuesController < ApplicationController
  def index
    @venues = Venue.all
    respond_to do |format|
      format.json { render json: @venues.to_json }
      format.html
    end
  end

  def create
    @venue = Venue.create venue_params
    respond_to do |format|
      format.json { render json: @venue.to_json }
      format.html
    end
  end

  def update
    @venue = Venue.find params[:id]
    @venue.update_attributes venue_params
    respond_to do |format|
      format.json { render json: @venue.to_json }
      format.html
    end
  end

  def destroy
    @venue = Venue.find params[:id]
    @venue.destroy
    respond_to do |format|
      format.json { render nothing: true }
      format.html
    end
  end

  private
  def venue_params
    params.require(:venue).permit(
      :facebook_id,
      :category,
      :name,
      :image,
      :website_url,
      :address_one,
      :address_two
      :city,
      :state,
      :zip,
      :phone_number,
      :short_description,
      :long_description,
      :facebook,
      :twitter,
      :birthday_party_venue,
      :birthday_party_description,
      :birthday_party_website_url,
      :birthday_party_phone
    )
  end
end
