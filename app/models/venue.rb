class Venue < ActiveRecord::Base

  CATEGORIES = ["ParksPlaygrounds", "BeachesWaterparks", "OutdoorSports", "Animals", "IndoorFun", "MuseumsHistoric", "BDayPartyVenues", "OtherKids"]

  validates :category, presence: true
  has_many :comments
  has_many :users, through: :user_favorites
  has_many :user_favorites

  def as_json(options={})
    super(:only => [:category, :name, :image, :image_two, :website_url, :address_one, :address_two, :city, :state, :zip, :latitude, :longitude, :phone_number, :short_description, :long_description, :facebook, :twitter, :birthday_party_venue, :birthday_party_description, :birthday_party_website_url, :birthday_party_phone, :id],
      :include => {
        :comments => {:only => [:content, :author, :created_at]}
      }
    )
    end
end
