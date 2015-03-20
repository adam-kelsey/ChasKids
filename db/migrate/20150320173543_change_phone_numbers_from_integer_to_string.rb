class ChangePhoneNumbersFromIntegerToString < ActiveRecord::Migration
  def change
    change_column :venues, :category, :string
    change_column :venues, :name, :string
    change_column :venues, :image, :string
    change_column :venues, :website_url, :text
    change_column :venues, :address_one, :string
    change_column :venues, :address_two, :string
    change_column :venues, :city, :string
    change_column :venues, :state, :string
    change_column :venues, :zip, :integer, :limit => nil
    change_column :venues, :phone_number, :integer, :limit => nil
    change_column :venues, :short_description, :string
    change_column :venues, :long_description, :text
    change_column :venues, :facebook, :text
    change_column :venues, :twitter, :text
    change_column :venues, :birthday_party_venue, :string
    change_column :venues, :birthday_party_description, :text
    change_column :venues, :birthday_party_website_url, :text
    change_column :venues, :birthday_party_phone, :integer, :limit => nil
  end
end
