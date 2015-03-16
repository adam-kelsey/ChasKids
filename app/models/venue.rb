class Venue < ActiveRecord::Base
  CATEGORIES = ["parks_and_playgrounds", "beaches_and_waterparks", "outdoor_sports_and_recreation", "animals", "indoor_fun", "museums_and_historic_sites", "birthday_party_venues", "other_kids_resources"]

  validates :category, presence: true
end
