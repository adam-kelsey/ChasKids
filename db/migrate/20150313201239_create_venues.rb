class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues do |t|
      t.integer :facebook_id, :limit => 8
      t.string :category
      t.string :name
      t.string :image
      t.text :website_url
      t.string :address_one
      t.string :address_two
      t.string :city
      t.string :state
      t.integer :zip, :limit => 8
      t.integer :phone_number, :limit => 8
      t.string :short_description
      t.text :long_description
      t.text :facebook
      t.text :twitter
      t.boolean :birthday_party_venue
      t.text :birthday_party_description
      t.text :birthday_party_website_url
      t.integer :birthday_party_phone, :limit => 8

      t.timestamps null: false
    end
  end
end
