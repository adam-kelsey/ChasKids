class Venue < ActiveRecord::Base
  CATEGORIES = ["ParksPlaygrounds", "BeachesWaterparks", "OutdoorSports", "Animals", "IndoorFun", "MuseumsHistoric", "BDayPartyVenues", "OtherKids"]

  validates :category, presence: true
end
