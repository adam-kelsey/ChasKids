class AddImageTwoToVenues < ActiveRecord::Migration
  def change
    add_column :venues, :image_two, :string
  end
end
