json.array!(@venues) do |venue|
  json.extract! venue, :id, :facebook_id, :category, :name, :image, :website_url, :address_one, :address_two, :city, :state, :zip, :phone_number, :short_description, :long_description, :facebook, :twitter, :birthday_party_venue, :birthday_party_description, :birthday_party_website_url, :birthday_party_phone
  json.url venue_url(venue, format: :json)
end
