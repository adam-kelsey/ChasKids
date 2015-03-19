class CommentsController < ApplicationController

  def index
    @comments = Comment.all
    @venue = Venue.find params[:venue_id]
  end

  def create
    @venue = Venue.find params[:venue_id]
    @comment = @venue.comments.new patient_params
  end

private
  def comment_params
    params.require(:comment).permit(
      :content
    )
  end    
end
