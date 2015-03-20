task create_venues: :environment do
  10.times do
    Venue.create!({
      facebook_id: Faker::Number.number(2),
      category: [
        "Parks & Playgrounds", "Beaches & Waterparks", "Outdoor & Recreational", "Animals", "Indoor Fun", "Museums & Historic Sites", "Birthday Party Venues"
      ].sample,
      name: Faker::Name.name,
      image: Faker::Avatar.image,
      website_url: Faker::Internet.url,
      address_one: Faker::Address.street_address,
      address_two: Faker::Address.secondary_address,
      city: Faker::Address.city,
      state: Faker::Address.state,
      zip: Faker::Address.zip,
      phone_number: Faker::PhoneNumber.phone_number,
      short_description: Faker::Lorem.sentence,
      long_description: Faker::Lorem.paragraph,
      facebook: Faker::Internet.url,
      twitter: Faker::Internet.url,
      birthday_party_venue: [
        "Yes", "No"
        ].sample,
      birthday_party_description: Faker::Lorem.sentence,
      birthday_party_website_url: Faker::Internet.url,
      birthday_party_phone: Faker::PhoneNumber.phone_number
      })
  end
end