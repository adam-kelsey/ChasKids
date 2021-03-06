class FavoritesController < ApplicationController
  def index
    @favorites = current_user.favorite_venues
    respond_to do |format|
      format.json { render json: @favorites.to_json }
    end
  end

  # def new
  # end

  # def create
  #   venueid
  #   current_user
  # end

  # def show
  #   @venue = Venue.find params[:venue_id]
  # end

  # def edit
  # end

  # def update
  # end

  def destroy
    @favorite = UserFavorite.find params[:id]
    @favorite.destroy
    respond_to do |format|
      format.json { render json: @favorite.to_json }
    end
  end


end
