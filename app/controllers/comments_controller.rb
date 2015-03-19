class CommentsController < ApplicationController

  def index
    @comments = Comment.all
    @venue = Venue.find params[:venue_id]
    respond_to do |format|
      format.json { render json: @venue.comments.to_json }
    end
  end

  def create
    @venue = Venue.find params[:venue_id]
    @comment = @venue.comments.create comment_params
    respond_to do |format|
      format.json { render json: @venue.comments.to_json }
    end
  end

private
  def comment_params
    params.require(:comment).permit(
      :content,
      :author
    )
  end
end
