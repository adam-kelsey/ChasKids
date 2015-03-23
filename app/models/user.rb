class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :venues, through: :user_favorites
  has_many :user_favorites

  def favorite_venues
    favorites = []
    venues = self.user_favorites.includes(:venue)
    venues.each do |v|
      favorites << {:id => v.id, :venue_id => v.venue_id, :name => v.venue.name, :short_description => v.venue.short_description, :image => v.venue.image}
    end

    return favorites
  end
end
