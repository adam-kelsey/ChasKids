class CreateVenue < ActiveRecord::Migration
  def change
    create_table :venues do |t|
      t.integer :facebook_id
      t.string :category
      t.string :name
      t.string :image
      t.string :website_url
      t.string :address_one
      t.string :address_two
      t.string :city
      t.string :state
      t.integer :zip
      t.integer :phone_number
      t.text :short_description
      t.text :long_description
      t.text :facebook
      t.text :twitter
      t.boolean :birthday_party_venue
      t.text :birthday_party_description
      t.string :birthday_party_website_url
      t.integer :birthday_party_phone
    end
  end
end
